"use client"

import { Card, CardContent, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Badge } from "@workspace/ui/components/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@workspace/ui/components/dialog"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  History,
  Search,
  Filter,
  Download,
  CalendarIcon,
  Banknote,
  Smartphone,
  Building2,
  Wallet,
  AlertCircle,
  Eye,
  CheckCircle2,
  XCircle,
  Loader2,
  User,
  Phone,
  Mail,
  MoreVertical,
} from "lucide-react"
import { useState } from "react"
import {
  useGetAllDepositRequestsQuery,
  useApproveDepositRequestMutation,
  useRejectDepositRequestMutation,
  useGetDepositRequestByIdQuery,
  type QueryDepositRequestDto
} from "@/redux/api/deposit-management/depositRequestApi"
import { format } from "date-fns"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@workspace/ui/components/dropdown-menu"


const paymentMethods = ["All", "bKash", "Nagad", "Rocket", "Bank Transfer", "Hand to Hand"]
const statusOptions = ["All", "Pending", "Approved", "Rejected"]

// Generate year options dynamically
const currentYear = new Date().getFullYear()
const yearOptions = Array.from({ length: 5 }, (_, i) => currentYear - i)

// Month options
const monthOptions = [
  { value: "all", label: "All Months" },
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
]

export function AllDepositePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedMonth, setSelectedMonth] = useState<string>("all")
  const [paymentMethodFilter, setPaymentMethodFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")
  const [page, setPage] = useState(1)
  const [limit] = useState(10)

  // Modals state
  const [selectedDepositId, setSelectedDepositId] = useState<string | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isApproveOpen, setIsApproveOpen] = useState(false)
  const [isRejectOpen, setIsRejectOpen] = useState(false)

  // Mapping helpers
  const getStatusEnum = (val: string) => {
    if (val === "All") return "all"
    return val.toUpperCase() as "PENDING" | "APPROVED" | "REJECTED"
  }

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

  // Construct Query
  const queryParams: QueryDepositRequestDto = {
    page,
    limit,
    search: searchTerm || undefined,
    status: getStatusEnum(statusFilter),
    paymentMethod: paymentMethodFilter !== "All" ? getPaymentMethodEnum(paymentMethodFilter) : undefined,
    month: (selectedYear !== "all" && selectedMonth !== "all") ? `${selectedYear}-${selectedMonth}` : undefined
  }

  // Fetch Data
  const { data: response, isLoading } = useGetAllDepositRequestsQuery(queryParams)
  const deposits = response?.data?.requests || []
  const stats = response?.data?.stats

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getPaymentMethodIcon = (method: string) => {
    switch (method?.toLowerCase()) {
      case "bkash":
      case "nagad":
      case "rocket":
        return <Smartphone className="h-4 w-4 text-purple-600" />
      case "bank transfer":
      case "bank":
        return <Building2 className="h-4 w-4 text-blue-600" />
      case "cash":
      case "hand to hand":
        return <Banknote className="h-4 w-4 text-green-600" />
      default:
        return <Wallet className="h-4 w-4 text-gray-600" />
    }
  }

  const getPaymentMethodBadge = (method: string) => {
    const m = method?.toLowerCase() || ""
    if (m.includes("bkash")) return "bg-pink-100 text-pink-800 border-pink-200"
    if (m.includes("nagad")) return "bg-orange-100 text-orange-800 border-orange-200"
    if (m.includes("rocket")) return "bg-purple-100 text-purple-800 border-purple-200"
    if (m.includes("bank")) return "bg-blue-100 text-blue-800 border-blue-200"
    if (m === "hand to hand" || m === "cash") return "bg-green-100 text-green-800 border-green-200"
    return "bg-gray-100 text-gray-800 border-gray-200"
  }


  const handleDetails = (id: string) => {
    setSelectedDepositId(id)
    setIsDetailsOpen(true)
  }

  const handleApprove = (id: string) => {
    setSelectedDepositId(id)
    setIsApproveOpen(true)
  }

  const handleReject = (id: string) => {
    setSelectedDepositId(id)
    setIsRejectOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Deposits</h1>
          <p className="text-gray-600">Administrative view of all deposit requests</p>
        </div>
        <div className="flex gap-2">
          {/* Export button placeholder */}
          <Button variant="outline" size="sm" className="rounded-xl">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats?.total || 0}</div>
            <div className="text-sm text-gray-700">Total Requests</div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{stats?.pending || 0}</div>
            <div className="text-sm text-gray-700">Pending</div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{formatCurrency(stats?.totalAmount || 0)}</div>
            <div className="text-sm text-gray-700">Total Approved Amount</div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{formatCurrency(stats?.totalPenalties || 0)}</div>
            <div className="text-sm text-gray-700">Total Penalties</div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Filters */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, phone, or transaction ID..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setPage(1)
                }}
                className="pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl"
              />
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Year Filter */}
              <Select value={selectedYear} onValueChange={(v) => { setSelectedYear(v); setPage(1); }}>
                <SelectTrigger className="bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {yearOptions.map((year) => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Month Filter */}
              <Select value={selectedMonth} onValueChange={(v) => { setSelectedMonth(v); setPage(1); }}>
                <SelectTrigger className="bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {monthOptions.map((month) => (
                    <SelectItem key={month.value} value={month.value}>{month.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Payment Method Filter */}
              <Select value={paymentMethodFilter} onValueChange={(v) => { setPaymentMethodFilter(v); setPage(1); }}>
                <SelectTrigger className="bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Method" />
                </SelectTrigger>
                <SelectContent>
                  {paymentMethods.map((method) => (
                    <SelectItem key={method} value={method}>{method}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(1); }}>
                <SelectTrigger className="bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end">
              <Button variant="ghost" onClick={() => {
                setSearchTerm("")
                setSelectedYear("all")
                setSelectedMonth("all")
                setPaymentMethodFilter("All")
                setStatusFilter("All")
                setPage(1)
              }}>
                Reset Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="flex justify-center p-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          ) : deposits.length === 0 ? (
            <div className="text-center p-12 text-gray-500">
              No deposit requests found.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-50/50 border-blue-100/50">
                  <TableHead className="font-semibold text-gray-900">Member</TableHead>
                  <TableHead className="font-semibold text-gray-900">Month</TableHead>
                  <TableHead className="font-semibold text-gray-900">Amount</TableHead>
                  <TableHead className="font-semibold text-gray-900">Method</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900">Date</TableHead>
                  <TableHead className="font-semibold text-gray-900 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deposits.map((deposit) => {
                  const isLate = deposit.isPenalized

                  return (
                    <TableRow key={deposit.id} className="hover:bg-blue-50/30 transition-colors">
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900">{deposit.memberName}</span>
                          <span className="text-xs text-gray-500">{deposit.memberEmail}</span>
                        </div>
                      </TableCell>
                      <TableCell>{deposit.monthOf}</TableCell>
                      <TableCell className="font-semibold text-blue-600">
                        {formatCurrency(deposit.amount)}
                        {isLate && <span className="text-xs text-red-500 block">+{formatCurrency(deposit.penalty)} penalty</span>}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getPaymentMethodIcon(deposit.paymentMethod)}
                          <Badge className={`${getPaymentMethodBadge(deposit.paymentMethod)} text-xs border`}>{deposit.paymentMethod}</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${deposit.status === 'approved' ? 'bg-green-100 text-green-800 border-green-200' :
                            deposit.status === 'rejected' ? 'bg-red-100 text-red-800 border-red-200' :
                              'bg-yellow-100 text-yellow-800 border-yellow-200'
                          }`}>
                          {deposit.status.charAt(0).toUpperCase() + deposit.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600 text-sm">
                        {format(new Date(deposit.submissionDate), "dd MMM yyyy")}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleDetails(deposit.id)}>
                              <Eye className="mr-2 h-4 w-4" /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {deposit.status === 'pending' && (
                              <>
                                <DropdownMenuItem onClick={() => handleApprove(deposit.id)} className="text-green-600 focus:text-green-700 focus:bg-green-50">
                                  <CheckCircle2 className="mr-2 h-4 w-4" /> Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleReject(deposit.id)} className="text-red-600 focus:text-red-700 focus:bg-red-50">
                                  <XCircle className="mr-2 h-4 w-4" /> Reject
                                </DropdownMenuItem>
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </div>

        {/* Pagination */}
        {response?.data?.pagination && (
          <div className="flex justify-center p-4 gap-2 border-t border-gray-100">
            <Button
              variant="outline"
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
            >
              Previous
            </Button>
            <div className="flex items-center text-sm text-gray-600">
              Page {response.data.pagination.page} of {response.data.pagination.totalPages}
            </div>
            <Button
              variant="outline"
              disabled={page >= response.data.pagination.totalPages}
              onClick={() => setPage(p => p + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </Card>

      {/* Dialogs */}
      <DepositDetailsDialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen} id={selectedDepositId} />
      <ApproveDialog open={isApproveOpen} onOpenChange={setIsApproveOpen} id={selectedDepositId} />
      <RejectDialog open={isRejectOpen} onOpenChange={setIsRejectOpen} id={selectedDepositId} />

    </div>
  )
}


// --- Dialog Components ---

function DepositDetailsDialog({ open, onOpenChange, id }: { open: boolean, onOpenChange: (open: boolean) => void, id: string | null }) {
  const { data: response, isLoading } = useGetDepositRequestByIdQuery(id ?? "", { skip: !id })
  const deposit = response?.data

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", { style: "currency", currency: "BDT" }).format(amount)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Deposit Details</DialogTitle>
        </DialogHeader>
        {isLoading ? (
          <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>
        ) : deposit ? (
          <div className="space-y-6">
            {/* Status & Basic Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-500">Member</Label>
                <p className="font-medium">{deposit.memberName}</p>
                <p className="text-sm text-gray-500">{deposit.memberEmail}</p>
                <p className="text-sm text-gray-500">{deposit.memberPhone}</p>
              </div>
              <div className="text-right">
                <Badge className={`${deposit.status === 'approved' ? 'bg-green-100 text-green-800' :
                    deposit.status === 'rejected' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                  }`}>
                  {deposit.status.toUpperCase()}
                </Badge>
                <p className="text-sm text-gray-500 mt-1">
                  Submitted: {format(new Date(deposit.submissionDate), "dd MMM yyyy, hh:mm a")}
                </p>
              </div>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 grid grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-500">Amount</Label>
                <p className="text-xl font-bold text-blue-600">{formatCurrency(deposit.amount)}</p>
                {deposit.isPenalized && (
                  <p className="text-sm text-red-500">Includes {formatCurrency(deposit.penalty)} penalty</p>
                )}
              </div>
              <div>
                <Label className="text-gray-500">Month</Label>
                <p className="font-medium">{deposit.monthOf}</p>
              </div>
            </div>

            {/* Payment Details */}
            <div>
              <h3 className="font-semibold mb-2">Payment Information</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <p className="text-gray-500">Method</p>
                <p>{deposit.paymentMethod}</p>

                <p className="text-gray-500">Transaction ID</p>
                <p className="font-mono">{deposit.transactionId}</p>

                {deposit.bankHolderName && (
                  <>
                    <p className="text-gray-500">Account Holder</p>
                    <p>{deposit.bankHolderName}</p>
                  </>
                )}
                {deposit.accountNumber && (
                  <>
                    <p className="text-gray-500">Account Number</p>
                    <p>{deposit.accountNumber}</p>
                  </>
                )}
              </div>
            </div>

            {/* Proof Image */}
            {deposit.proofImage && (
              <div>
                <h3 className="font-semibold mb-2">Payment Proof</h3>
                <div className="rounded-lg overflow-hidden border">
                  <img src={deposit.proofImage} alt="Proof" className="w-full object-cover max-h-80" />
                </div>
              </div>
            )}

            {/* Approval/Rejection Info */}
            {(deposit.approvedBy || deposit.rejectedBy) && (
              <div className="text-sm border-t pt-2 mt-4 text-gray-500">
                {deposit.approvedBy && (
                  <p>Approved by {deposit.approvedBy} on {deposit.approvedAt ? format(new Date(deposit.approvedAt), "dd MMM yyyy") : ""}</p>
                )}
                {deposit.rejectedBy && (
                  <div className="text-red-600">
                    <p>Rejected by {deposit.rejectedBy} on {deposit.rejectedAt ? format(new Date(deposit.rejectedAt), "dd MMM yyyy") : ""}</p>
                    <p>Reason: {deposit.rejectionReason}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">Details not available</div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


function ApproveDialog({ open, onOpenChange, id }: { open: boolean, onOpenChange: (open: boolean) => void, id: string | null }) {
  const [notes, setNotes] = useState("")
  const [approve, { isLoading }] = useApproveDepositRequestMutation()

  const handleConfirm = async () => {
    if (!id) return
    try {
      await approve({ id, data: { notes } }).unwrap()
      toast.success("Deposit approved successfully")
      onOpenChange(false)
      setNotes("")
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to approve deposit")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Approve Deposit</DialogTitle>
          <DialogDescription>
            Are you sure you want to approve this deposit? This will update the member's contribution records.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2 py-2">
          <Label>Admin Notes (Optional)</Label>
          <Textarea
            placeholder="Add any verification notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>Cancel</Button>
          <Button onClick={handleConfirm} disabled={isLoading} className="bg-green-600 hover:bg-green-700 text-white">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CheckCircle2 className="mr-2 h-4 w-4" />}
            Confirm Approve
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function RejectDialog({ open, onOpenChange, id }: { open: boolean, onOpenChange: (open: boolean) => void, id: string | null }) {
  const [reason, setReason] = useState("")
  const [reject, { isLoading }] = useRejectDepositRequestMutation()

  const handleConfirm = async () => {
    if (!id) return
    if (!reason.trim()) {
      toast.error("Rejection reason is required")
      return
    }
    try {
      await reject({ id, data: { rejectionReason: reason } }).unwrap()
      toast.success("Deposit rejected successfully")
      onOpenChange(false)
      setReason("")
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to reject deposit")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reject Deposit</DialogTitle>
          <DialogDescription>
            This action will mark the deposit as rejected and notify the member.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2 py-2">
          <Label>Rejection Reason <span className="text-red-500">*</span></Label>
          <Textarea
            placeholder="Explain why this deposit is being rejected..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>Cancel</Button>
          <Button onClick={handleConfirm} disabled={isLoading} variant="destructive">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <XCircle className="mr-2 h-4 w-4" />}
            Confirm Reject
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
