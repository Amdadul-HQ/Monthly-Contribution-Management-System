"use client"

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Calendar, TrendingUp, Wallet, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@workspace/ui/components/chart"
import { useGetMemberOverviewQuery } from "@/redux/api/user-management/userApi"
import Link from "next/link"

const chartConfig = {
  amount: {
    label: "Amount (BDT)",
    color: "#3B82F6",
  },
}

export function MemberOverViewPage() {
  const { data: response, isLoading } = useGetMemberOverviewQuery()
  const overviewData = response?.data

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  if (!overviewData) {
    return <div className="text-center p-8">Failed to load overview data.</div>
  }

  const { totalReserved, totalPenalty, recentDeposits, monthlyPayments, currentMonth, summaryStats } = overviewData

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-500 relative overflow-hidden">
      {/* Animated background elements matching login page */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-4">
          <h1 className="text-3xl font-bold text-gray-900">Fixed Deposit Dashboard</h1>
          <p className="text-gray-700">Track your savings and deposit history</p>
        </div>

        <div className="lg:grid flex gap-3 flex-col lg:grid-cols-4 lg:gap-3">
          {/* Total Reserved Amount */}
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 shadow-xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Wallet className="h-5 w-5" />
                Total Reserved Amount
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{formatCurrency(totalReserved)}</div>
              <p className="text-blue-100 mt-1">Your total fixed deposit savings</p>
            </CardContent>
          </Card>

          {/* Total Penalty Amount */}
          <Card className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 shadow-xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="h-5 w-5" />
                Total Penalty Amount
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{formatCurrency(totalPenalty)}</div>
              <p className="text-red-100 mt-1">Late payment penalties accumulated</p>
            </CardContent>
          </Card>

          {/* Summary Stats */}
          <div className="gap-3 lg:col-span-2 flex-col flex lg:grid-cols-2 grid-cols-1">
            <div className="flex gap-3">
              <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg w-full">
                <CardContent className="p-4 text-center">
                  <div className="lg:text-2xl font-bold text-cyan-600">
                    {formatCurrency(summaryStats.last5MonthsTotal)}
                  </div>
                  <p className="text-sm text-gray-700">Last 5 Months</p>
                </CardContent>
              </Card>


              <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg w-full">
                <CardContent className="p-4 text-center">
                  <div className="lg:text-2xl font-bold text-cyan-700">
                    {formatCurrency(summaryStats.averageMonthly)}
                  </div>
                  <p className="text-sm text-gray-700">Avg Monthly</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full">
              <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{summaryStats.recentDepositsCount}</div>
                  <p className="text-sm text-gray-700">Recent Deposits</p>
                </CardContent>
              </Card>
              <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">
                    {summaryStats.monthsPaid}
                  </div>
                  <p className="text-sm text-gray-700">Months Paid</p>
                </CardContent>
              </Card>
              <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {summaryStats.latePaymentsCount}
                  </div>
                  <p className="text-sm text-gray-700">Late Payments</p>
                </CardContent>
              </Card>
            </div>


          </div>

        </div>

        {/* Current Month Status & Recent Deposits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Current Month Status */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Calendar className="h-5 w-5 text-blue-600" />
                {currentMonth.month} Status
              </CardTitle>
              <CardDescription className="text-gray-700">Current month fixed deposit status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Monthly Amount:</span>
                <span className="font-semibold text-gray-900">{formatCurrency(currentMonth.amount)}</span>
              </div>

              <div className="flex items-center gap-2">
                {currentMonth.isPaid ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <Badge className="bg-green-100 text-green-800 border-green-200">Paid</Badge>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">Pending</Badge>
                  </>
                )}
              </div>

              {!currentMonth.isPaid && (
                <Link href="/dashboard/member/deposit">
                  <Button
                    className="w-full mt-4 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                    size="lg"
                  >
                    Deposit Now
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>

          {/* Recent Deposits */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Recent Deposits
              </CardTitle>
              <CardDescription className="text-gray-700">Last 5 months deposit history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentDeposits.length > 0 ? (
                  recentDeposits.map((deposit, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-xl border ${deposit.isPenalized ? "bg-red-50/50 border-red-200/50" : "bg-blue-50/50 border-blue-100/50"
                        }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm text-gray-900">{deposit.month}</p>
                          {deposit.isPenalized && (
                            <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">Late</Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-600">
                          {new Date(deposit.date).toLocaleDateString("en-BD")}
                          {deposit.isPenalized && (
                            <span className="text-red-600 ml-1">({deposit.daysLate} days late)</span>
                          )}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-blue-600">{formatCurrency(deposit.amount)}</p>
                        {deposit.penalty > 0 && (
                          <p className="text-xs text-red-600 font-medium">Penalty: {formatCurrency(deposit.penalty)}</p>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-4">No recent deposits found.</div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 12-Month Payment Chart */}
        <Card className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white border-blue-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-white">Monthly Payments</CardTitle>
            <CardDescription className="text-blue-200">Your monthly deposit payments for the year</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyPayments}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#BFDBFE", fontSize: 12 }} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#BFDBFE", fontSize: 12 }}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value, name) => [formatCurrency(value as number), "Amount"]}
                        labelFormatter={(label) => `${label} ${new Date().getFullYear()}`}
                        className="bg-white/90 backdrop-blur-sm text-black border-blue-200"
                      />
                    }
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#06B6D4"
                    strokeWidth={3}
                    dot={{ fill: "#06B6D4", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#06B6D4", strokeWidth: 2, fill: "#0891B2" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            {/* Chart Legend */}
            <div className="flex items-center justify-center mt-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <span className="text-sm text-blue-200">Monthly Deposits</span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Bottom spacing */}
        <div className="h-8"></div>
      </div>

      {/* Bottom gradient overlay matching login page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600 to-transparent"></div>
    </div>
  )
}