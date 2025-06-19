"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Badge } from "@workspace/ui/components/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table"
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
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
} from "lucide-react"
import { useState } from "react"

// Mock all deposits data - replace with your actual data
const mockAllDeposits = [
  {
    id: 1,
    memberName: "Mohammad Rahman",
    memberId: "BDT-2024-001234",
    email: "mohammad.rahman@email.com",
    phone: "+880 1712-345678",
    submissionDate: "2024-09-15",
    submitDate: "2024-09-15",
    reference: "BKS240915001",
    amount: 16000,
    method: "bKash",
    transactionId: "BKS240915001",
    monthOf: "September 2024",
    year: 2024,
    month: 9,
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Premium",
    isLate: false,
  },
  {
    id: 2,
    memberName: "Fatima Khatun",
    memberId: "BDT-2024-001235",
    email: "fatima.khatun@email.com",
    phone: "+880 1798-765432",
    submissionDate: "2024-09-18",
    submitDate: "2024-09-15",
    reference: "NGD240918002",
    amount: 15000,
    method: "Nagad",
    transactionId: "NGD240918002",
    monthOf: "September 2024",
    year: 2024,
    month: 9,
    status: "Completed",
    penalty: 500,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Standard",
    isLate: true,
  },
  {
    id: 3,
    memberName: "Abdul Karim",
    memberId: "BDT-2024-001236",
    email: "abdul.karim@email.com",
    phone: "+880 1555-123456",
    submissionDate: "2024-08-12",
    submitDate: "2024-08-12",
    reference: "BNK240812003",
    amount: 18000,
    method: "Bank",
    transactionId: "BNK240812003",
    monthOf: "August 2024",
    year: 2024,
    month: 8,
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Premium",
    isLate: false,
  },
  {
    id: 4,
    memberName: "Rashida Begum",
    memberId: "BDT-2024-001237",
    email: "rashida.begum@email.com",
    phone: "+880 1666-789012",
    submissionDate: "2024-08-20",
    submitDate: "2024-08-15",
    reference: "CSH240820004",
    amount: 12000,
    method: "Cash",
    transactionId: "CSH240820004",
    monthOf: "August 2024",
    year: 2024,
    month: 8,
    status: "Completed",
    penalty: 800,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Standard",
    isLate: true,
  },
  {
    id: 5,
    memberName: "Aminul Islam",
    memberId: "BDT-2024-001238",
    email: "aminul.islam@email.com",
    phone: "+880 1777-345678",
    submissionDate: "2024-07-10",
    submitDate: "2024-07-10",
    reference: "BKS240710005",
    amount: 20000,
    method: "bKash",
    transactionId: "BKS240710005",
    monthOf: "July 2024",
    year: 2024,
    month: 7,
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Premium",
    isLate: false,
  },
  {
    id: 6,
    memberName: "Salma Akter",
    memberId: "BDT-2024-001239",
    email: "salma.akter@email.com",
    phone: "+880 1888-901234",
    submissionDate: "2024-07-25",
    submitDate: "2024-07-15",
    reference: "RKT240725006",
    amount: 10000,
    method: "Rocket",
    transactionId: "RKT240725006",
    monthOf: "July 2024",
    year: 2024,
    month: 7,
    status: "Completed",
    penalty: 1200,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Basic",
    isLate: true,
  },
  {
    id: 7,
    memberName: "Rafiqul Hasan",
    memberId: "BDT-2024-001240",
    email: "rafiqul.hasan@email.com",
    phone: "+880 1999-567890",
    submissionDate: "2024-06-08",
    submitDate: "2024-06-08",
    reference: "NGD240608007",
    amount: 14000,
    method: "Nagad",
    transactionId: "NGD240608007",
    monthOf: "June 2024",
    year: 2024,
    month: 6,
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Standard",
    isLate: false,
  },
  {
    id: 8,
    memberName: "Nasreen Sultana",
    memberId: "BDT-2024-001241",
    email: "nasreen.sultana@email.com",
    phone: "+880 1444-234567",
    submissionDate: "2024-06-22",
    submitDate: "2024-06-15",
    reference: "BNK240622008",
    amount: 16000,
    method: "Bank",
    transactionId: "BNK240622008",
    monthOf: "June 2024",
    year: 2024,
    month: 6,
    status: "Completed",
    penalty: 600,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Premium",
    isLate: true,
  },
  {
    id: 9,
    memberName: "Mizanur Rahman",
    memberId: "BDT-2024-001242",
    email: "mizanur.rahman@email.com",
    phone: "+880 1333-678901",
    submissionDate: "2024-05-12",
    submitDate: "2024-05-12",
    reference: "BKS240512009",
    amount: 13000,
    method: "bKash",
    transactionId: "BKS240512009",
    monthOf: "May 2024",
    year: 2024,
    month: 5,
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Standard",
    isLate: false,
  },
  {
    id: 10,
    memberName: "Ruma Khatun",
    memberId: "BDT-2024-001243",
    email: "ruma.khatun@email.com",
    phone: "+880 1222-789012",
    submissionDate: "2024-05-28",
    submitDate: "2024-05-15",
    reference: "CSH240528010",
    amount: 11000,
    method: "Cash",
    transactionId: "CSH240528010",
    monthOf: "May 2024",
    year: 2024,
    month: 5,
    status: "Completed",
    penalty: 1500,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Basic",
    isLate: true,
  },
  {
    id: 11,
    memberName: "Kamal Uddin",
    memberId: "BDT-2024-001244",
    email: "kamal.uddin@email.com",
    phone: "+880 1111-456789",
    submissionDate: "2024-04-10",
    submitDate: "2024-04-10",
    reference: "RKT240410011",
    amount: 17000,
    method: "Rocket",
    transactionId: "RKT240410011",
    monthOf: "April 2024",
    year: 2024,
    month: 4,
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Premium",
    isLate: false,
  },
  {
    id: 12,
    memberName: "Shahida Akter",
    memberId: "BDT-2024-001245",
    email: "shahida.akter@email.com",
    phone: "+880 1555-987654",
    submissionDate: "2024-04-25",
    submitDate: "2024-04-15",
    reference: "NGD240425012",
    amount: 9000,
    method: "Nagad",
    transactionId: "NGD240425012",
    monthOf: "April 2024",
    year: 2024,
    month: 4,
    status: "Completed",
    penalty: 900,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Basic",
    isLate: true,
  },
  {
    id: 13,
    memberName: "Habibur Rahman",
    memberId: "BDT-2024-001246",
    email: "habibur.rahman@email.com",
    phone: "+880 1777-123456",
    submissionDate: "2024-03-08",
    submitDate: "2024-03-08",
    reference: "BNK240308013",
    amount: 15000,
    method: "Bank",
    transactionId: "BNK240308013",
    monthOf: "March 2024",
    year: 2024,
    month: 3,
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Standard",
    isLate: false,
  },
  {
    id: 14,
    memberName: "Marium Begum",
    memberId: "BDT-2024-001247",
    email: "marium.begum@email.com",
    phone: "+880 1888-654321",
    submissionDate: "2024-03-20",
    submitDate: "2024-03-15",
    reference: "BKS240320014",
    amount: 12000,
    method: "bKash",
    transactionId: "BKS240320014",
    monthOf: "March 2024",
    year: 2024,
    month: 3,
    status: "Completed",
    penalty: 450,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Standard",
    isLate: true,
  },
  {
    id: 15,
    memberName: "Anwar Hossain",
    memberId: "BDT-2024-001248",
    email: "anwar.hossain@email.com",
    phone: "+880 1999-321654",
    submissionDate: "2024-02-12",
    submitDate: "2024-02-12",
    reference: "CSH240212015",
    amount: 19000,
    method: "Cash",
    transactionId: "CSH240212015",
    monthOf: "February 2024",
    year: 2024,
    month: 2,
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Premium",
    isLate: false,
  },
  {
    id: 16,
    memberName: "Sultana Razia",
    memberId: "BDT-2024-001249",
    email: "sultana.razia@email.com",
    phone: "+880 1444-789123",
    submissionDate: "2024-02-28",
    submitDate: "2024-02-15",
    reference: "RKT240228016",
    amount: 8000,
    method: "Rocket",
    transactionId: "RKT240228016",
    monthOf: "February 2024",
    year: 2024,
    month: 2,
    status: "Completed",
    penalty: 1800,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Basic",
    isLate: true,
  },
  {
    id: 17,
    memberName: "Delwar Hossain",
    memberId: "BDT-2024-001250",
    email: "delwar.hossain@email.com",
    phone: "+880 1333-147258",
    submissionDate: "2024-01-15",
    submitDate: "2024-01-15",
    reference: "NGD240115017",
    amount: 16000,
    method: "Nagad",
    transactionId: "NGD240115017",
    monthOf: "January 2024",
    year: 2024,
    month: 1,
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Premium",
    isLate: false,
  },
  {
    id: 18,
    memberName: "Rahima Khatun",
    memberId: "BDT-2024-001251",
    email: "rahima.khatun@email.com",
    phone: "+880 1222-369852",
    submissionDate: "2024-01-25",
    submitDate: "2024-01-15",
    reference: "BNK240125018",
    amount: 14000,
    method: "Bank",
    transactionId: "BNK240125018",
    monthOf: "January 2024",
    year: 2024,
    month: 1,
    status: "Completed",
    penalty: 1200,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Standard",
    isLate: true,
  },
  // Adding some 2023 data for year filtering
  {
    id: 19,
    memberName: "Jahangir Alam",
    memberId: "BDT-2023-000101",
    email: "jahangir.alam@email.com",
    phone: "+880 1111-852963",
    submissionDate: "2023-12-10",
    submitDate: "2023-12-10",
    reference: "BKS231210019",
    amount: 15000,
    method: "bKash",
    transactionId: "BKS231210019",
    monthOf: "December 2023",
    year: 2023,
    month: 12,
    status: "Completed",
    penalty: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Premium",
    isLate: false,
  },
  {
    id: 20,
    memberName: "Nasir Ahmed",
    memberId: "BDT-2023-000102",
    email: "nasir.ahmed2@email.com",
    phone: "+880 1555-741852",
    submissionDate: "2023-11-20",
    submitDate: "2023-11-15",
    reference: "CSH231120020",
    amount: 10000,
    method: "Cash",
    transactionId: "CSH231120020",
    monthOf: "November 2023",
    year: 2023,
    month: 11,
    status: "Completed",
    penalty: 600,
    avatar: "/placeholder.svg?height=40&width=40",
    accountType: "Standard",
    isLate: true,
  },
]

