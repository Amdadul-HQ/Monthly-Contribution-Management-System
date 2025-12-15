"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@workspace/ui/components/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@workspace/ui/components/dialog"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
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
  Loader2,
  Save,
  Key,
  Lock,
} from "lucide-react"
import { useGetProfileQuery, useUpdateProfileMutation } from "@/redux/api/user-management/userApi"
import { useChangePasswordMutation } from "@/redux/api/auth/authApi"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export function ProfilePage() {
  const { data: response, isLoading, refetch } = useGetProfileQuery()
  const profileData = response?.data

  // Modal state
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getAccountStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
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
    switch (type?.toLowerCase()) {
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  if (!profileData) {
    return (
      <div className="text-center p-8 text-gray-500">
        Failed to load profile data.
      </div>
    )
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
                    {profileData.statistics.monthsAsMember} months active
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                onClick={() => setIsEditOpen(true)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                onClick={() => setIsChangePasswordOpen(true)}
              >
                <Key className="h-4 w-4 mr-2" />
                Change Password
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

      <EditProfileDialog
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        initialData={profileData.personalInfo}
        refetch={refetch}
      />

      <ChangePasswordDialog
        open={isChangePasswordOpen}
        onOpenChange={setIsChangePasswordOpen}
      />
    </div>
  )
}

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>

function ChangePasswordDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [changePassword, { isLoading }] = useChangePasswordMutation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
  })

  // Reset form when dialog opens
  useEffect(() => {
    if (open) {
      reset()
    }
  }, [open, reset])

  const onSubmit = async (data: ChangePasswordFormValues) => {
    try {
      const result = await changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword, // Use newPassword as per API/DTO
        confirmPassword: data.confirmPassword, // Included as per interface
      }).unwrap()

      if (result.success) {
        toast.success(result.message || "Password changed successfully")
        onOpenChange(false)
      } else {
        toast.error(result.message || "Failed to change password")
      }
    } catch (error: any) {
      console.error("Change password error:", error)
      toast.error(error?.data?.message || error?.message || "Failed to change password")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Ensure your account is using a long, random password to stay secure.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="currentPassword"
                type="password"
                className="pl-10"
                placeholder="Enter current password"
                {...register("currentPassword")}
              />
            </div>
            {errors.currentPassword && (
              <p className="text-sm text-red-500">{errors.currentPassword.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="newPassword"
                type="password"
                className="pl-10"
                placeholder="Enter new password"
                {...register("newPassword")}
              />
            </div>
            {errors.newPassword && <p className="text-sm text-red-500">{errors.newPassword.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="confirmPassword"
                type="password"
                className="pl-10"
                placeholder="Confirm new password"
                {...register("confirmPassword")}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Update Password
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function EditProfileDialog({
  open,
  onOpenChange,
  initialData,
  refetch
}: {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  initialData: any,
  refetch: () => void
}) {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: initialData.name,
      phone: initialData.phone,
      address: initialData.address,
      occupation: initialData.occupation,
    }
  })

  // Reset form when initialData changes or dialog opens
  useEffect(() => {
    if (open) {
      reset({
        name: initialData.name,
        phone: initialData.phone,
        address: initialData.address,
        occupation: initialData.occupation,
      })
    }
  }, [open, initialData, reset])

  const onSubmit = async (data: any) => {
    try {
      await updateProfile(data).unwrap()
      toast.success("Profile updated successfully")
      refetch()
      onOpenChange(false)
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update profile")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...register("name", { required: true })} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" {...register("phone", { required: true })} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register("address")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Input id="occupation" {...register("occupation")} />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
