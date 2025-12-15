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
import { useState, useEffect } from "react"
import {
  useGetAllUsersQuery,
  useBlockUserMutation,
  useSuspendUserMutation,
  useRemoveUserMutation,
  useUpdateUserMutation,
  UserListItemDto
} from "../../../redux/api/admin/adminApi"
import { toast } from "sonner"

const statusOptions = ["All", "Active", "Suspended", "Blocked", "Inactive"]
const accountTypeOptions = ["All", "Premium", "Standard", "Basic"]

type UserStatus = "Active" | "Suspended" | "Blocked" | "Inactive"
type ActionType = "block" | "suspend" | "activate" | "remove"

export function AdminUserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [accountTypeFilter, setAccountTypeFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedAction, setSelectedAction] = useState<{ type: ActionType; user: UserListItemDto } | null>(null)

  const itemsPerPage = 10

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 500)
    return () => clearTimeout(timer)
  }, [searchTerm])

  // API Query
  const { data, isLoading } = useGetAllUsersQuery({
    page: currentPage,
    limit: itemsPerPage,
    search: debouncedSearch,
    status: statusFilter === "All" ? undefined : statusFilter,
    accountType: accountTypeFilter === "All" ? undefined : accountTypeFilter,
  })

  // Mutations
  const [blockUser] = useBlockUserMutation()
  const [suspendUser] = useSuspendUserMutation()
  const [removeUser] = useRemoveUserMutation()
  const [updateUser] = useUpdateUserMutation()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusColor = (status: string) => {
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

  const getStatusIcon = (status: string) => {
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

  const handleUserAction = (type: ActionType, user: UserListItemDto) => {
    setSelectedAction({ type, user })
  }

  const confirmAction = async () => {
    if (!selectedAction) return

    const { type, user } = selectedAction
    const toastId = toast.loading("Processing...")

    try {
      let res;
      switch (type) {
        case "block":
          res = await blockUser({ id: user.userId, data: { reason: "Admin Blocked" } }).unwrap()
          break;
        case "suspend":
          // Default suspend for 30 days
          const endDate = new Date()
          endDate.setDate(endDate.getDate() + 30)
          res = await suspendUser({ id: user.userId, data: { reason: "Admin Suspended", endDate: endDate.toISOString() } }).unwrap()
          break;
        case "activate":
          res = await updateUser({ id: user.userId, data: { status: "Active" } }).unwrap()
          break;
        case "remove":
          res = await removeUser(user.userId).unwrap()
          break;
      }

      if (res?.success) {
        toast.success(res.message, { id: toastId })
      } else {
        toast.error("Action failed", { id: toastId })
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong", { id: toastId })
    } finally {
      setSelectedAction(null)
    }
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

  const getActionDescription = (type: ActionType, user: UserListItemDto) => {
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

  const users = data?.data || []
  const totalPages = data?.meta?.totalPages || 1
  const totalUsers = data?.meta?.total || 0
  const startIndex = (currentPage - 1) * itemsPerPage

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
            Users ({totalUsers})
          </CardTitle>
          <CardDescription className="text-gray-700">
            Showing {startIndex + 1}-{Math.min(startIndex + users.length, totalUsers)} of{" "}
            {totalUsers} users
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

          {isLoading ? (
            <div className="flex justify-center py-8">Loading users...</div>
          ) : (
            <>
              {/* Mobile Card View */}
              <div className="block md:hidden space-y-4">
                {users.map((user) => (
                  <Card
                    key={user.userId}
                    className={`${user.status === "Blocked"
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
                                .map((n: string) => n[0])
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
                      {users.map((user) => (
                        <TableRow
                          key={user.userId}
                          className={`border-blue-100/30 hover:bg-blue-50/30 transition-colors ${user.status === "Blocked"
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
              {users.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-gray-500 mb-2">No users found</div>
                  <div className="text-sm text-gray-400">Try adjusting your search or filter criteria</div>
                </div>
              )}
            </>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, totalUsers)} of{" "}
                {totalUsers} users
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
                      className={`w-8 h-8 p-0 rounded-xl ${currentPage === page ? "bg-blue-600 text-white" : "bg-white/70 hover:bg-blue-50"
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
