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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  Users,
  Search,
  Filter,
  MoreHorizontal,
  UserCheck,
  UserX,
  Trash2,
  ShieldX,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock,
  Ban,
} from "lucide-react"
import { useState } from "react"

// Mock user data - replace with your actual data
const mockUsers = [
  {
    id: 1,
    name: "Mohammad Rahman",
    email: "mohammad.rahman@email.com",
    phone: "+880 1712-345678",
    memberId: "BDT-2024-001234",
    status: "Active",
    accountType: "Premium",
    joinDate: "2024-01-15",
    lastLogin: "2024-09-20",
    totalDeposited: 125000,
    currentBalance: 125000,
    totalPenalties: 0,
    paymentStreak: 8,
    address: "Dhaka, Bangladesh",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Fatima Khatun",
    email: "fatima.khatun@email.com",
    phone: "+880 1798-765432",
    memberId: "BDT-2024-001235",
    status: "Suspended",
    accountType: "Standard",
    joinDate: "2024-02-10",
    lastLogin: "2024-09-15",
    totalDeposited: 85000,
    currentBalance: 85000,
    totalPenalties: 2500,
    paymentStreak: 3,
    address: "Chittagong, Bangladesh",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Abdul Karim",
    email: "abdul.karim@email.com",
    phone: "+880 1555-123456",
    memberId: "BDT-2024-001236",
    status: "Active",
    accountType: "Premium",
    joinDate: "2024-01-20",
    lastLogin: "2024-09-19",
    totalDeposited: 180000,
    currentBalance: 180000,
    totalPenalties: 500,
    paymentStreak: 12,
    address: "Sylhet, Bangladesh",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Rashida Begum",
    email: "rashida.begum@email.com",
    phone: "+880 1666-789012",
    memberId: "BDT-2024-001237",
    status: "Blocked",
    accountType: "Standard",
    joinDate: "2024-03-05",
    lastLogin: "2024-08-30",
    totalDeposited: 45000,
    currentBalance: 45000,
    totalPenalties: 5000,
    paymentStreak: 0,
    address: "Rajshahi, Bangladesh",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Aminul Islam",
    email: "aminul.islam@email.com",
    phone: "+880 1777-345678",
    memberId: "BDT-2024-001238",
    status: "Active",
    accountType: "Premium",
    joinDate: "2024-01-08",
    lastLogin: "2024-09-18",
    totalDeposited: 220000,
    currentBalance: 220000,
    totalPenalties: 0,
    paymentStreak: 15,
    address: "Khulna, Bangladesh",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Salma Akter",
    email: "salma.akter@email.com",
    phone: "+880 1888-901234",
    memberId: "BDT-2024-001239",
    status: "Inactive",
    accountType: "Basic",
    joinDate: "2024-04-12",
    lastLogin: "2024-07-20",
    totalDeposited: 25000,
    currentBalance: 25000,
    totalPenalties: 1500,
    paymentStreak: 0,
    address: "Barisal, Bangladesh",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    name: "Rafiqul Hasan",
    email: "rafiqul.hasan@email.com",
    phone: "+880 1999-567890",
    memberId: "BDT-2024-001240",
    status: "Active",
    accountType: "Standard",
    joinDate: "2024-02-28",
    lastLogin: "2024-09-17",
    totalDeposited: 95000,
    currentBalance: 95000,
    totalPenalties: 800,
    paymentStreak: 6,
    address: "Rangpur, Bangladesh",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    name: "Nasreen Sultana",
    email: "nasreen.sultana@email.com",
    phone: "+880 1444-234567",
    memberId: "BDT-2024-001241",
    status: "Suspended",
    accountType: "Standard",
    joinDate: "2024-03-15",
    lastLogin: "2024-09-10",
    totalDeposited: 65000,
    currentBalance: 65000,
    totalPenalties: 3200,
    paymentStreak: 1,
    address: "Mymensingh, Bangladesh",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 9,
    name: "Mizanur Rahman",
    email: "mizanur.rahman@email.com",
    phone: "+880 1333-678901",
    memberId: "BDT-2024-001242",
    status: "Active",
    accountType: "Premium",
    joinDate: "2024-01-25",
    lastLogin: "2024-09-16",
    totalDeposited: 155000,
    currentBalance: 155000,
    totalPenalties: 0,
    paymentStreak: 9,
    address: "Comilla, Bangladesh",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 10,
    name: "Ruma Khatun",
    email: "ruma.khatun@email.com",
    phone: "+880 1222-789012",
    memberId: "BDT-2024-001243",
    status: "Blocked",
    accountType: "Basic",
    joinDate: "2024-05-08",
    lastLogin: "2024-08-15",
    totalDeposited: 35000,
    currentBalance: 35000,
    totalPenalties: 4500,
    paymentStreak: 0,
    address: "Jessore, Bangladesh",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const statusOptions = ["All", "Active", "Suspended", "Blocked", "Inactive"]
const accountTypeOptions = ["All", "Premium", "Standard", "Basic"]

type UserStatus = "Active" | "Suspended" | "Blocked" | "Inactive"
type ActionType = "block" | "suspend" | "activate" | "remove"

interface User {
  id: number
  name: string
  email: string
  phone: string
  memberId: string
  status: UserStatus
  accountType: string
  joinDate: string
  lastLogin: string
  totalDeposited: number
  currentBalance: number
  totalPenalties: number
  paymentStreak: number
  address: string
  avatar: string
}

export function AdminUserManagement() {
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [accountTypeFilter, setAccountTypeFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedAction, setSelectedAction] = useState<{ type: ActionType; user: User } | null>(null)

  const itemsPerPage = 5

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusColor = (status: UserStatus) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200"
      case "Suspended":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Blocked":
        return "bg-red-100 text-red-800 border-red-200"
      case "Inactive":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: UserStatus) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "Suspended":
        return <Clock className="h-4 w-4 text-orange-600" />
      case "Blocked":
        return <Ban className="h-4 w-4 text-red-600" />
      case "Inactive":
        return <AlertTriangle className="h-4 w-4 text-gray-600" />
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

  // Filter users based on search and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.memberId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm)

    const matchesStatus = statusFilter === "All" || user.status === statusFilter
    const matchesAccountType = accountTypeFilter === "All" || user.accountType === accountTypeFilter

    return matchesSearch && matchesStatus && matchesAccountType
  })

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  // Handle user actions
  const handleUserAction = (type: ActionType, user: User) => {
    setSelectedAction({ type, user })
  }

  const confirmAction = () => {
    if (!selectedAction) return

    const { type, user } = selectedAction

    setUsers((prevUsers) =>
      prevUsers
        .map((u) => {
          if (u.id === user.id) {
            switch (type) {
              case "block":
                return { ...u, status: "Blocked" as UserStatus }
              case "suspend":
                return { ...u, status: "Suspended" as UserStatus }
              case "activate":
                return { ...u, status: "Active" as UserStatus }
              case "remove":
                return u // Will be filtered out below
              default:
                return u
            }
          }
          return u
        })
        .filter((u) => !(type === "remove" && u.id === user.id)),
    )

    setSelectedAction(null)
  }

  const getActionTitle = (type: ActionType) => {
    switch (type) {
      case "block":
        return "Block User"
      case "suspend":
        return "Suspend User"
      case "activate":
        return "Activate User"
      case "remove":
        return "Remove User"
      default:
        return "Confirm Action"
    }
  }

  const getActionDescription = (type: ActionType, user: User) => {
    switch (type) {
      case "block":
        return `Are you sure you want to block ${user.name}? They will not be able to access their account.`
      case "suspend":
        return `Are you sure you want to suspend ${user.name}? Their account will be temporarily disabled.`
      case "activate":
        return `Are you sure you want to activate ${user.name}? They will regain full access to their account.`
      case "remove":
        return `Are you sure you want to permanently remove ${user.name}? This action cannot be undone.`
      default:
        return "Please confirm this action."
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">Manage all system users and their permissions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-xl">
            <Users className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>


      {/* Users List */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg p-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Users className="h-5 w-5 text-blue-600" />
            Users ({filteredUsers.length})
          </CardTitle>
          <CardDescription className="text-gray-700">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredUsers.length)} of{" "}
            {filteredUsers.length} users
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2">
        {/* Search and Filters */}
      <Card className="bg-transparent backdrop-blur-sm border-white/30 p-0 mb-2">
        <CardContent className="py-3 px-3">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, member ID, or phone..."
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
          </div>
        </CardContent>
      </Card>
          {/* Mobile Card View */}
          <div className="block md:hidden space-y-4">
            {paginatedUsers.map((user) => (
              <Card
                key={user.id}
                className={`${
                  user.status === "Blocked"
                    ? "bg-red-50/50 border-red-200/50"
                    : user.status === "Suspended"
                      ? "bg-orange-50/50 border-orange-200/50"
                      : user.status === "Inactive"
                        ? "bg-gray-50/50 border-gray-200/50"
                        : "bg-blue-50/50 border-blue-100/50"
                } backdrop-blur-sm shadow-sm`}
              >
                <CardContent className="p-4 space-y-4">
                  {/* Header with Avatar and Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.memberId}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(user.status)}
                      <Badge className={`${getStatusColor(user.status)} text-xs`}>{user.status}</Badge>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{user.address}</span>
                    </div>
                  </div>

                  {/* Account Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">Account Type</div>
                      <Badge className={`${getAccountTypeColor(user.accountType)} text-xs`}>{user.accountType}</Badge>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">Total Deposited</div>
                      <div className="font-semibold text-blue-600">{formatCurrency(user.totalDeposited)}</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{user.paymentStreak}</div>
                      <div className="text-xs text-gray-600">Streak</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">{formatCurrency(user.totalPenalties)}</div>
                      <div className="text-xs text-gray-600">Penalties</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {Math.floor(
                          (new Date().getTime() - new Date(user.joinDate).getTime()) / (1000 * 60 * 60 * 24 * 30),
                        )}
                      </div>
                      <div className="text-xs text-gray-600">Months</div>
                    </div>
                  </div>

                  {/* Last Login */}
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="text-xs text-gray-600 mb-1">Last Login</div>
                    <div className="text-sm text-gray-900">{new Date(user.lastLogin).toLocaleDateString("en-BD")}</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 rounded-xl">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 rounded-xl">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-xl">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {user.status === "Active" && (
                          <>
                            <DropdownMenuItem onClick={() => handleUserAction("suspend", user)}>
                              <UserX className="h-4 w-4 mr-2" />
                              Suspend
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUserAction("block", user)}>
                              <ShieldX className="h-4 w-4 mr-2" />
                              Block
                            </DropdownMenuItem>
                          </>
                        )}
                        {(user.status === "Suspended" || user.status === "Blocked" || user.status === "Inactive") && (
                          <DropdownMenuItem onClick={() => handleUserAction("activate", user)}>
                            <UserCheck className="h-4 w-4 mr-2" />
                            Activate
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleUserAction("remove", user)} className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
                    <TableHead className="text-gray-900 font-semibold">User</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Contact</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Status</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Account Type</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Total Deposited</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Last Login</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedUsers.map((user) => (
                    <TableRow
                      key={user.id}
                      className={`border-blue-100/30 hover:bg-blue-50/30 transition-colors ${
                        user.status === "Blocked"
                          ? "bg-red-50/20"
                          : user.status === "Suspended"
                            ? "bg-orange-50/20"
                            : user.status === "Inactive"
                              ? "bg-gray-50/20"
                              : ""
                      }`}
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback className="bg-blue-100 text-blue-600">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.memberId}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm text-gray-900">{user.email}</p>
                          <p className="text-sm text-gray-600">{user.phone}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(user.status)}
                          <Badge className={`${getStatusColor(user.status)} text-xs`}>{user.status}</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getAccountTypeColor(user.accountType)} text-xs`}>{user.accountType}</Badge>
                      </TableCell>
                      <TableCell className="font-semibold text-blue-600">
                        {formatCurrency(user.totalDeposited)}
                      </TableCell>
                      <TableCell className="text-gray-900">
                        {new Date(user.lastLogin).toLocaleDateString("en-BD")}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {user.status === "Active" && (
                              <>
                                <DropdownMenuItem onClick={() => handleUserAction("suspend", user)}>
                                  <UserX className="h-4 w-4 mr-2" />
                                  Suspend
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleUserAction("block", user)}>
                                  <ShieldX className="h-4 w-4 mr-2" />
                                  Block
                                </DropdownMenuItem>
                              </>
                            )}
                            {(user.status === "Suspended" ||
                              user.status === "Blocked" ||
                              user.status === "Inactive") && (
                              <DropdownMenuItem onClick={() => handleUserAction("activate", user)}>
                                <UserCheck className="h-4 w-4 mr-2" />
                                Activate
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleUserAction("remove", user)} className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* No results message */}
          {filteredUsers.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-2">No users found</div>
              <div className="text-sm text-gray-400">Try adjusting your search or filter criteria</div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredUsers.length)} of{" "}
                {filteredUsers.length} users
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

      {/* Confirmation Dialog */}
      <AlertDialog open={!!selectedAction} onOpenChange={() => setSelectedAction(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{selectedAction && getActionTitle(selectedAction.type)}</AlertDialogTitle>
            <AlertDialogDescription>
              {selectedAction && getActionDescription(selectedAction.type, selectedAction.user)}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmAction}
              className={selectedAction?.type === "remove" ? "bg-red-600 hover:bg-red-700" : ""}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
