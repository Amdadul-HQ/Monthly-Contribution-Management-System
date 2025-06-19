"use client"

import { XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts"
import {
  Users,
  Wallet,
  Target,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  UserPlus,
  CreditCard,
  DollarSign,
  Activity,
  Award,
  Download,
  Filter,
  RefreshCw,
  Smartphone,
  Building2,
  Banknote,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Progress } from "@workspace/ui/components/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@workspace/ui/components/chart"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"

// Mock admin data - replace with your actual data
const adminStats = {
  totalAmount: 2450000, // Total deposits across all members
  totalMembers: 156,
  activeMembers: 142,
  inactiveMembers: 14,
  currentMonthTarget: 2500000,
  currentMonthCollected: 1850000,
  totalPenalties: 45000,
  newMembersThisMonth: 8,
  averageMonthlyDeposit: 15000,
  collectionEfficiency: 74, // percentage
}

// Recent member payments
const recentPayments = [
  {
    id: 1,
    memberName: "Mohammad Rahman",
    memberId: "BDT-2024-001234",
    amount: 16000,
    method: "bKash",
    date: "2024-09-20",
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    memberName: "Fatima Khatun",
    memberId: "BDT-2024-001235",
    amount: 12000,
    method: "Nagad",
    date: "2024-09-19",
    status: "Completed",
    penalty: 360,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    memberName: "Abdul Karim",
    memberId: "BDT-2024-001236",
    amount: 18000,
    method: "Bank",
    date: "2024-09-18",
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    memberName: "Rashida Begum",
    memberId: "BDT-2024-001237",
    amount: 15000,
    method: "Hand to Hand",
    date: "2024-09-17",
    status: "Pending",
    penalty: 450,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    memberName: "Aminul Islam",
    memberId: "BDT-2024-001238",
    amount: 20000,
    method: "bKash",
    date: "2024-09-16",
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    memberName: "Salma Akter",
    memberId: "BDT-2024-001239",
    amount: 10000,
    method: "Rocket",
    date: "2024-09-15",
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    memberName: "Rafiqul Hasan",
    memberId: "BDT-2024-001240",
    amount: 14000,
    method: "Nagad",
    date: "2024-09-14",
    status: "Completed",
    penalty: 420,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    memberName: "Nasreen Sultana",
    memberId: "BDT-2024-001241",
    amount: 16000,
    method: "Bank",
    date: "2024-09-13",
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 9,
    memberName: "Mizanur Rahman",
    memberId: "BDT-2024-001242",
    amount: 13000,
    method: "bKash",
    date: "2024-09-12",
    status: "Completed",
    penalty: 390,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 10,
    memberName: "Ruma Khatun",
    memberId: "BDT-2024-001243",
    amount: 17000,
    method: "Hand to Hand",
    date: "2024-09-11",
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

// Monthly collection data
const monthlyCollections = [
  { month: "Jan", amount: 1800000, target: 2000000, members: 120 },
  { month: "Feb", amount: 2100000, target: 2100000, members: 125 },
  { month: "Mar", amount: 1950000, target: 2200000, members: 128 },
  { month: "Apr", amount: 2300000, target: 2300000, members: 132 },
  { month: "May", amount: 2150000, target: 2400000, members: 135 },
  { month: "Jun", amount: 2450000, target: 2400000, members: 140 },
  { month: "Jul", amount: 2200000, target: 2450000, members: 145 },
  { month: "Aug", amount: 2350000, target: 2500000, members: 150 },
  { month: "Sep", amount: 1850000, target: 2500000, members: 156 },
]

// Payment method distribution
const paymentMethodData = [
  { name: "bKash", value: 35, color: "#E91E63" },
  { name: "Nagad", value: 25, color: "#FF9800" },
  { name: "Bank", value: 20, color: "#2196F3" },
  { name: "Hand to Hand", value: 15, color: "#4CAF50" },
  { name: "Rocket", value: 5, color: "#9C27B0" },
]

// Top contributors
const topContributors = [
  { name: "Mohammad Rahman", totalDeposited: 180000, months: 12, avgMonthly: 15000 },
  { name: "Abdul Karim", totalDeposited: 216000, months: 12, avgMonthly: 18000 },
  { name: "Fatima Khatun", totalDeposited: 144000, months: 12, avgMonthly: 12000 },
  { name: "Aminul Islam", totalDeposited: 240000, months: 12, avgMonthly: 20000 },
  { name: "Rashida Begum", totalDeposited: 180000, months: 12, avgMonthly: 15000 },
]

const chartConfig = {
  amount: {
    label: "Amount (BDT)",
    color: "#3B82F6",
  },
  target: {
    label: "Target (BDT)",
    color: "#EF4444",
  },
}

export function AdminOverviewPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("current-month")

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-BD").format(num)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "failed":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPaymentMethodColor = (method: string) => {
    const colors = {
      bKash: "bg-pink-100 text-pink-800 border-pink-200",
      Nagad: "bg-orange-100 text-orange-800 border-orange-200",
      Bank: "bg-blue-100 text-blue-800 border-blue-200",
      "Hand to Hand": "bg-green-100 text-green-800 border-green-200",
      Rocket: "bg-purple-100 text-purple-800 border-purple-200",
    }
    return colors[method as keyof typeof colors] || colors.Bank
  }

  const getPaymentMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case "bkash":
        return <Smartphone className="h-4 w-4 text-pink-600" />
      case "nagad":
        return <Smartphone className="h-4 w-4 text-orange-600" />
      case "rocket":
        return <Smartphone className="h-4 w-4 text-purple-600" />
      case "bank":
        return <Building2 className="h-4 w-4 text-blue-600" />
      case "hand to hand":
        return <Banknote className="h-4 w-4 text-green-600" />
      default:
        return <Wallet className="h-4 w-4 text-gray-600" />
    }
  }

  const collectionProgress = (adminStats.currentMonthCollected / adminStats.currentMonthTarget) * 100

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Overview</h1>
          <p className="text-gray-600">Complete system overview and member management</p>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
        {/* Total Amount */}
        <Card className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Amount</p>
                <p className="text-3xl font-bold">{formatCurrency(adminStats.totalAmount)}</p>
                <p className="text-blue-100 text-xs mt-1">All deposits combined</p>
              </div>
              <Wallet className="h-12 w-12 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        {/* Total Members */}
        <Card className="bg-gradient-to-r from-green-600 to-emerald-500 text-white border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Total Members</p>
                <p className="text-3xl font-bold">{formatNumber(adminStats.totalMembers)}</p>
                <p className="text-green-100 text-xs mt-1">
                  {adminStats.activeMembers} active, {adminStats.inactiveMembers} inactive
                </p>
              </div>
              <Users className="h-12 w-12 text-green-200" />
            </div>
          </CardContent>
        </Card>

        {/* Current Month Target */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-500 text-white border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Monthly Target</p>
                <p className="text-3xl font-bold">{Math.round(collectionProgress)}%</p>
                <p className="text-purple-100 text-xs mt-1">
                  {formatCurrency(adminStats.currentMonthCollected)} / {formatCurrency(adminStats.currentMonthTarget)}
                </p>
              </div>
              <Target className="h-12 w-12 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        {/* Total Penalties */}
        <Card className="bg-gradient-to-r from-red-600 to-orange-500 text-white border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm font-medium">Total Penalties</p>
                <p className="text-3xl font-bold">{formatCurrency(adminStats.totalPenalties)}</p>
                <p className="text-red-100 text-xs mt-1">Late payment fees</p>
              </div>
              <AlertTriangle className="h-12 w-12 text-red-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Month Progress */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Target className="h-5 w-5 text-blue-600" />
            September 2024 Collection Progress
          </CardTitle>
          <CardDescription className="text-gray-700">Current month target vs actual collection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-2">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium text-gray-900">{Math.round(collectionProgress)}%</span>
            </div>
            <Progress value={collectionProgress} className="h-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100/50">
              <div className="text-2xl font-bold text-blue-600">{formatCurrency(adminStats.currentMonthCollected)}</div>
              <div className="text-sm text-gray-700">Collected</div>
            </div>
            <div className="bg-red-50/50 rounded-xl p-4 border border-red-100/50">
              <div className="text-2xl font-bold text-red-600">
                {formatCurrency(adminStats.currentMonthTarget - adminStats.currentMonthCollected)}
              </div>
              <div className="text-sm text-gray-700">Remaining</div>
            </div>
            <div className="bg-green-50/50 rounded-xl p-4 border border-green-100/50">
              <div className="text-2xl font-bold text-green-600">{adminStats.collectionEfficiency}%</div>
              <div className="text-sm text-gray-700">Efficiency</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Collection Chart */}
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Monthly Collections
            </CardTitle>
            <CardDescription className="text-gray-700">Target vs actual collections over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyCollections}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    tickFormatter={(value) => `${value / 1000000}M`}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value, name) => [
                          formatCurrency(value as number),
                          name === "amount" ? "Collected" : "Target",
                        ]}
                        labelFormatter={(label) => `${label} 2024`}
                        className="bg-white/90 backdrop-blur-sm text-black border-blue-200"
                      />
                    }
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#3B82F6", strokeWidth: 2, fill: "#2563EB" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="#EF4444"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#EF4444", strokeWidth: 2, fill: "#DC2626" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Payment Method Distribution */}
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <CreditCard className="h-5 w-5 text-blue-600" />
              Payment Methods
            </CardTitle>
            <CardDescription className="text-gray-700">Distribution of payment methods used</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={paymentMethodData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {paymentMethodData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-lg p-3 shadow-lg">
                            <p className="font-medium">{data.name}</p>
                            <p className="text-sm text-gray-600">{data.value}% of payments</p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {paymentMethodData.map((method) => (
                <div key={method.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: method.color }}></div>
                  <span className="text-sm text-gray-700">
                    {method.name} ({method.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:flex gap-5 lg:space-y-0 space-y-5">

              {/* Recent Member Payments */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Activity className="h-5 w-5 text-blue-600" />
            Recent Member Payments
          </CardTitle>
          <CardDescription className="text-gray-700">Latest 10 member deposit transactions</CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          {/* Mobile Card View */}
          <div className="block md:hidden space-y-4">
            {recentPayments.map((payment) => (
              <Card
                key={payment.id}
                className={`${
                  payment.penalty > 0 ? "bg-red-50/50 border-red-200/50" : "bg-blue-50/50 border-blue-100/50"
                } backdrop-blur-sm shadow-sm`}
              >
                <CardContent className="space-y-3">
                  {/* Header with Member Info and Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={payment.avatar || "/placeholder.svg"} alt={payment.memberName} />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {payment.memberName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">{payment.memberName}</h3>
                        <Badge className={`${getStatusColor(payment.status)} text-xs`}>{payment.status}</Badge>
                      </div>
                    </div>
                    {/*  */}

                  <div>
                    {/* Amount */}
                    <div className="text-xl font-bold text-blue-600">{formatCurrency(payment.amount)}</div>
                    {/* Payment Method */}
                    <div className="flex items-center gap-2">
                        {getPaymentMethodIcon(payment.method)}
                        <Badge className={`${getPaymentMethodColor(payment.method)} text-xs`}>{payment.method}</Badge>
                    </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="bg-gray-50 rounded-lg flex items-center gap-x-1">
                    <div className="text-xs text-gray-600 font-semibold">Payment Date:</div>
                    <div className="text-sm text-gray-900">{new Date(payment.date).toLocaleDateString("en-BD")}</div>
                  </div>

                  {/* Penalty */}
                  {payment.penalty > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                          <span className="text-sm font-medium text-red-800">Penalty Applied</span>
                        </div>
                        <span className="font-semibold text-red-600">{formatCurrency(payment.penalty)}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop List View */}
          <div className="hidden md:block space-y-4">
            {recentPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 bg-blue-50/50 rounded-xl border border-blue-100/50 hover:bg-blue-50/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={payment.avatar || "/placeholder.svg"} alt={payment.memberName} />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {payment.memberName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{payment.memberName}</p>
                    <p className="text-sm text-gray-600">{payment.memberId}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-blue-600">{formatCurrency(payment.amount)}</p>
                    {payment.penalty > 0 && (
                      <p className="text-xs text-red-600">Penalty: {formatCurrency(payment.penalty)}</p>
                    )}
                  </div>

                  <Badge className={`${getPaymentMethodColor(payment.method)} text-xs`}>{payment.method}</Badge>

                  <Badge className={`${getStatusColor(payment.status)} text-xs`}>{payment.status}</Badge>

                  <div className="text-right">
                    <p className="text-sm text-gray-900">{new Date(payment.date).toLocaleDateString("en-BD")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Contributors */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg w-full h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Award className="h-5 w-5 text-blue-600" />
            Top Contributors
          </CardTitle>
          <CardDescription className="text-gray-700">Members with highest total deposits</CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          <div className="space-y-3">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.name}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl border border-blue-100/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{contributor.name}</p>
                    <p className="text-sm text-gray-600">{contributor.months} months active</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-600">{formatCurrency(contributor.totalDeposited)}</p>
                  <p className="text-sm text-gray-600">Avg: {formatCurrency(contributor.avgMonthly)}/month</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      </div>
    </div>
  )
}

