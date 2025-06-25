"use client"


import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  CreditCard,
  Shield,
  Edit,
  Settings,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"

// Mock profile data - replace with your actual data
const profileData = {
  personalInfo: {
    name: "Mohammad Rahman",
    email: "mohammad.rahman@email.com",
    phone: "+880 1712-345678",
    profileImage: "/placeholder.svg?height=100&width=100",
    memberId: "BDT-2024-001234",
    joinDate: "2024-01-15",
    address: "Dhaka, Bangladesh",
    nidNumber: "1234567890123",
    occupation: "Software Engineer",
    emergencyContact: "+880 1798-765432",
  },
  accountInfo: {
    accountStatus: "Active",
    accountType: "Premium",
    totalDeposited: 125000,
    currentBalance: 125000,
    totalPenalties: 2500,
    nextPaymentDue: "2024-10-15",
    monthlyAmount: 16000,
    paymentStreak: 8,
    onTimePaymentRate: 85,
  },
  preferences: {
    preferredPaymentMethod: "bKash",
    notificationsEnabled: true,
    emailAlerts: true,
    smsAlerts: false,
    language: "English",
  },
  statistics: {
    monthsAsMember: 9,
    totalTransactions: 24,
    averageMonthlyDeposit: 13889,
    lastLoginDate: "2024-09-20",
  },
}

export function ProfilePage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const calculateMembershipDuration = (joinDate: string) => {
    const join = new Date(joinDate)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - join.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const months = Math.floor(diffDays / 30)
    const days = diffDays % 30
    return { months, days, totalDays: diffDays }
  }

  const membershipDuration = calculateMembershipDuration(profileData.personalInfo.joinDate)

  const getAccountStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "inactive":
        return "bg-red-100 text-red-800 border-red-200"
      case "suspended":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getAccountTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "premium":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "standard":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "basic":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 shadow-xl">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-white/20">
              <AvatarImage
                src={profileData.personalInfo.profileImage || "/placeholder.svg"}
                alt={profileData.personalInfo.name}
              />
              <AvatarFallback className="text-2xl font-bold bg-white/20 text-white">
                {profileData.personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{profileData.personalInfo.name}</h1>
              <p className="text-blue-100 mb-3">Member ID: {profileData.personalInfo.memberId}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <Badge className={`${getAccountStatusColor(profileData.accountInfo.accountStatus)} text-xs`}>
                  {profileData.accountInfo.accountStatus}
                </Badge>
                <Badge className={`${getAccountTypeColor(profileData.accountInfo.accountType)} text-xs`}>
                  {profileData.accountInfo.accountType} Member
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {new Date(profileData.personalInfo.joinDate).toLocaleDateString("en-BD")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    {membershipDuration.months} months, {membershipDuration.days} days
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <User className="h-5 w-5 text-blue-600" />
              Personal Information
            </CardTitle>
            <CardDescription className="text-gray-700">Your personal details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Full Name</label>
                <div className="text-gray-900">{profileData.personalInfo.name}</div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Member ID</label>
                <div className="font-mono text-sm text-gray-900">{profileData.personalInfo.memberId}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg">
                <Mail className="h-4 w-4 text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-gray-600">Email Address</div>
                  <div className="text-gray-900">{profileData.personalInfo.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg">
                <Phone className="h-4 w-4 text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-gray-600">Phone Number</div>
                  <div className="text-gray-900">{profileData.personalInfo.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg">
                <MapPin className="h-4 w-4 text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-gray-600">Address</div>
                  <div className="text-gray-900">{profileData.personalInfo.address}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">NID Number</label>
                <div className="font-mono text-sm text-gray-900">{profileData.personalInfo.nidNumber}</div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Occupation</label>
                <div className="text-gray-900">{profileData.personalInfo.occupation}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Information */}
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <CreditCard className="h-5 w-5 text-blue-600" />
              Account Information
            </CardTitle>
            <CardDescription className="text-gray-700">Your account status and financial details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50/50 rounded-lg p-3 border border-green-100/50">
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(profileData.accountInfo.currentBalance)}
                </div>
                <div className="text-sm text-gray-600">Current Balance</div>
              </div>
              <div className="bg-blue-50/50 rounded-lg p-3 border border-blue-100/50">
                <div className="text-2xl font-bold text-blue-600">
                  {formatCurrency(profileData.accountInfo.monthlyAmount)}
                </div>
                <div className="text-sm text-gray-600">Monthly Amount</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">Account Status</span>
                </div>
                <Badge className={`${getAccountStatusColor(profileData.accountInfo.accountStatus)} text-xs`}>
                  {profileData.accountInfo.accountStatus}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">Account Type</span>
                </div>
                <Badge className={`${getAccountTypeColor(profileData.accountInfo.accountType)} text-xs`}>
                  {profileData.accountInfo.accountType}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">Next Payment Due</span>
                </div>
                <span className="text-gray-900 font-medium">
                  {new Date(profileData.accountInfo.nextPaymentDue).toLocaleDateString("en-BD")}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">Preferred Payment</span>
                </div>
                <span className="text-gray-900 font-medium">{profileData.preferences.preferredPaymentMethod}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistics and Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600">{profileData.accountInfo.paymentStreak}</div>
            <div className="text-sm text-gray-700">Payment Streak</div>
            <div className="text-xs text-gray-500 mt-1">Consecutive months</div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600">{profileData.accountInfo.onTimePaymentRate}%</div>
            <div className="text-sm text-gray-700">On-Time Rate</div>
            <div className="text-xs text-gray-500 mt-1">Payment accuracy</div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600">{profileData.statistics.monthsAsMember}</div>
            <div className="text-sm text-gray-700">Months Active</div>
            <div className="text-xs text-gray-500 mt-1">Member duration</div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-red-600">
              {formatCurrency(profileData.accountInfo.totalPenalties)}
            </div>
            <div className="text-sm text-gray-700">Total Penalties</div>
            <div className="text-xs text-gray-500 mt-1">Late payment fees</div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contact & Additional Info */}
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Phone className="h-5 w-5 text-blue-600" />
            Emergency Contact & Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Emergency Contact</label>
              <div className="text-gray-900">{profileData.personalInfo.emergencyContact}</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Total Transactions</label>
              <div className="text-gray-900">{profileData.statistics.totalTransactions}</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Last Login</label>
              <div className="text-gray-900">
                {new Date(profileData.statistics.lastLoginDate).toLocaleDateString("en-BD")}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
