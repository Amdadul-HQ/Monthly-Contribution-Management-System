"use client"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table"
import { History, Search, Filter, Download, Banknote, Smartphone, Building2, Wallet, AlertCircle } from "lucide-react"
import { useState } from "react"

// Mock deposit history data
const depositHistory = [
  {
    id: 1,
    submissionDate: "2024-09-15",
    submitDate: "2024-09-15",
    reference: "BKS240915001",
    amount: 16000,
    method: "bKash",
    monthOf: "September 2024",
    status: "Completed",
    penalty: 0,
  },
  {
    id: 2,
    submissionDate: "2024-08-18",
    submitDate: "2024-08-15",
    reference: "NGD240818002",
    amount: 15000,
    method: "Nagad",
    monthOf: "August 2024",
    status: "Completed",
    penalty: 500,
  },
  {
    id: 3,
    submissionDate: "2024-07-12",
    submitDate: "2024-07-12",
    reference: "BNK240712003",
    amount: 12000,
    method: "Bank",
    monthOf: "July 2024",
    status: "Completed",
    penalty: 0,
  },
  {
    id: 4,
    submissionDate: "2024-06-20",
    submitDate: "2024-06-15",
    reference: "CSH240620004",
    amount: 18000,
    method: "Cash",
    monthOf: "June 2024",
    status: "Completed",
    penalty: 800,
  },
  {
    id: 5,
    submissionDate: "2024-05-10",
    submitDate: "2024-05-10",
    reference: "BKS240510005",
    amount: 10000,
    method: "bKash",
    monthOf: "May 2024",
    status: "Completed",
    penalty: 0,
  },
  {
    id: 6,
    submissionDate: "2024-04-25",
    submitDate: "2024-04-15",
    reference: "OTH240425006",
    amount: 14000,
    method: "Other",
    monthOf: "April 2024",
    status: "Completed",
    penalty: 1200,
  },
  {
    id: 7,
    submissionDate: "2024-03-08",
    submitDate: "2024-03-08",
    reference: "NGD240308007",
    amount: 8000,
    method: "Nagad",
    monthOf: "March 2024",
    status: "Completed",
    penalty: 0,
  },
  {
    id: 8,
    submissionDate: "2024-02-22",
    submitDate: "2024-02-15",
    reference: "BNK240222008",
    amount: 15000,
    method: "Bank",
    monthOf: "February 2024",
    status: "Completed",
    penalty: 600,
  },
]

const paymentMethods = ["All", "bKash", "Nagad", "Bank", "Cash", "Other"]

