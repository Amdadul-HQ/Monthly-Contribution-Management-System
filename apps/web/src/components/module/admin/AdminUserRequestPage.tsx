
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Badge } from "@workspace/ui/components/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@workspace/ui/components/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  UserPlus,
  Search,
  Filter,
  Check,
  X,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Building2,
  CreditCard,
  Phone,
  MapPin,
  User,
  Download,
  Loader2,
} from "lucide-react"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import {
  useGetAllUserRequestsQuery,
  useApproveUserRequestMutation,
  useRejectUserRequestMutation,
  UserRequestDto
} from "@/redux/api/user-management/userRequestApi"

const statusOptions = ["All", "PENDING", "ACTIVE", "REJECTED"]
const accountTypeOptions = ["All", "Premium", "Standard", "Basic"]
const paymentMethodOptions = ["All", "BKASH", "NAGAD", "ROCKET", "BANK_TRANSFER", "HAND_TO_HAND"]

type RequestStatus = "Pending" | "Approved" | "Rejected"
type ActionType = "approve" | "reject"

export function AdminUserRequestPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [accountTypeFilter, setAccountTypeFilter] = useState("All")
  const [paymentMethodFilter, setPaymentMethodFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedAction, setSelectedAction] = useState<{ type: ActionType; request: UserRequestDto } | null>(null)
  const [rejectionReason, setRejectionReason] = useState("")

  const itemsPerPage = 10

  // Fetch user requests with filters
  const { data, isLoading, isFetching, error, refetch } = useGetAllUserRequestsQuery({
    page: currentPage,
    limit: itemsPerPage,
    search: searchTerm || undefined,
    status: statusFilter !== "All" ? statusFilter : undefined,
    accountType: accountTypeFilter !== "All" ? accountTypeFilter : undefined,
    paymentMethod: paymentMethodFilter !== "All" ? paymentMethodFilter : undefined,
  })

  // Mutations
  const [approveRequest, { isLoading: isApproving }] = useApproveUserRequestMutation()
  const [rejectRequest, { isLoading: isRejecting }] = useRejectUserRequestMutation()

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, statusFilter, accountTypeFilter, paymentMethodFilter])

  const requests = data?.data?.requests || []
  const pagination = data?.data?.pagination || { page: 1, limit: itemsPerPage, total: 0, totalPages: 1 }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusColor = (status: RequestStatus) => {
    switch (status) {
      case "Pending":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Approved":
        return "bg-green-100 text-green-800 border-green-200"
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <Clock className="h-4 w-4 text-orange-600" />
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />
    }
  }

  const getAccountTypeColor = (type: string) => {
    switch (type) {
      case "Premium":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Standard":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Basic":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPaymentMethodIcon = (method: string) => {
    const methodLower = method?.toLowerCase() || ""
    if (methodLower.includes("bkash")) return <Smartphone className="h-4 w-4 text-pink-600" />
    if (methodLower.includes("nagad")) return <Smartphone className="h-4 w-4 text-orange-600" />
    if (methodLower.includes("rocket")) return <Smartphone className="h-4 w-4 text-purple-600" />
    if (methodLower.includes("bank")) return <Building2 className="h-4 w-4 text-blue-600" />
    return <CreditCard className="h-4 w-4 text-gray-600" />
  }

  const getPaymentMethodColor = (method: string) => {
    const methodLower = method?.toLowerCase() || ""
    if (methodLower.includes("bkash")) return "bg-pink-100 text-pink-800 border-pink-200"
    if (methodLower.includes("nagad")) return "bg-orange-100 text-orange-800 border-orange-200"
    if (methodLower.includes("rocket")) return "bg-purple-100 text-purple-800 border-purple-200"
    if (methodLower.includes("bank") || methodLower.includes("transfer")) return "bg-blue-100 text-blue-800 border-blue-200"
    return "bg-gray-100 text-gray-800 border-gray-200"
  }

  // Handle request actions
  const handleRequestAction = (type: ActionType, request: UserRequestDto) => {
    setSelectedAction({ type, request })
    if (type === "reject") {
      setRejectionReason("")
    }
  }

  const confirmAction = async () => {
    if (!selectedAction) return

    const { type, request } = selectedAction

    try {
      if (type === "approve") {
        const result = await approveRequest({
          id: request.id,
          data: { notes: "" }
        }).unwrap()

        toast.success(result.message || "User request approved successfully")
      } else if (type === "reject") {
        if (!rejectionReason.trim()) {
          toast.error("Rejection reason is required")
          return
        }

        const result = await rejectRequest({
          id: request.id,
          data: { rejectionReason }
        }).unwrap()

        toast.success(result.message || "User request rejected successfully")
      }

      // Close the dialog and reset states
      setSelectedAction(null)
      setRejectionReason("")

      // Refetch data to get updated list
      refetch()
    } catch (error: any) {
      toast.error(error?.data?.message || `Failed to ${type} user request`)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Registration Requests</h1>
          <p className="text-gray-600">Review and manage new user registration requests</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-xl">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {requests.filter((r) => r.status === "Pending").length}
            </div>
            <div className="text-sm text-gray-700">Pending</div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {requests.filter((r) => r.status === "Approved").length}
            </div>
            <div className="text-sm text-gray-700">Approved</div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">
              {requests.filter((r) => r.status === "Rejected").length}
            </div>
            <div className="text-sm text-gray-700">Rejected</div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{requests.length}</div>
            <div className="text-sm text-gray-700">Total Requests</div>
          </CardContent>
        </Card>
      </div> */}

      {/* Search and Filters */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
        <CardContent className="px-3">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, phone, transaction ID, or NID..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl"
              />
            </div>
            <Select
              value={statusFilter}
              onValueChange={(value) => {
                setStatusFilter(value)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-full md:w-48 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={accountTypeFilter}
              onValueChange={(value) => {
                setAccountTypeFilter(value)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-full md:w-48 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                {accountTypeOptions.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={paymentMethodFilter}
              onValueChange={(value) => {
                setPaymentMethodFilter(value)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-full md:w-48 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                <SelectValue placeholder="Payment method" />
              </SelectTrigger>
              <SelectContent>
                {paymentMethodOptions.map((method) => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Requests List */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <UserPlus className="h-5 w-5 text-blue-600" />
            Registration Requests ({pagination.total})
          </CardTitle>
          <CardDescription className="text-gray-700">
            {isLoading || isFetching ? (
              "Loading..."
            ) : (
              `Showing ${(pagination.page - 1) * pagination.limit + 1}-${Math.min(pagination.page * pagination.limit, pagination.total)} of ${pagination.total} requests`
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Loading State */}
          {(isLoading || isFetching) && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <span className="ml-2 text-gray-600">Loading requests...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-8">
              <div className="text-red-500 mb-2">Error loading requests</div>
              <div className="text-sm text-gray-400">Please try again later</div>
            </div>
          )}

          {/* Content */}
          {!isLoading && !isFetching && !error && (
            <>
              {/* Mobile Card View */}
              <div className="block md:hidden space-y-4">
                {requests.map((request) => (
                  <Card
                    key={request.id}
                    className={`${request.status === "Rejected"
                      ? "bg-red-50/50 border-red-200/50"
                      : request.status === "Approved"
                        ? "bg-green-50/50 border-green-200/50"
                        : "bg-orange-50/50 border-orange-200/50"
                      } backdrop-blur-sm shadow-sm`}
                  >
                    <CardContent className="p-4 space-y-4">
                      {/* Header with Avatar and Status */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-blue-100 text-blue-600">
                              {request.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-gray-900">{request.name}</h3>
                            <p className="text-sm text-gray-600">{request.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(request.status)}
                          <Badge className={`${getStatusColor(request.status as RequestStatus)} text-xs`}>{request.status}</Badge>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">{request.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">{request.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">{request.occupation}</span>
                        </div>
                      </div>

                      {/* Registration Details */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-xs text-gray-600 mb-1">Registration Fee</div>
                          <div className="font-semibold text-green-600">{formatCurrency(request.registrationFee)}</div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-xs text-gray-600 mb-1">Account Type</div>
                          <Badge className={`${getAccountTypeColor(request.accountType)} text-xs`}>
                            {request.accountType}
                          </Badge>
                        </div>
                      </div>

                      {/* Payment Details */}
                      <div className="bg-blue-50/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          {getPaymentMethodIcon(request.paymentMethod)}
                          <Badge className={`${getPaymentMethodColor(request.paymentMethod)} text-xs`}>
                            {request.paymentMethod}
                          </Badge>
                        </div>
                        <div className="text-sm">
                          <div className="text-xs text-gray-600">Transaction ID</div>
                          <div className="font-mono text-gray-900">{request.transactionId}</div>
                        </div>
                      </div>

                      {/* Request Date */}
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="text-xs text-gray-600 mb-1">Request Date</div>
                        <div className="text-sm text-gray-900">
                          {new Date(request.requestDate).toLocaleDateString("en-BD")}
                        </div>
                      </div>

                      {/* Referred By */}
                      <div className="bg-purple-50/50 rounded-lg p-2">
                        <div className="text-xs text-gray-600 mb-1">Referred By</div>
                        <div className="text-sm text-gray-900">{request.referredBy}</div>
                      </div>

                      {/* Action Buttons */}
                      {request.status === "Pending" && (
                        <div className="flex gap-2 pt-2">
                          <Button
                            size="sm"
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl"
                            onClick={() => handleRequestAction("approve", request)}
                          >
                            <Check className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="flex-1 rounded-xl"
                            onClick={() => handleRequestAction("reject", request)}
                          >
                            <X className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="flex-1 rounded-xl">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Registration Request Details</DialogTitle>
                              <DialogDescription>Complete information for {request.name}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              {/* Personal Information */}
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium text-gray-600">Full Name</label>
                                  <div className="text-gray-900">{request.name}</div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600">NID Number</label>
                                  <div className="font-mono text-gray-900">{request.nidNumber}</div>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium text-gray-600">Email</label>
                                  <div className="text-gray-900">{request.email}</div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600">Phone</label>
                                  <div className="text-gray-900">{request.phone}</div>
                                </div>
                              </div>

                              <div>
                                <label className="text-sm font-medium text-gray-600">Address</label>
                                <div className="text-gray-900">{request.address}</div>
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium text-gray-600">Occupation</label>
                                  <div className="text-gray-900">{request.occupation}</div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600">Account Type</label>
                                  <Badge className={`${getAccountTypeColor(request.accountType)} text-xs`}>
                                    {request.accountType}
                                  </Badge>
                                </div>
                              </div>

                              {/* Emergency Contact */}
                              <div className="border-t pt-4">
                                <h4 className="font-medium text-gray-900 mb-2">Emergency Contact</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">Name</label>
                                    <div className="text-gray-900">{request.emergencyContactName}</div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">Relation</label>
                                    <div className="text-gray-900">{request.emergencyContactRelation}</div>
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <label className="text-sm font-medium text-gray-600">Phone</label>
                                  <div className="text-gray-900">{request.emergencyContact}</div>
                                </div>
                              </div>

                              {/* Payment Information */}
                              <div className="border-t pt-4">
                                <h4 className="font-medium text-gray-900 mb-2">Payment Information</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">Registration Fee</label>
                                    <div className="font-semibold text-green-600">
                                      {formatCurrency(request.registrationFee)}
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">Payment Method</label>
                                    <div className="flex items-center gap-2">
                                      {getPaymentMethodIcon(request.paymentMethod)}
                                      <span className="text-gray-900">{request.paymentMethod}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">Transaction ID</label>
                                    <div className="font-mono text-gray-900">{request.transactionId}</div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">Payment Date</label>
                                    <div className="text-gray-900">
                                      {new Date(request.paymentDate).toLocaleDateString("en-BD")}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Additional Information */}
                              <div className="border-t pt-4">
                                <h4 className="font-medium text-gray-900 mb-2">Additional Information</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">Referred By</label>
                                    <div className="text-gray-900">{request.referredBy}</div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">Request Date</label>
                                    <div className="text-gray-900">
                                      {new Date(request.requestDate).toLocaleDateString("en-BD")}
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <label className="text-sm font-medium text-gray-600">Notes</label>
                                  <div className="text-gray-900">{request.additionalNotes}</div>
                                </div>
                              </div>

                              {/* Status Information */}
                              {(request.status === "Approved" || request.status === "Rejected") && (
                                <div className="border-t pt-4">
                                  <h4 className="font-medium text-gray-900 mb-2">Status Information</h4>
                                  {request.status === "Approved" && (
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="text-sm font-medium text-gray-600">Approved By</label>
                                        <div className="text-gray-900">{request.approvedBy}</div>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-600">Approved Date</label>
                                        <div className="text-gray-900">
                                          {request.approvedDate &&
                                            new Date(request.approvedDate).toLocaleDateString("en-BD")}
                                        </div>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-600">Member ID</label>
                                        <div className="font-mono text-blue-600">{request.memberId}</div>
                                      </div>
                                    </div>
                                  )}
                                  {request.status === "Rejected" && (
                                    <div className="space-y-2">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <label className="text-sm font-medium text-gray-600">Rejected By</label>
                                          <div className="text-gray-900">{request.rejectedBy}</div>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium text-gray-600">Rejected Date</label>
                                          <div className="text-gray-900">
                                            {request.rejectedDate &&
                                              new Date(request.rejectedDate).toLocaleDateString("en-BD")}
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-600">Rejection Reason</label>
                                        <div className="text-red-600">{request.rejectionReason}</div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block rounded-xl border border-white/30 bg-white/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-blue-50/50 border-blue-100/50">
                        <TableHead className="text-gray-900 font-semibold">Applicant</TableHead>
                        <TableHead className="text-gray-900 font-semibold">Contact</TableHead>
                        <TableHead className="text-gray-900 font-semibold">Registration Fee</TableHead>
                        <TableHead className="text-gray-900 font-semibold">Payment Details</TableHead>
                        <TableHead className="text-gray-900 font-semibold">Account Type</TableHead>
                        <TableHead className="text-gray-900 font-semibold">Status</TableHead>
                        <TableHead className="text-gray-900 font-semibold">Request Date</TableHead>
                        <TableHead className="text-gray-900 font-semibold">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {requests.map((request) => (
                        <TableRow
                          key={request.id}
                          className={`border-blue-100/30 hover:bg-blue-50/30 transition-colors ${request.status === "Rejected"
                            ? "bg-red-50/20"
                            : request.status === "Approved"
                              ? "bg-green-50/20"
                              : "bg-orange-50/20"
                            }`}
                        >
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-blue-100 text-blue-600">
                                  {request.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-gray-900">{request.name}</p>
                                <p className="text-sm text-gray-600">{request.occupation}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm text-gray-900">{request.email}</p>
                              <p className="text-sm text-gray-600">{request.phone}</p>
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold text-green-600">
                            {formatCurrency(request.registrationFee)}
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                {getPaymentMethodIcon(request.paymentMethod)}
                                <Badge className={`${getPaymentMethodColor(request.paymentMethod)} text-xs`}>
                                  {request.paymentMethod}
                                </Badge>
                              </div>
                              <p className="text-xs font-mono text-gray-600">{request.transactionId}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`${getAccountTypeColor(request.accountType)} text-xs`}>
                              {request.accountType}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(request.status)}
                              <Badge className={`${getStatusColor(request.status as RequestStatus)} text-xs`}>{request.status}</Badge>
                            </div>
                          </TableCell>
                          <TableCell className="text-gray-900">
                            {new Date(request.requestDate).toLocaleDateString("en-BD")}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {request.status === "Pending" && (
                                <>
                                  <Button
                                    size="sm"
                                    className="h-8 bg-green-600 hover:bg-green-700 text-white"
                                    onClick={() => handleRequestAction("approve", request)}
                                  >
                                    <Check className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    className="h-8"
                                    onClick={() => handleRequestAction("reject", request)}
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                </>
                              )}
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle>Registration Request Details</DialogTitle>
                                    <DialogDescription>Complete information for {request.name}</DialogDescription>
                                  </DialogHeader>
                                  {/* Same detailed view content as mobile */}
                                  <div className="space-y-4">
                                    {/* Personal Information */}
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="text-sm font-medium text-gray-600">Full Name</label>
                                        <div className="text-gray-900">{request.name}</div>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-600">NID Number</label>
                                        <div className="font-mono text-gray-900">{request.nidNumber}</div>
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="text-sm font-medium text-gray-600">Email</label>
                                        <div className="text-gray-900">{request.email}</div>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-600">Phone</label>
                                        <div className="text-gray-900">{request.phone}</div>
                                      </div>
                                    </div>

                                    <div>
                                      <label className="text-sm font-medium text-gray-600">Address</label>
                                      <div className="text-gray-900">{request.address}</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="text-sm font-medium text-gray-600">Occupation</label>
                                        <div className="text-gray-900">{request.occupation}</div>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-600">Account Type</label>
                                        <Badge className={`${getAccountTypeColor(request.accountType)} text-xs`}>
                                          {request.accountType}
                                        </Badge>
                                      </div>
                                    </div>

                                    {/* Emergency Contact */}
                                    <div className="border-t pt-4">
                                      <h4 className="font-medium text-gray-900 mb-2">Emergency Contact</h4>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <label className="text-sm font-medium text-gray-600">Name</label>
                                          <div className="text-gray-900">{request.emergencyContactName}</div>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium text-gray-600">Relation</label>
                                          <div className="text-gray-900">{request.emergencyContactRelation}</div>
                                        </div>
                                      </div>
                                      <div className="mt-2">
                                        <label className="text-sm font-medium text-gray-600">Phone</label>
                                        <div className="text-gray-900">{request.emergencyContact}</div>
                                      </div>
                                    </div>

                                    {/* Payment Information */}
                                    <div className="border-t pt-4">
                                      <h4 className="font-medium text-gray-900 mb-2">Payment Information</h4>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <label className="text-sm font-medium text-gray-600">Registration Fee</label>
                                          <div className="font-semibold text-green-600">
                                            {formatCurrency(request.registrationFee)}
                                          </div>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium text-gray-600">Payment Method</label>
                                          <div className="flex items-center gap-2">
                                            {getPaymentMethodIcon(request.paymentMethod)}
                                            <span className="text-gray-900">{request.paymentMethod}</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-2 gap-4 mt-2">
                                        <div>
                                          <label className="text-sm font-medium text-gray-600">Transaction ID</label>
                                          <div className="font-mono text-gray-900">{request.transactionId}</div>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium text-gray-600">Payment Date</label>
                                          <div className="text-gray-900">
                                            {new Date(request.paymentDate).toLocaleDateString("en-BD")}
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Additional Information */}
                                    <div className="border-t pt-4">
                                      <h4 className="font-medium text-gray-900 mb-2">Additional Information</h4>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <label className="text-sm font-medium text-gray-600">Referred By</label>
                                          <div className="text-gray-900">{request.referredBy}</div>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium text-gray-600">Request Date</label>
                                          <div className="text-gray-900">
                                            {new Date(request.requestDate).toLocaleDateString("en-BD")}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mt-2">
                                        <label className="text-sm font-medium text-gray-600">Notes</label>
                                        <div className="text-gray-900">{request.additionalNotes}</div>
                                      </div>
                                    </div>

                                    {/* Status Information */}
                                    {(request.status === "Approved" || request.status === "Rejected") && (
                                      <div className="border-t pt-4">
                                        <h4 className="font-medium text-gray-900 mb-2">Status Information</h4>
                                        {request.status === "Approved" && (
                                          <div className="grid grid-cols-2 gap-4">
                                            <div>
                                              <label className="text-sm font-medium text-gray-600">Approved By</label>
                                              <div className="text-gray-900">{request.approvedBy}</div>
                                            </div>
                                            <div>
                                              <label className="text-sm font-medium text-gray-600">Approved Date</label>
                                              <div className="text-gray-900">
                                                {request.approvedDate &&
                                                  new Date(request.approvedDate).toLocaleDateString("en-BD")}
                                              </div>
                                            </div>
                                            <div>
                                              <label className="text-sm font-medium text-gray-600">Member ID</label>
                                              <div className="font-mono text-blue-600">{request.memberId}</div>
                                            </div>
                                          </div>
                                        )}
                                        {request.status === "Rejected" && (
                                          <div className="space-y-2">
                                            <div className="grid grid-cols-2 gap-4">
                                              <div>
                                                <label className="text-sm font-medium text-gray-600">Rejected By</label>
                                                <div className="text-gray-900">{request.rejectedBy}</div>
                                              </div>
                                              <div>
                                                <label className="text-sm font-medium text-gray-600">Rejected Date</label>
                                                <div className="text-gray-900">
                                                  {request.rejectedDate &&
                                                    new Date(request.rejectedDate).toLocaleDateString("en-BD")}
                                                </div>
                                              </div>
                                            </div>
                                            <div>
                                              <label className="text-sm font-medium text-gray-600">Rejection Reason</label>
                                              <div className="text-red-600">{request.rejectionReason}</div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* No results message */}
              {!isLoading && !isFetching && requests.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-gray-500 mb-2">No requests found</div>
                  <div className="text-sm text-gray-400">Try adjusting your search or filter criteria</div>
                </div>
              )}

              {/* Pagination */}
              {!isLoading && !isFetching && pagination.totalPages > 1 && (
                <div className="flex items-center justify-between mt-6">
                  <div className="text-sm text-gray-600">
                    Showing {(pagination.page - 1) * pagination.limit + 1}-{Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
                    {pagination.total} requests
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={pagination.page === 1 || isLoading || isFetching}
                      className="rounded-xl"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.min(pagination.totalPages, 5) }, (_, i) => {
                        // Show first page, current page, and last page, with ellipsis
                        const page = i + Math.max(1, Math.min(pagination.page - 2, pagination.totalPages - 4))
                        return (
                          <Button
                            key={page}
                            variant={pagination.page === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            disabled={isLoading || isFetching}
                            className={`w-8 h-8 p-0 rounded-xl ${pagination.page === page ? "bg-blue-600 text-white" : "bg-white/70 hover:bg-blue-50"
                              }`}
                          >
                            {page}
                          </Button>
                        )
                      })}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pagination.totalPages))}
                      disabled={pagination.page === pagination.totalPages || isLoading || isFetching}
                      className="rounded-xl"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Confirmation Dialog for Approval */}
      <AlertDialog
        open={!!selectedAction && selectedAction.type === "approve"}
        onOpenChange={() => setSelectedAction(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Approve Registration Request</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to approve the registration request for{" "}
              <strong>{selectedAction?.request.name}</strong>? This will create a new member account and assign a member
              ID.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isApproving}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmAction}
              className="bg-green-600 hover:bg-green-700"
              disabled={isApproving}
            >
              {isApproving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {isApproving ? "Approving..." : "Approve Request"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Confirmation Dialog for Rejection */}
      <AlertDialog
        open={!!selectedAction && selectedAction.type === "reject"}
        onOpenChange={() => setSelectedAction(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject Registration Request</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reject the registration request for{" "}
              <strong>{selectedAction?.request.name}</strong>? Please provide a reason for rejection.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-4">
            <Textarea
              placeholder="Enter reason for rejection..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isRejecting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmAction}
              className="bg-red-600 hover:bg-red-700"
              disabled={!rejectionReason.trim() || isRejecting}
            >
              {isRejecting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {isRejecting ? "Rejecting..." : "Reject Request"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
