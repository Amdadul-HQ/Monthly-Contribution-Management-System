"use client"

import { useState } from "react"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import {
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Search,
  Calendar,
  Smartphone,
  Building2,
  Banknote,
  AlertTriangle,
  FileImage,
  Download,
  RefreshCw,
  CreditCard,
  Hash,
} from "lucide-react"

// Mock data for deposit requests
const mockDepositRequests = [
  {
    id: "DR001",
    memberId: "M001",
    memberName: "Ahmed Hassan",
    memberEmail: "ahmed.hassan@email.com",
    memberPhone: "+880171234567",
    accountType: "Premium",
    avatar: "/placeholder.svg?height=40&width=40",
    monthOf: "September 2024",
    amount: 15000,
    paymentMethod: "bKash",
    transactionId: "BKS240915001",
    referenceNumber: "REF-2024-09-001",
    bankHolderName: "",
    accountNumber: "",
    submissionDate: "2024-09-15T10:30:00Z",
    proofImage: "/placeholder.svg?height=300&width=400",
    status: "pending",
    notes: "Monthly deposit for September 2024",
    penalty: 0,
    isPenalized: false,
    daysLate: 0,
  },
  {
    id: "DR002",
    memberId: "M002",
    memberName: "Fatima Rahman",
    memberEmail: "fatima.rahman@email.com",
    memberPhone: "+880181234567",
    accountType: "Standard",
    avatar: "/placeholder.svg?height=40&width=40",
    monthOf: "September 2024",
    amount: 12000,
    paymentMethod: "Nagad",
    transactionId: "NGD240918002",
    referenceNumber: "REF-2024-09-002",
    bankHolderName: "",
    accountNumber: "",
    submissionDate: "2024-09-18T14:15:00Z",
    proofImage: "/placeholder.svg?height=300&width=400",
    status: "pending",
    notes: "Late submission - penalty may apply",
    penalty: 300,
    isPenalized: true,
    daysLate: 3,
  },
  {
    id: "DR003",
    memberId: "M003",
    memberName: "Mohammad Ali",
    memberEmail: "mohammad.ali@email.com",
    memberPhone: "+880191234567",
    accountType: "Basic",
    avatar: "/placeholder.svg?height=40&width=40",
    monthOf: "September 2024",
    amount: 10000,
    paymentMethod: "Bank Transfer",
    transactionId: "BT240920003",
    referenceNumber: "REF-2024-09-003",
    bankHolderName: "Mohammad Ali",
    accountNumber: "1234567890",
    submissionDate: "2024-09-20T09:45:00Z",
    proofImage: "/placeholder.svg?height=300&width=400",
    status: "pending",
    notes: "Bank transfer deposit with proof attached",
    penalty: 500,
    isPenalized: true,
    daysLate: 5,
  },
  {
    id: "DR004",
    memberId: "M004",
    memberName: "Rashida Begum",
    memberEmail: "rashida.begum@email.com",
    memberPhone: "+880161234567",
    accountType: "Premium",
    avatar: "/placeholder.svg?height=40&width=40",
    monthOf: "August 2024",
    amount: 18000,
    paymentMethod: "Rocket",
    transactionId: "RKT240825004",
    referenceNumber: "REF-2024-08-004",
    bankHolderName: "",
    accountNumber: "",
    submissionDate: "2024-08-25T16:20:00Z",
    proofImage: "/placeholder.svg?height=300&width=400",
    status: "approved",
    notes: "Approved on 2024-08-26",
    penalty: 1000,
    isPenalized: true,
    daysLate: 10,
  },
  {
    id: "DR005",
    memberId: "M005",
    memberName: "Karim Sheikh",
    memberEmail: "karim.sheikh@email.com",
    memberPhone: "+880151234567",
    accountType: "Standard",
    avatar: "/placeholder.svg?height=40&width=40",
    monthOf: "August 2024",
    amount: 8000,
    paymentMethod: "Cash",
    transactionId: "CASH240830005",
    referenceNumber: "REF-2024-08-005",
    bankHolderName: "",
    accountNumber: "",
    submissionDate: "2024-08-30T11:10:00Z",
    proofImage: "/placeholder.svg?height=300&width=400",
    status: "rejected",
    notes: "Rejected due to insufficient proof",
    penalty: 1500,
    isPenalized: true,
    daysLate: 15,
  },
]

