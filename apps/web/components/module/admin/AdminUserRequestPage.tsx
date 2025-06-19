
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
} from "lucide-react"
import { useState } from "react"

// Mock user request data - replace with your actual data
const mockUserRequests = [
  {
    id: 1,
    name: "Shahidul Islam",
    email: "shahidul.islam@email.com",
    phone: "+880 1712-987654",
    nidNumber: "1234567890123",
    address: "House 45, Road 12, Dhanmondi, Dhaka",
    occupation: "Software Engineer",
    emergencyContact: "+880 1798-123456",
    emergencyContactName: "Fatima Islam",
    emergencyContactRelation: "Wife",
    registrationFee: 5000,
    paymentMethod: "bKash",
    transactionId: "BKS240920001",
    paymentDate: "2024-09-20",
    requestDate: "2024-09-20",
    status: "Pending",
    accountType: "Premium",
    referredBy: "Mohammad Rahman (BDT-2024-001234)",
    avatar: "/placeholder.svg?height=40&width=40",
    documents: {
      nidFront: "/placeholder.svg?height=200&width=300",
      nidBack: "/placeholder.svg?height=200&width=300",
      photo: "/placeholder.svg?height=200&width=200",
    },
    additionalNotes: "Referred by existing premium member. Has good financial background.",
  },
  {
    id: 2,
    name: "Rashida Khatun",
    email: "rashida.khatun@email.com",
    phone: "+880 1555-456789",
    nidNumber: "9876543210987",
    address: "Flat 3B, Green View Apartment, Uttara, Dhaka",
    occupation: "Teacher",
    emergencyContact: "+880 1666-789012",
    emergencyContactName: "Abdul Khatun",
    emergencyContactRelation: "Husband",
    registrationFee: 3000,
    paymentMethod: "Nagad",
    transactionId: "NGD240919002",
    paymentDate: "2024-09-19",
    requestDate: "2024-09-19",
    status: "Pending",
    accountType: "Standard",
    referredBy: "Self Registration",
    avatar: "/placeholder.svg?height=40&width=40",
    documents: {
      nidFront: "/placeholder.svg?height=200&width=300",
      nidBack: "/placeholder.svg?height=200&width=300",
      photo: "/placeholder.svg?height=200&width=200",
    },
    additionalNotes: "Self-registered through website. All documents verified.",
  },
  {
    id: 3,
    name: "Aminul Haque",
    email: "aminul.haque@email.com",
    phone: "+880 1777-234567",
    nidNumber: "5555666677778",
    address: "Village: Rampur, Upazila: Savar, District: Dhaka",
    occupation: "Business Owner",
    emergencyContact: "+880 1888-345678",
    emergencyContactName: "Salma Haque",
    emergencyContactRelation: "Sister",
    registrationFee: 5000,
    paymentMethod: "Bank",
    transactionId: "BNK240918003",
    paymentDate: "2024-09-18",
    requestDate: "2024-09-18",
    status: "Approved",
    accountType: "Premium",
    referredBy: "Abdul Karim (BDT-2024-001236)",
    avatar: "/placeholder.svg?height=40&width=40",
    documents: {
      nidFront: "/placeholder.svg?height=200&width=300",
      nidBack: "/placeholder.svg?height=200&width=300",
      photo: "/placeholder.svg?height=200&width=200",
    },
    additionalNotes: "Business owner with stable income. Approved for premium membership.",
    approvedBy: "Admin User",
    approvedDate: "2024-09-19",
    memberId: "BDT-2024-001244",
  },
  {
    id: 4,
    name: "Nasir Ahmed",
    email: "nasir.ahmed@email.com",
    phone: "+880 1999-567890",
    nidNumber: "1111222233334",
    address: "House 78, Sector 7, Uttara, Dhaka",
    occupation: "Government Employee",
    emergencyContact: "+880 1444-678901",
    emergencyContactName: "Rahima Ahmed",
    emergencyContactRelation: "Mother",
    registrationFee: 3000,
    paymentMethod: "Rocket",
    transactionId: "RKT240917004",
    paymentDate: "2024-09-17",
    requestDate: "2024-09-17",
    status: "Rejected",
    accountType: "Standard",
    referredBy: "Self Registration",
    avatar: "/placeholder.svg?height=40&width=40",
    documents: {
      nidFront: "/placeholder.svg?height=200&width=300",
      nidBack: "/placeholder.svg?height=200&width=300",
      photo: "/placeholder.svg?height=200&width=200",
    },
    additionalNotes: "Incomplete documentation. NID verification failed.",
    rejectedBy: "Admin User",
    rejectedDate: "2024-09-18",
    rejectionReason: "NID verification failed. Documents do not match provided information.",
  },
  {
    id: 5,
    name: "Fatema Begum",
    email: "fatema.begum@email.com",
    phone: "+880 1333-789012",
    nidNumber: "7777888899990",
    address: "Road 15, Block C, Bashundhara R/A, Dhaka",
    occupation: "Housewife",
    emergencyContact: "+880 1222-890123",
    emergencyContactName: "Karim Begum",
    emergencyContactRelation: "Husband",
    registrationFee: 2000,
    paymentMethod: "bKash",
    transactionId: "BKS240916005",
    paymentDate: "2024-09-16",
    requestDate: "2024-09-16",
    status: "Pending",
    accountType: "Basic",
    referredBy: "Fatima Khatun (BDT-2024-001235)",
    avatar: "/placeholder.svg?height=40&width=40",
    documents: {
      nidFront: "/placeholder.svg?height=200&width=300",
      nidBack: "/placeholder.svg?height=200&width=300",
      photo: "/placeholder.svg?height=200&width=200",
    },
    additionalNotes: "Referred by existing member. Housewife with husband's income support.",
  },
  {
    id: 6,
    name: "Mizanur Rahman",
    email: "mizanur.rahman2@email.com",
    phone: "+880 1666-345678",
    nidNumber: "4444555566667",
    address: "Flat 5A, City Center, Gulshan, Dhaka",
    occupation: "Doctor",
    emergencyContact: "+880 1777-456789",
    emergencyContactName: "Ruma Rahman",
    emergencyContactRelation: "Wife",
    registrationFee: 5000,
    paymentMethod: "Bank",
    transactionId: "BNK240915006",
    paymentDate: "2024-09-15",
    requestDate: "2024-09-15",
    status: "Pending",
    accountType: "Premium",
    referredBy: "Self Registration",
    avatar: "/placeholder.svg?height=40&width=40",
    documents: {
      nidFront: "/placeholder.svg?height=200&width=300",
      nidBack: "/placeholder.svg?height=200&width=300",
      photo: "/placeholder.svg?height=200&width=200",
    },
    additionalNotes: "Medical professional with high income. Self-registered for premium membership.",
  },
]