const paymentMethods = ["All", "bKash", "Nagad", "Rocket", "Bank", "Cash"]
const statusOptions = ["All", "Completed", "Pending", "Failed"]
const accountTypes = ["All", "Premium", "Standard", "Basic"]

// Generate year options dynamically
const currentYear = new Date().getFullYear()
const yearOptions = Array.from({ length: 5 }, (_, i) => currentYear - i)

// Month options
const monthOptions = [
  { value: "all", label: "All Months" },
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
]

interface Deposit {
  id: number
  memberName: string
  memberId: string
  email: string
  phone: string
  submissionDate: string
  submitDate: string
  reference: string
  amount: number
  method: string
  transactionId: string
  monthOf: string
  year: number
  month: number
  status: string
  penalty: number
  avatar: string
  accountType: string
  isLate: boolean
}

export function AllDepositePage() {
  const [deposits, setDeposits] = useState<Deposit[]>(mockAllDeposits)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedMonth, setSelectedMonth] = useState<string>("all")
  const [paymentMethodFilter, setPaymentMethodFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")
  const [accountTypeFilter, setAccountTypeFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({})

  const itemsPerPage = 10

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
      case "rocket":
        return <Smartphone className="h-4 w-4 text-purple-600" />
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
      Rocket: "bg-purple-100 text-purple-800 border-purple-200",
      Bank: "bg-blue-100 text-blue-800 border-blue-200",
      Cash: "bg-green-100 text-green-800 border-green-200",
    }
    return colors[method as keyof typeof colors] || colors.Bank
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

  const getDaysLate = (submissionDate: string, submitDate: string) => {
    const submission = new Date(submissionDate)
    const submit = new Date(submitDate)
    const submitDay = submit.getDate()

    if (submitDay <= 15) return 0
    return submitDay - 15
  }

  // Filter deposits based on all criteria
  const filteredDeposits = deposits.filter((deposit) => {
    const matchesSearch =
      deposit.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deposit.memberId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deposit.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deposit.phone.includes(searchTerm) ||
      deposit.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deposit.transactionId.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesYear = selectedYear === "all" || deposit.year.toString() === selectedYear
    const matchesMonth = selectedMonth === "all" || deposit.month.toString() === selectedMonth
    const matchesPaymentMethod = paymentMethodFilter === "All" || deposit.method === paymentMethodFilter
    const matchesStatus = statusFilter === "All" || deposit.status === statusFilter
    const matchesAccountType = accountTypeFilter === "All" || deposit.accountType === accountTypeFilter

    // Date range filter
    let matchesDateRange = true
    if (dateRange.from || dateRange.to) {
      const depositDate = new Date(deposit.submissionDate)
      if (dateRange.from && depositDate < dateRange.from) matchesDateRange = false
      if (dateRange.to && depositDate > dateRange.to) matchesDateRange = false
    }

    return (
      matchesSearch &&
      matchesYear &&
      matchesMonth &&
      matchesPaymentMethod &&
      matchesStatus &&
      matchesAccountType &&
      matchesDateRange
    )
  })

  // Pagination
  const totalPages = Math.ceil(filteredDeposits.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedDeposits = filteredDeposits.slice(startIndex, startIndex + itemsPerPage)

  // Calculate statistics
  const totalAmount = filteredDeposits.reduce((sum, deposit) => sum + deposit.amount, 0)
  const totalPenalties = filteredDeposits.reduce((sum, deposit) => sum + deposit.penalty, 0)
  const latePayments = filteredDeposits.filter((deposit) => deposit.isLate).length
  const uniqueMembers = new Set(filteredDeposits.map((deposit) => deposit.memberId)).size

  // Reset page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Deposits</h1>
          <p className="text-gray-600">Complete history of all member deposits across all time periods</p>
        </div>
        <div className="flex gap-2">
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
            <div className="text-2xl font-bold text-blue-600">{filteredDeposits.length}</div>
            <div className="text-sm text-gray-700">Total Deposits</div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{formatCurrency(totalAmount)}</div>
            <div className="text-sm text-gray-700">Total Amount</div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{formatCurrency(totalPenalties)}</div>
            <div className="text-sm text-gray-700">Total Penalties</div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{uniqueMembers}</div>
            <div className="text-sm text-gray-700">Unique Members</div>
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
                placeholder="Search by member name, ID, email, phone, reference, or transaction ID..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  handleFilterChange()
                }}
                className="pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl"
              />
            </div>

            {/* Year and Month Filters */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <Select
                value={selectedYear}
                onValueChange={(value) => {
                  setSelectedYear(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger className="bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {yearOptions.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedMonth}
                onValueChange={(value) => {
                  setSelectedMonth(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger className="bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                  {monthOptions.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={paymentMethodFilter}
                onValueChange={(value) => {
                  setPaymentMethodFilter(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger className="bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  {paymentMethods.map((method) => (
                    <SelectItem key={method} value={method}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={statusFilter}
                onValueChange={(value) => {
                  setStatusFilter(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger className="bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                  <SelectValue placeholder="Status" />
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
                  handleFilterChange()
                }}
              >
                <SelectTrigger className="bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl">
                  <SelectValue placeholder="Account Type" />
                </SelectTrigger>
                <SelectContent>
                  {accountTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedYear("all")
                  setSelectedMonth("all")
                  setPaymentMethodFilter("All")
                  setStatusFilter("All")
                  setAccountTypeFilter("All")
                  setDateRange({})
                  setCurrentPage(1)
                }}
                className="bg-white/70 border-white/30 hover:bg-white hover:border-blue-400 rounded-xl"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Deposits List */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <History className="h-5 w-5 text-blue-600" />
            All Deposits ({filteredDeposits.length})
          </CardTitle>
          <CardDescription className="text-gray-700">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredDeposits.length)} of{" "}
            {filteredDeposits.length} deposits
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Mobile Card View */}
          <div className="block md:hidden space-y-4">
            {paginatedDeposits.map((deposit) => {
              const daysLate = getDaysLate(deposit.submissionDate, deposit.submitDate)

              return (
                <Card
                  key={deposit.id}
                  className={`${
                    deposit.isLate ? "bg-red-50/50 border-red-200/50" : "bg-white/50 border-white/30"
                  } backdrop-blur-sm shadow-sm`}
                >
                  <CardContent className="p-4 space-y-3">
                    {/* Header with Member Info and Status */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={deposit.avatar || "/placeholder.svg"} alt={deposit.memberName} />
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {deposit.memberName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">{deposit.memberName}</h3>
                          <p className="text-xs text-gray-600">{deposit.memberId}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {deposit.isLate && (
                          <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">Late</Badge>
                        )}
                        <Badge className={`${getStatusColor(deposit.status)} text-xs`}>{deposit.status}</Badge>
                      </div>
                    </div>

                    {/* Amount and Month */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">{formatCurrency(deposit.amount)}</div>
                      <Badge className={`${getAccountTypeColor(deposit.accountType)} text-xs`}>
                        {deposit.accountType}
                      </Badge>
                    </div>

                    {/* Month Of */}
                    <div className="bg-purple-50/50 rounded-lg p-2">
                      <div className="text-xs text-gray-600 mb-1">Month Of</div>
                      <div className="font-medium text-gray-900">{deposit.monthOf}</div>
                    </div>

                    {/* Payment Method */}
                    <div className="flex items-center gap-2">
                      {getPaymentMethodIcon(deposit.method)}
                      <Badge className={`${getPaymentMethodBadge(deposit.method)} text-xs`}>{deposit.method}</Badge>
                    </div>

                    {/* Transaction Details */}
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-xs text-gray-600 mb-1">Transaction ID</div>
                      <div className="font-mono text-sm text-gray-900">{deposit.transactionId}</div>
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
                          {deposit.isLate && <div className="text-xs text-red-600 mt-1">({daysLate} days late)</div>}
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
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block rounded-xl border border-white/30 bg-white/50 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-blue-50/50 border-blue-100/50">
                    <TableHead className="text-gray-900 font-semibold">Member</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Month Of</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Amount</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Payment Method</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Transaction ID</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Submission Date</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Status</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Penalty</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedDeposits.map((deposit) => {
                    const daysLate = getDaysLate(deposit.submissionDate, deposit.submitDate)

                    return (
                      <TableRow
                        key={deposit.id}
                        className={`border-blue-100/30 hover:bg-blue-50/30 transition-colors ${
                          deposit.isLate ? "bg-red-50/20" : ""
                        }`}
                      >
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={deposit.avatar || "/placeholder.svg"} alt={deposit.memberName} />
                              <AvatarFallback className="bg-blue-100 text-blue-600">
                                {deposit.memberName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-gray-900">{deposit.memberName}</p>
                              <p className="text-sm text-gray-600">{deposit.memberId}</p>
                              <Badge className={`${getAccountTypeColor(deposit.accountType)} text-xs mt-1`}>
                                {deposit.accountType}
                              </Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium text-gray-900">{deposit.monthOf}</div>
                          {deposit.isLate && <div className="text-xs text-red-600 mt-1">({daysLate} days late)</div>}
                        </TableCell>
                        <TableCell className="font-semibold text-blue-600">{formatCurrency(deposit.amount)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getPaymentMethodIcon(deposit.method)}
                            <Badge className={`${getPaymentMethodBadge(deposit.method)} text-xs`}>
                              {deposit.method}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm text-gray-900">{deposit.transactionId}</TableCell>
                        <TableCell className="text-gray-900">
                          {new Date(deposit.submissionDate).toLocaleDateString("en-BD")}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {deposit.isLate && (
                              <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">Late</Badge>
                            )}
                            <Badge className={`${getStatusColor(deposit.status)} text-xs`}>{deposit.status}</Badge>
                          </div>
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
          </div>

          {/* No results message */}
          {filteredDeposits.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-2">No deposits found</div>
              <div className="text-sm text-gray-400">Try adjusting your search or filter criteria</div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredDeposits.length)} of{" "}
                {filteredDeposits.length} deposits
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
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }

                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 p-0 rounded-xl ${
                          currentPage === pageNum ? "bg-blue-600 text-white" : "bg-white/70 hover:bg-blue-50"
                        }`}
                      >
                        {pageNum}
                      </Button>
                    )
                  })}
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

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Payment Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Deposits:</span>
              <span className="font-semibold text-gray-900">{filteredDeposits.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-semibold text-green-600">{formatCurrency(totalAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average Amount:</span>
              <span className="font-semibold text-blue-600">
                {formatCurrency(filteredDeposits.length > 0 ? totalAmount / filteredDeposits.length : 0)}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <AlertCircle className="h-5 w-5 text-red-600" />
              Penalty Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Late Payments:</span>
              <span className="font-semibold text-red-600">{latePayments}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Penalties:</span>
              <span className="font-semibold text-red-600">{formatCurrency(totalPenalties)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">On-Time Rate:</span>
              <span className="font-semibold text-green-600">
                {filteredDeposits.length > 0
                  ? Math.round(((filteredDeposits.length - latePayments) / filteredDeposits.length) * 100)
                  : 0}
                %
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Users className="h-5 w-5 text-purple-600" />
              Member Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Unique Members:</span>
              <span className="font-semibold text-purple-600">{uniqueMembers}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg per Member:</span>
              <span className="font-semibold text-blue-600">
                {formatCurrency(uniqueMembers > 0 ? totalAmount / uniqueMembers : 0)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Deposits per Member:</span>
              <span className="font-semibold text-gray-900">
                {uniqueMembers > 0 ? Math.round(filteredDeposits.length / uniqueMembers) : 0}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