export function DepositRequests() {
  const [requests, setRequests] = useState(mockDepositRequests)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [monthFilter, setMonthFilter] = useState("all")
  const [paymentMethodFilter, setPaymentMethodFilter] = useState("all")
  const [selectedRequest, setSelectedRequest] = useState<any>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [actionNotes, setActionNotes] = useState("")
  const itemsPerPage = 8

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-orange-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Rejected</Badge>
      case "pending":
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Pending</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Unknown</Badge>
    }
  }

  const getPaymentMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case "bkash":
      case "nagad":
      case "rocket":
        return <Smartphone className="h-4 w-4" />
      case "bank transfer":
        return <Building2 className="h-4 w-4" />
      case "cash":
        return <Banknote className="h-4 w-4" />
      default:
        return <CreditCard className="h-4 w-4" />
    }
  }

  const getPaymentMethodColor = (method: string) => {
    switch (method.toLowerCase()) {
      case "bkash":
        return "bg-pink-100 text-pink-800 border-pink-200"
      case "nagad":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "rocket":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "bank transfer":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "cash":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const handleApprove = (requestId: string, notes = "") => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === requestId
          ? { ...req, status: "approved", notes: notes || `Approved on ${new Date().toLocaleDateString()}` }
          : req,
      ),
    )
    setActionNotes("")
  }

  const handleReject = (requestId: string, notes = "") => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === requestId
          ? { ...req, status: "rejected", notes: notes || `Rejected on ${new Date().toLocaleDateString()}` }
          : req,
      ),
    )
    setActionNotes("")
  }

  // Filter requests
  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.memberId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.memberEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || request.status === statusFilter
    const matchesMonth = monthFilter === "all" || request.monthOf.includes(monthFilter)
    const matchesPaymentMethod = paymentMethodFilter === "all" || request.paymentMethod === paymentMethodFilter

    return matchesSearch && matchesStatus && matchesMonth && matchesPaymentMethod
  })

  // Pagination
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedRequests = filteredRequests.slice(startIndex, startIndex + itemsPerPage)

  // Statistics
  const stats = {
    total: filteredRequests.length,
    pending: filteredRequests.filter((r) => r.status === "pending").length,
    approved: filteredRequests.filter((r) => r.status === "approved").length,
    rejected: filteredRequests.filter((r) => r.status === "rejected").length,
    totalAmount: filteredRequests.reduce((sum, r) => sum + r.amount, 0),
    totalPenalties: filteredRequests.reduce((sum, r) => sum + r.penalty, 0),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Deposit Request Validation</h2>
        <p className="text-gray-600">Review and approve member deposit requests</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            <p className="text-sm text-gray-700">Total Requests</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
            <p className="text-sm text-gray-700">Pending</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
            <p className="text-sm text-gray-700">Approved</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
            <p className="text-sm text-gray-700">Rejected</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-lg font-bold text-cyan-600">{formatCurrency(stats.totalAmount)}</div>
            <p className="text-sm text-gray-700">Total Amount</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-lg font-bold text-red-600">{formatCurrency(stats.totalPenalties)}</div>
            <p className="text-sm text-gray-700">Total Penalties</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <Label htmlFor="search" className="text-sm font-medium text-gray-700 mb-2 block">
                Search Requests
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="search"
                  placeholder="Search by name, ID, email, transaction..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/50 border-white/30"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-white/50 border-white/30">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Month Filter */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">Month</Label>
              <Select value={monthFilter} onValueChange={setMonthFilter}>
                <SelectTrigger className="bg-white/50 border-white/30">
                  <SelectValue placeholder="All Months" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Months</SelectItem>
                  <SelectItem value="September">September</SelectItem>
                  <SelectItem value="August">August</SelectItem>
                  <SelectItem value="July">July</SelectItem>
                  <SelectItem value="June">June</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Payment Method Filter */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">Payment Method</Label>
              <Select value={paymentMethodFilter} onValueChange={setPaymentMethodFilter}>
                <SelectTrigger className="bg-white/50 border-white/30">
                  <SelectValue placeholder="All Methods" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Methods</SelectItem>
                  <SelectItem value="bKash">bKash</SelectItem>
                  <SelectItem value="Nagad">Nagad</SelectItem>
                  <SelectItem value="Rocket">Rocket</SelectItem>
                  <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                  <SelectItem value="Cash">Cash</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm("")
                setStatusFilter("all")
                setMonthFilter("all")
                setPaymentMethodFilter("all")
                setCurrentPage(1)
              }}
              className="bg-white/50 border-white/30 hover:bg-white/70"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4">
        {paginatedRequests.map((request) => (
          <Card
            key={request.id}
            className={`${
              request.status === "pending"
                ? "bg-orange-50/50 border-orange-200/50"
                : request.status === "approved"
                  ? "bg-green-50/50 border-green-200/50"
                  : "bg-red-50/50 border-red-200/50"
            } backdrop-blur-sm shadow-lg`}
          >
            <CardContent className="p-4 space-y-4">
              {/* Header with Member Info and Status */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.memberName} />
                    <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                      {request.memberName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">{request.memberName}</h3>
                    <p className="text-sm text-gray-600">{request.memberId}</p>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs mt-1">
                      {request.accountType}
                    </Badge>
                  </div>
                </div>
                {getStatusBadge(request.status)}
              </div>

              {/* Amount and Month */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Deposit Amount</span>
                  <span className="text-2xl font-bold text-blue-600">{formatCurrency(request.amount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Month Of</span>
                  <span className="text-sm font-medium text-gray-900">{request.monthOf}</span>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Payment Method</span>
                  <Badge className={`${getPaymentMethodColor(request.paymentMethod)} text-xs`}>
                    {getPaymentMethodIcon(request.paymentMethod)}
                    <span className="ml-1">{request.paymentMethod}</span>
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Transaction ID</span>
                  <span className="text-sm font-mono text-gray-900">{request.transactionId}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Reference</span>
                  <span className="text-sm font-mono text-gray-900">{request.referenceNumber}</span>
                </div>
              </div>

              {/* Bank Details (if applicable) */}
              {request.paymentMethod === "Bank Transfer" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Bank Transfer Details</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-xs text-blue-600">Account Holder</span>
                      <span className="text-xs text-blue-900">{request.bankHolderName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-blue-600">Account Number</span>
                      <span className="text-xs font-mono text-blue-900">{request.accountNumber}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Penalty Warning */}
              {request.isPenalized && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-medium text-red-800">Late Payment Penalty</span>
                    </div>
                    <span className="font-semibold text-red-600">{formatCurrency(request.penalty)}</span>
                  </div>
                  <p className="text-xs text-red-600 mt-1">{request.daysLate} days late</p>
                </div>
              )}

              {/* Submission Date */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Submitted</span>
                <span>{new Date(request.submissionDate).toLocaleDateString("en-BD")}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/50 border-white/30 hover:bg-white/70"
                      onClick={() => setSelectedRequest(request)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Deposit Request Details</DialogTitle>
                      <DialogDescription>
                        Review all details before approving or rejecting this request
                      </DialogDescription>
                    </DialogHeader>
                    {selectedRequest && (
                      <div className="space-y-4">
                        {/* Member Info */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-3">Member Information</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-sm text-gray-600">Name</Label>
                              <p className="font-medium">{selectedRequest.memberName}</p>
                            </div>
                            <div>
                              <Label className="text-sm text-gray-600">Member ID</Label>
                              <p className="font-medium">{selectedRequest.memberId}</p>
                            </div>
                            <div>
                              <Label className="text-sm text-gray-600">Email</Label>
                              <p className="font-medium">{selectedRequest.memberEmail}</p>
                            </div>
                            <div>
                              <Label className="text-sm text-gray-600">Phone</Label>
                              <p className="font-medium">{selectedRequest.memberPhone}</p>
                            </div>
                          </div>
                        </div>

                        {/* Deposit Details */}
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-3">Deposit Information</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-sm text-gray-600">Amount</Label>
                              <p className="text-2xl font-bold text-blue-600">
                                {formatCurrency(selectedRequest.amount)}
                              </p>
                            </div>
                            <div>
                              <Label className="text-sm text-gray-600">Month Of</Label>
                              <p className="font-medium">{selectedRequest.monthOf}</p>
                            </div>
                            <div>
                              <Label className="text-sm text-gray-600">Payment Method</Label>
                              <p className="font-medium">{selectedRequest.paymentMethod}</p>
                            </div>
                            <div>
                              <Label className="text-sm text-gray-600">Transaction ID</Label>
                              <p className="font-mono text-sm">{selectedRequest.transactionId}</p>
                            </div>
                          </div>
                        </div>

                        {/* Payment Proof */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-3">Payment Proof</h4>
                          <div className="flex items-center justify-center bg-white rounded-lg border-2 border-dashed border-gray-300 p-8">
                            <div className="text-center">
                              <FileImage className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">Payment proof image</p>
                              <Button variant="outline" size="sm" className="mt-2">
                                <Download className="h-4 w-4 mr-2" />
                                Download Proof
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Notes */}
                        <div>
                          <Label htmlFor="action-notes" className="text-sm font-medium text-gray-700">
                            Admin Notes (Optional)
                          </Label>
                          <Textarea
                            id="action-notes"
                            placeholder="Add notes about this request..."
                            value={actionNotes}
                            onChange={(e) => setActionNotes(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    )}
                    <DialogFooter className="gap-2">
                      {selectedRequest?.status === "pending" && (
                        <>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                                <XCircle className="h-4 w-4 mr-2" />
                                Reject
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Reject Deposit Request</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to reject this deposit request? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleReject(selectedRequest.id, actionNotes)}
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  Reject Request
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>

                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Approve
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Approve Deposit Request</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to approve this deposit request? The member will be notified.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleApprove(selectedRequest.id, actionNotes)}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  Approve Request
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </>
                      )}
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {request.status === "pending" && (
                  <>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Reject Request</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to reject this deposit request?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleReject(request.id)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Reject
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Approve Request</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to approve this deposit request?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleApprove(request.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Approve
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block">
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50/50 border-b border-gray-200/50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-900">Member</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Month Of</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Amount</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Payment Method</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Transaction ID</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Reference</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Submitted</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedRequests.map((request, index) => (
                    <tr
                      key={request.id}
                      className={`border-b border-gray-200/30 hover:bg-white/30 transition-colors ${
                        index % 2 === 0 ? "bg-white/20" : "bg-transparent"
                      }`}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.memberName} />
                            <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold text-sm">
                              {request.memberName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{request.memberName}</p>
                            <p className="text-sm text-gray-600">{request.memberId}</p>
                            <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs mt-1">
                              {request.accountType}
                            </Badge>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">{request.monthOf}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="font-semibold text-blue-600">{formatCurrency(request.amount)}</p>
                          {request.isPenalized && (
                            <p className="text-xs text-red-600 font-medium">
                              Penalty: {formatCurrency(request.penalty)}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge className={`${getPaymentMethodColor(request.paymentMethod)} text-xs`}>
                          {getPaymentMethodIcon(request.paymentMethod)}
                          <span className="ml-1">{request.paymentMethod}</span>
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4 text-gray-400" />
                          <span className="font-mono text-sm text-gray-900">{request.transactionId}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="font-mono text-sm text-gray-600">{request.referenceNumber}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-600">
                          {new Date(request.submissionDate).toLocaleDateString("en-BD")}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(request.status)}
                          {getStatusBadge(request.status)}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="bg-white/50 border-white/30 hover:bg-white/70"
                                onClick={() => setSelectedRequest(request)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Deposit Request Details</DialogTitle>
                                <DialogDescription>
                                  Review all details before approving or rejecting this request
                                </DialogDescription>
                              </DialogHeader>
                              {selectedRequest && (
                                <div className="space-y-4">
                                  {/* Member Info */}
                                  <div className="bg-gray-50 rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Member Information</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label className="text-sm text-gray-600">Name</Label>
                                        <p className="font-medium">{selectedRequest.memberName}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm text-gray-600">Member ID</Label>
                                        <p className="font-medium">{selectedRequest.memberId}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm text-gray-600">Email</Label>
                                        <p className="font-medium">{selectedRequest.memberEmail}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm text-gray-600">Phone</Label>
                                        <p className="font-medium">{selectedRequest.memberPhone}</p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Deposit Details */}
                                  <div className="bg-blue-50 rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Deposit Information</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label className="text-sm text-gray-600">Amount</Label>
                                        <p className="text-2xl font-bold text-blue-600">
                                          {formatCurrency(selectedRequest.amount)}
                                        </p>
                                      </div>
                                      <div>
                                        <Label className="text-sm text-gray-600">Month Of</Label>
                                        <p className="font-medium">{selectedRequest.monthOf}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm text-gray-600">Payment Method</Label>
                                        <p className="font-medium">{selectedRequest.paymentMethod}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm text-gray-600">Transaction ID</Label>
                                        <p className="font-mono text-sm">{selectedRequest.transactionId}</p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Bank Details (if applicable) */}
                                  {selectedRequest.paymentMethod === "Bank Transfer" && (
                                    <div className="bg-blue-50 rounded-lg p-4">
                                      <h4 className="font-semibold text-gray-900 mb-3">Bank Transfer Details</h4>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label className="text-sm text-gray-600">Account Holder Name</Label>
                                          <p className="font-medium">{selectedRequest.bankHolderName}</p>
                                        </div>
                                        <div>
                                          <Label className="text-sm text-gray-600">Account Number</Label>
                                          <p className="font-mono text-sm">{selectedRequest.accountNumber}</p>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Penalty Info */}
                                  {selectedRequest.isPenalized && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                      <h4 className="font-semibold text-red-800 mb-3">Late Payment Penalty</h4>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label className="text-sm text-red-600">Penalty Amount</Label>
                                          <p className="font-bold text-red-600">
                                            {formatCurrency(selectedRequest.penalty)}
                                          </p>
                                        </div>
                                        <div>
                                          <Label className="text-sm text-red-600">Days Late</Label>
                                          <p className="font-medium text-red-600">{selectedRequest.daysLate} days</p>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Payment Proof */}
                                  <div className="bg-gray-50 rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Payment Proof</h4>
                                    <div className="flex items-center justify-center bg-white rounded-lg border-2 border-dashed border-gray-300 p-8">
                                      <div className="text-center">
                                        <FileImage className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                        <p className="text-sm text-gray-600">Payment proof image</p>
                                        <Button variant="outline" size="sm" className="mt-2">
                                          <Download className="h-4 w-4 mr-2" />
                                          Download Proof
                                        </Button>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Notes */}
                                  <div>
                                    <Label htmlFor="action-notes" className="text-sm font-medium text-gray-700">
                                      Admin Notes (Optional)
                                    </Label>
                                    <Textarea
                                      id="action-notes"
                                      placeholder="Add notes about this request..."
                                      value={actionNotes}
                                      onChange={(e) => setActionNotes(e.target.value)}
                                      className="mt-1"
                                    />
                                  </div>
                                </div>
                              )}
                              <DialogFooter className="gap-2">
                                {selectedRequest?.status === "pending" && (
                                  <>
                                    <AlertDialog>
                                      <AlertDialogTrigger asChild>
                                        <Button
                                          variant="outline"
                                          className="text-red-600 border-red-200 hover:bg-red-50"
                                        >
                                          <XCircle className="h-4 w-4 mr-2" />
                                          Reject
                                        </Button>
                                      </AlertDialogTrigger>
                                      <AlertDialogContent>
                                        <AlertDialogHeader>
                                          <AlertDialogTitle>Reject Deposit Request</AlertDialogTitle>
                                          <AlertDialogDescription>
                                            Are you sure you want to reject this deposit request? This action cannot be
                                            undone.
                                          </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                                          <AlertDialogAction
                                            onClick={() => handleReject(selectedRequest.id, actionNotes)}
                                            className="bg-red-600 hover:bg-red-700"
                                          >
                                            Reject Request
                                          </AlertDialogAction>
                                        </AlertDialogFooter>
                                      </AlertDialogContent>
                                    </AlertDialog>

                                    <AlertDialog>
                                      <AlertDialogTrigger asChild>
                                        <Button className="bg-green-600 hover:bg-green-700">
                                          <CheckCircle className="h-4 w-4 mr-2" />
                                          Approve
                                        </Button>
                                      </AlertDialogTrigger>
                                      <AlertDialogContent>
                                        <AlertDialogHeader>
                                          <AlertDialogTitle>Approve Deposit Request</AlertDialogTitle>
                                          <AlertDialogDescription>
                                            Are you sure you want to approve this deposit request? The member will be
                                            notified.
                                          </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                                          <AlertDialogAction
                                            onClick={() => handleApprove(selectedRequest.id, actionNotes)}
                                            className="bg-green-600 hover:bg-green-700"
                                          >
                                            Approve Request
                                          </AlertDialogAction>
                                        </AlertDialogFooter>
                                      </AlertDialogContent>
                                    </AlertDialog>
                                  </>
                                )}
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>

                          {request.status === "pending" && (
                            <>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-red-600 border-red-200 hover:bg-red-50"
                                  >
                                    <XCircle className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Reject Request</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to reject this deposit request?
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleReject(request.id)}
                                      className="bg-red-600 hover:bg-red-700"
                                    >
                                      Reject
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>

                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                    <CheckCircle className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Approve Request</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to approve this deposit request?
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleApprove(request.id)}
                                      className="bg-green-600 hover:bg-green-700"
                                    >
                                      Approve
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredRequests.length)} of{" "}
            {filteredRequests.length} requests
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-white/50 border-white/30 hover:bg-white/70"
            >
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      : "bg-white/50 border-white/30 hover:bg-white/70"
                  }
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-white/50 border-white/30 hover:bg-white/70"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