const statusOptions = ["All", "Pending", "Approved", "Rejected"]
const accountTypeOptions = ["All", "Premium", "Standard", "Basic"]
const paymentMethodOptions = ["All", "bKash", "Nagad", "Rocket", "Bank"]

type RequestStatus = "Pending" | "Approved" | "Rejected"
type ActionType = "approve" | "reject"

interface UserRequest {
  id: number
  name: string
  email: string
  phone: string
  nidNumber: string
  address: string
  occupation: string
  emergencyContact: string
  emergencyContactName: string
  emergencyContactRelation: string
  registrationFee: number
  paymentMethod: string
  transactionId: string
  paymentDate: string
  requestDate: string
  status: RequestStatus
  accountType: string
  referredBy: string
  avatar: string
  documents: {
    nidFront: string
    nidBack: string
    photo: string
  }
  additionalNotes: string
  approvedBy?: string
  approvedDate?: string
  memberId?: string
  rejectedBy?: string
  rejectedDate?: string
  rejectionReason?: string
}

export function AdminUserRequestPage() {
  const [requests, setRequests] = useState<UserRequest[]>(mockUserRequests)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [accountTypeFilter, setAccountTypeFilter] = useState("All")
  const [paymentMethodFilter, setPaymentMethodFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedAction, setSelectedAction] = useState<{ type: ActionType; request: UserRequest } | null>(null)
  const [rejectionReason, setRejectionReason] = useState("")
  const [selectedRequest, setSelectedRequest] = useState<UserRequest | null>(null)

  const itemsPerPage = 5

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

  const getStatusIcon = (status: RequestStatus) => {
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
    switch (method.toLowerCase()) {
      case "bkash":
        return <Smartphone className="h-4 w-4 text-pink-600" />
      case "nagad":
        return <Smartphone className="h-4 w-4 text-orange-600" />
      case "rocket":
        return <Smartphone className="h-4 w-4 text-purple-600" />
      case "bank":
        return <Building2 className="h-4 w-4 text-blue-600" />
      default:
        return <CreditCard className="h-4 w-4 text-gray-600" />
    }
  }

  const getPaymentMethodColor = (method: string) => {
    const colors = {
      bKash: "bg-pink-100 text-pink-800 border-pink-200",
      Nagad: "bg-orange-100 text-orange-800 border-orange-200",
      Rocket: "bg-purple-100 text-purple-800 border-purple-200",
      Bank: "bg-blue-100 text-blue-800 border-blue-200",
    }
    return colors[method as keyof typeof colors] || colors.Bank
  }

  // Filter requests based on search and filters
  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.phone.includes(searchTerm) ||
      request.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.nidNumber.includes(searchTerm)

    const matchesStatus = statusFilter === "All" || request.status === statusFilter
    const matchesAccountType = accountTypeFilter === "All" || request.accountType === accountTypeFilter
    const matchesPaymentMethod = paymentMethodFilter === "All" || request.paymentMethod === paymentMethodFilter

    return matchesSearch && matchesStatus && matchesAccountType && matchesPaymentMethod
  })

  // Pagination
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedRequests = filteredRequests.slice(startIndex, startIndex + itemsPerPage)

  // Handle request actions
  const handleRequestAction = (type: ActionType, request: UserRequest) => {
    setSelectedAction({ type, request })
    if (type === "reject") {
      setRejectionReason("")
    }
  }

  const confirmAction = () => {
    if (!selectedAction) return

    const { type, request } = selectedAction

    setRequests((prevRequests) =>
      prevRequests.map((r) => {
        if (r.id === request.id) {
          if (type === "approve") {
            return {
              ...r,
              status: "Approved" as RequestStatus,
              approvedBy: "Admin User",
              approvedDate: new Date().toISOString().split("T")[0],
              memberId: `BDT-2024-${String(Date.now()).slice(-6)}`,
            }
          } else if (type === "reject") {
            return {
              ...r,
              status: "Rejected" as RequestStatus,
              rejectedBy: "Admin User",
              rejectedDate: new Date().toISOString().split("T")[0],
              rejectionReason: rejectionReason || "No reason provided",
            }
          }
        }
        return r
      }),
    )

    setSelectedAction(null)
    setRejectionReason("")
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
            Registration Requests ({filteredRequests.length})
          </CardTitle>
          <CardDescription className="text-gray-700">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredRequests.length)} of{" "}
            {filteredRequests.length} requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Mobile Card View */}
          <div className="block md:hidden space-y-4">
            {paginatedRequests.map((request) => (
              <Card
                key={request.id}
                className={`${
                  request.status === "Rejected"
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
                        <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.name} />
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
                      <Badge className={`${getStatusColor(request.status)} text-xs`}>{request.status}</Badge>
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
                  {paginatedRequests.map((request) => (
                    <TableRow
                      key={request.id}
                      className={`border-blue-100/30 hover:bg-blue-50/30 transition-colors ${
                        request.status === "Rejected"
                          ? "bg-red-50/20"
                          : request.status === "Approved"
                            ? "bg-green-50/20"
                            : "bg-orange-50/20"
                      }`}
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.name} />
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
                          <Badge className={`${getStatusColor(request.status)} text-xs`}>{request.status}</Badge>
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
          {filteredRequests.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-2">No requests found</div>
              <div className="text-sm text-gray-400">Try adjusting your search or filter criteria</div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredRequests.length)} of{" "}
                {filteredRequests.length} requests
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-xl"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 p-0 rounded-xl ${
                        currentPage === page ? "bg-blue-600 text-white" : "bg-white/70 hover:bg-blue-50"
                      }`}
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
                  className="rounded-xl"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
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
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmAction} className="bg-green-600 hover:bg-green-700">
              Approve Request
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
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmAction}
              className="bg-red-600 hover:bg-red-700"
              disabled={!rejectionReason.trim()}
            >
              Reject Request
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
