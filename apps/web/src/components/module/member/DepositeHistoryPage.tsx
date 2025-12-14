"use client"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@workspace/ui/components/dialog"
import { History, Search, Filter, AppWindow, Banknote, Smartphone, Building2, Wallet, AlertCircle, Eye, Loader2, CalendarIcon, MapPin, User, Clock, CheckCircle2, XCircle } from "lucide-react"
import { useState } from "react"
import { type QueryDepositDto, useGetAllDepositsQuery, useGetDepositByIdQuery } from "@/redux/api/deposit/depositApi"
import { format } from "date-fns"

const paymentMethods = ["All", "bKash", "Nagad", "Rocket", "Bank Transfer", "Hand to Hand"]

export function DepositeHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMethod, setSelectedMethod] = useState("All")
  const [page, setPage] = useState(1)
  const [limit] = useState(10)

  // Details Modal State
  const [selectedDepositId, setSelectedDepositId] = useState<string | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const getPaymentMethodEnum = (method: string) => {
    switch (method) {
      case "bKash": return "BKASH"
      case "Nagad": return "NAGAD"
      case "Rocket": return "ROCKET"
      case "Bank Transfer": return "BANK_TRANSFER"
      case "Hand to Hand": return "HAND_TO_HAND"
      default: return undefined
    }
  }

  // Query Params
  const queryParams: QueryDepositDto = {
    page,
    limit,
    paymentMethod: selectedMethod !== "All" ? getPaymentMethodEnum(selectedMethod) as any : undefined,
  }

  // Fetch Data
  const { data: depositData, isLoading } = useGetAllDepositsQuery(queryParams)

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
      case "rocket":
      case "nagad":
        return <Smartphone className="h-4 w-4 text-purple-600" />
      case "bank_transfer":
      case "bank":
        return <Building2 className="h-4 w-4 text-blue-600" />
      case "hand_to_hand":
      case "cash":
        return <Banknote className="h-4 w-4 text-green-600" />
      default:
        return <Wallet className="h-4 w-4 text-gray-600" />
    }
  }

  const getPaymentMethodBadge = (method: string) => {
    const m = method.toLowerCase()
    if (m.includes("bkash")) return "bg-pink-100 text-pink-800 border-pink-200"
    if (m.includes("nagad")) return "bg-orange-100 text-orange-800 border-orange-200"
    if (m.includes("rocket")) return "bg-purple-100 text-purple-800 border-purple-200"
    if (m.includes("bank")) return "bg-blue-100 text-blue-800 border-blue-200"
    if (m === "hand_to_hand") return "bg-green-100 text-green-800 border-green-200"
    return "bg-gray-100 text-gray-800 border-gray-200"
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    // Note: Search functionality would ideally require backend support or client-side filtering on fetched data
  }

  const handleMethodFilter = (method: string) => {
    setSelectedMethod(method)
    setPage(1) // Reset to first page
  }

  const getDaysLate = (depositDate: string, paymentDate: string) => {
    const payment = new Date(paymentDate)
    const day = payment.getDate()
    return day > 15 ? day - 15 : 0
  }

  // Filter local data if needed (for search term)
  const filteredDeposits = depositData?.data?.deposits.filter(d =>
    !searchTerm ||
    d.referencePerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (typeof d.depositMonth === 'string' && d.depositMonth.toLowerCase().includes(searchTerm.toLowerCase()))
  ) || []

  // View Details Handler
  const handleViewDetails = (id: string) => {
    setSelectedDepositId(id)
    setIsDetailsOpen(true)
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
              placeholder="Search by reference person..."
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
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        )}

        {/* Content */}
        {!isLoading && (
          <>
            {/* Mobile Card View */}
            <div className="block md:hidden space-y-4">
              {filteredDeposits.map((deposit) => {
                const penalty = Number(deposit.penalty || 0)
                const isLate = penalty > 0

                return (
                  <Card
                    key={deposit.id}
                    className={`${isLate ? "bg-red-50/50 border-red-200/50" : "bg-white/50 border-white/30"
                      } backdrop-blur-sm shadow-sm`}
                  >
                    <CardContent className="p-4 space-y-3">
                      {/* Header with Month and Status */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900">{format(new Date(deposit.depositMonth), "MMMM yyyy")}</h3>
                          {isLate && <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">Late</Badge>}
                        </div>
                        <Badge className={`${deposit.status === 'APPROVED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} text-xs`}>{deposit.status}</Badge>
                      </div>

                      {/* Amount */}
                      <div className="text-2xl font-bold text-blue-600">{formatCurrency(Number(deposit.depositAmount))}</div>

                      {/* Payment Method */}
                      <div className="flex items-center gap-2">
                        {getPaymentMethodIcon(deposit.paymentMethod)}
                        <Badge className={`${getPaymentMethodBadge(deposit.paymentMethod)} text-xs`}>{deposit.paymentMethod.replace("_", " ")}</Badge>
                      </div>

                      <div className="flex justify-end pt-2">
                        <Button variant="ghost" size="sm" onClick={() => handleViewDetails(deposit.id)}>
                          <Eye className="h-4 w-4 mr-2" /> View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block rounded-xl border border-white/30 bg-white/50 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-blue-50/50 border-blue-100/50">
                    <TableHead className="text-gray-900 font-semibold">Month</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Payment Date</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Amount</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Method</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Reference</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Status</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Penalty</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDeposits.map((deposit) => {
                    const penalty = Number(deposit.penalty || 0)
                    const isLate = penalty > 0

                    return (
                      <TableRow
                        key={deposit.id}
                        className={`border-blue-100/30 hover:bg-blue-50/30 transition-colors ${isLate ? "bg-red-50/20" : ""
                          }`}
                      >
                        <TableCell className="text-gray-900">
                          {format(new Date(deposit.depositMonth), "MMMM yyyy")}
                        </TableCell>
                        <TableCell className="text-gray-900">
                          {deposit.paymentDate ? format(new Date(deposit.paymentDate), "dd MMM yyyy") : "-"}
                        </TableCell>
                        <TableCell className="font-semibold text-blue-600">{formatCurrency(Number(deposit.depositAmount))}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getPaymentMethodIcon(deposit.paymentMethod)}
                            <Badge className={`${getPaymentMethodBadge(deposit.paymentMethod)} text-xs`}>{deposit.paymentMethod.replace("_", " ")}</Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-900">{deposit.referencePerson}</TableCell>
                        <TableCell>
                          <Badge className={`${deposit.status === 'APPROVED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} text-xs`}>{deposit.status}</Badge>
                        </TableCell>
                        <TableCell>
                          {penalty > 0 ? (
                            <span className="font-semibold text-red-600">{formatCurrency(penalty)}</span>
                          ) : (
                            <span className="text-gray-500">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => handleViewDetails(deposit.id)}>
                            <Eye className="h-4 w-4 text-blue-600" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>

            {/* Pagination Controls could go here */}
            {depositData?.data?.pagination && (
              <div className="flex justify-center gap-2 mt-4">
                <Button
                  variant="outline"
                  disabled={page === 1}
                  onClick={() => setPage(p => p - 1)}
                >
                  Previous
                </Button>
                <span className="flex items-center text-sm">
                  Page {depositData.data.pagination.page} of {depositData.data.pagination.totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={page >= depositData.data.pagination.totalPages}
                  onClick={() => setPage(p => p + 1)}
                >
                  Next
                </Button>
              </div>
            )}

            {/* No results message */}
            {filteredDeposits.length === 0 && (
              <div className="text-center py-8">
                <div className="text-gray-500 mb-2">No deposits found</div>
                <div className="text-sm text-gray-400">Try adjusting your search or filter criteria</div>
              </div>
            )}
          </>
        )}
      </CardContent>

      {/* Details Dialog */}
      <DepositDetailsDialog
        id={selectedDepositId}
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
      />
    </Card>
  )
}

function DepositDetailsDialog({ id, open, onOpenChange }: { id: string | null, open: boolean, onOpenChange: (open: boolean) => void }) {
  const { data: response, isLoading } = useGetDepositByIdQuery(id ?? "", { skip: !id })
  const deposit = response?.data

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <AppWindow className="h-5 w-5 text-blue-600" />
            Deposit Details
          </DialogTitle>
          <DialogDescription>
            Full details of the deposit transaction
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : deposit ? (
          <div className="space-y-6">
            {/* Status Banner */}
            <div className={`p-4 rounded-xl border ${deposit.status === 'APPROVED' ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'
              }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {deposit.status === 'APPROVED' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <Clock className="h-5 w-5 text-yellow-600" />
                  )}
                  <div>
                    <p className={`font-semibold ${deposit.status === 'APPROVED' ? 'text-green-800' : 'text-yellow-800'}`}>
                      {deposit.status === 'APPROVED' ? 'Approved' : 'Pending Approval'}
                    </p>
                    {deposit.approvedAt && (
                      <p className="text-xs text-green-700">Approved on {format(new Date(deposit.approvedAt), "dd MMM yyyy")}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Value Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Deposit Month</p>
                <p className="font-medium flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-blue-500" />
                  {format(new Date(deposit.depositMonth), "MMMM yyyy")}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium text-lg text-blue-600">
                  {formatCurrency(Number(deposit.depositAmount))}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Payment Method</p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{deposit.paymentMethod.replace("_", " ")}</Badge>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Reference Person</p>
                <p className="font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  {deposit.referencePerson}
                </p>
              </div>
            </div>

            {/* Payment Specific Details */}
            {deposit.handToHandDetails && (
              <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Hand to Hand Details</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Receiver</p>
                    <p className="text-sm font-medium">{deposit.handToHandDetails.receiverName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-medium">{deposit.handToHandDetails.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Handover Time</p>
                    <p className="text-sm font-medium">
                      {format(new Date(deposit.handToHandDetails.handoverDate), "dd MMM yyyy")} at {deposit.handToHandDetails.handoverTime}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {deposit.mobilePaymentDetails && (
              <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Mobile Payment Details</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Provider</p>
                    <p className="text-sm font-medium">{deposit.mobilePaymentDetails.provider}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm font-medium">{deposit.mobilePaymentDetails.phoneNumber}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500">Transaction ID</p>
                    <p className="text-sm font-mono bg-white p-1 rounded border inline-block">
                      {deposit.mobilePaymentDetails.transactionId}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {deposit.bankTransferDetails && (
              <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Bank Transfer Details</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Bank Name</p>
                    <p className="text-sm font-medium">{deposit.bankTransferDetails.bankName || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Account Holder</p>
                    <p className="text-sm font-medium">{deposit.bankTransferDetails.accountHolderName}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500">Account Number</p>
                    <p className="text-sm font-mono">
                      {deposit.bankTransferDetails.accountNumber}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Proof Image */}
            {deposit.proofImage && (
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Payment Proof</h4>
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <img
                    src={deposit.proofImage}
                    alt="Payment Proof"
                    className="w-full h-auto max-h-64 object-cover"
                  />
                </div>
              </div>
            )}

            {/* Notes */}
            {deposit.notes && (
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-900">Notes</h4>
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  {deposit.notes}
                </p>
              </div>
            )}

          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            Details not found.
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