export function DepositeHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMethod, setSelectedMethod] = useState("All")
  const [filteredData, setFilteredData] = useState(depositHistory)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getPaymentMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case "bkash":
        return <Smartphone className="h-4 w-4 text-pink-600" />
      case "nagad":
        return <Smartphone className="h-4 w-4 text-orange-600" />
      case "bank":
        return <Building2 className="h-4 w-4 text-blue-600" />
      case "cash":
        return <Banknote className="h-4 w-4 text-green-600" />
      default:
        return <Wallet className="h-4 w-4 text-gray-600" />
    }
  }

  const getPaymentMethodBadge = (method: string) => {
    const colors = {
      bKash: "bg-pink-100 text-pink-800 border-pink-200",
      Nagad: "bg-orange-100 text-orange-800 border-orange-200",
      Bank: "bg-blue-100 text-blue-800 border-blue-200",
      Cash: "bg-green-100 text-green-800 border-green-200",
      Other: "bg-gray-100 text-gray-800 border-gray-200",
    }
    return colors[method as keyof typeof colors] || colors.Other
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    filterData(value, selectedMethod)
  }

  const handleMethodFilter = (method: string) => {
    setSelectedMethod(method)
    filterData(searchTerm, method)
  }

  const filterData = (search: string, method: string) => {
    let filtered = depositHistory

    if (search) {
      filtered = filtered.filter(
        (item) =>
          item.reference.toLowerCase().includes(search.toLowerCase()) ||
          item.monthOf.toLowerCase().includes(search.toLowerCase()) ||
          item.method.toLowerCase().includes(search.toLowerCase()),
      )
    }

    if (method !== "All") {
      filtered = filtered.filter((item) => item.method === method)
    }

    setFilteredData(filtered)
  }

  const getDaysLate = (submissionDate: string, submitDate: string) => {
    const submission = new Date(submissionDate)
    const submit = new Date(submitDate)
    const submitDay = submit.getDate()

    if (submitDay <= 15) return 0
    return submitDay - 15
  }

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900">
          <History className="h-5 w-5 text-blue-600" />
          Deposit History
        </CardTitle>
        <CardDescription className="text-gray-700">Complete history of all your fixed deposit payments</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by reference, month, or method..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl"
            />
          </div>
          <Select value={selectedMethod} onValueChange={handleMethodFilter}>
            <SelectTrigger className="w-full sm:w-48 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by method" />
            </SelectTrigger>
            <SelectContent>
              {paymentMethods.map((method) => (
                <SelectItem key={method} value={method}>
                  {method}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="bg-white/70 border-white/30 hover:bg-white hover:border-blue-400 rounded-xl"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-4">
          {filteredData.map((deposit) => {
            const daysLate = getDaysLate(deposit.submissionDate, deposit.submitDate)
            const isLate = daysLate > 0

            return (
              <Card
                key={deposit.id}
                className={`${
                  isLate ? "bg-red-50/50 border-red-200/50" : "bg-white/50 border-white/30"
                } backdrop-blur-sm shadow-sm`}
              >
                <CardContent className="p-4 space-y-3">
                  {/* Header with Month and Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{deposit.monthOf}</h3>
                      {isLate && <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">Late</Badge>}
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">{deposit.status}</Badge>
                  </div>

                  {/* Amount */}
                  <div className="text-2xl font-bold text-blue-600">{formatCurrency(deposit.amount)}</div>

                  {/* Payment Method */}
                  <div className="flex items-center gap-2">
                    {getPaymentMethodIcon(deposit.method)}
                    <Badge className={`${getPaymentMethodBadge(deposit.method)} text-xs`}>{deposit.method}</Badge>
                  </div>

                  {/* Reference */}
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="text-xs text-gray-600 mb-1">Reference</div>
                    <div className="font-mono text-sm text-gray-900">{deposit.reference}</div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Submission Date</div>
                      <div className="text-sm text-gray-900">
                        {new Date(deposit.submissionDate).toLocaleDateString("en-BD")}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Submit Date</div>
                      <div className="text-sm text-gray-900">
                        {new Date(deposit.submitDate).toLocaleDateString("en-BD")}
                        {isLate && <div className="text-xs text-red-600 mt-1">({daysLate} days late)</div>}
                      </div>
                    </div>
                  </div>

                  {/* Penalty */}
                  {deposit.penalty > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-red-600" />
                          <span className="text-sm font-medium text-red-800">Penalty Applied</span>
                        </div>
                        <span className="font-semibold text-red-600">{formatCurrency(deposit.penalty)}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}

          {/* No results message for mobile */}
          {filteredData.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-2">No deposits found</div>
              <div className="text-sm text-gray-400">Try adjusting your search or filter criteria</div>
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block rounded-xl border border-white/30 bg-white/50 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-50/50 border-blue-100/50">
                  <TableHead className="text-gray-900 font-semibold">Submission Date</TableHead>
                  <TableHead className="text-gray-900 font-semibold">Submit Date</TableHead>
                  <TableHead className="text-gray-900 font-semibold">Reference</TableHead>
                  <TableHead className="text-gray-900 font-semibold">Amount</TableHead>
                  <TableHead className="text-gray-900 font-semibold">Method</TableHead>
                  <TableHead className="text-gray-900 font-semibold">Month Of</TableHead>
                  <TableHead className="text-gray-900 font-semibold">Status</TableHead>
                  <TableHead className="text-gray-900 font-semibold">Penalty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((deposit) => {
                  const daysLate = getDaysLate(deposit.submissionDate, deposit.submitDate)
                  const isLate = daysLate > 0

                  return (
                    <TableRow
                      key={deposit.id}
                      className={`border-blue-100/30 hover:bg-blue-50/30 transition-colors ${
                        isLate ? "bg-red-50/20" : ""
                      }`}
                    >
                      <TableCell className="text-gray-900">
                        {new Date(deposit.submissionDate).toLocaleDateString("en-BD")}
                      </TableCell>
                      <TableCell className="text-gray-900">
                        <div className="flex flex-col">
                          <span>{new Date(deposit.submitDate).toLocaleDateString("en-BD")}</span>
                          {isLate && <span className="text-xs text-red-600">({daysLate} days late)</span>}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm text-gray-900">{deposit.reference}</TableCell>
                      <TableCell className="font-semibold text-blue-600">{formatCurrency(deposit.amount)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getPaymentMethodIcon(deposit.method)}
                          <Badge className={`${getPaymentMethodBadge(deposit.method)} text-xs`}>{deposit.method}</Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900">{deposit.monthOf}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">{deposit.status}</Badge>
                      </TableCell>
                      <TableCell>
                        {deposit.penalty > 0 ? (
                          <span className="font-semibold text-red-600">{formatCurrency(deposit.penalty)}</span>
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>

          {/* No results message for desktop */}
          {filteredData.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-2">No deposits found</div>
              <div className="text-sm text-gray-400">Try adjusting your search or filter criteria</div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100/50">
            <div className="text-2xl font-bold text-blue-600">{filteredData.length}</div>
            <div className="text-sm text-gray-700">Total Records</div>
          </div>
          <div className="bg-green-50/50 rounded-xl p-4 border border-green-100/50">
            <div className="text-2xl font-bold text-green-600">
              {formatCurrency(filteredData.reduce((sum, item) => sum + item.amount, 0))}
            </div>
            <div className="text-sm text-gray-700">Total Amount</div>
          </div>
          <div className="bg-red-50/50 rounded-xl p-4 border border-red-100/50">
            <div className="text-2xl font-bold text-red-600">
              {formatCurrency(filteredData.reduce((sum, item) => sum + item.penalty, 0))}
            </div>
            <div className="text-sm text-gray-700">Total Penalties</div>
          </div>
          <div className="bg-orange-50/50 rounded-xl p-4 border border-orange-100/50">
            <div className="text-2xl font-bold text-orange-600">
              {filteredData.filter((item) => item.penalty > 0).length}
            </div>
            <div className="text-sm text-gray-700">Late Payments</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
