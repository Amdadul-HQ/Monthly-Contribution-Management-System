"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@workspace/ui/components/dialog"
import { Badge } from "@workspace/ui/components/badge"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Separator } from "@workspace/ui/components/separator"
import { useGetUserDetailsQuery } from "../../../redux/api/admin/adminApi"
import { Loader2, Mail, Phone, MapPin, Calendar, CreditCard, User as UserIcon } from "lucide-react"

interface UserDetailModalProps {
    userId: string | null
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function UserDetailModal({ userId, open, onOpenChange }: UserDetailModalProps) {
    const { data: user, isLoading } = useGetUserDetailsQuery(userId || "", {
        skip: !userId,
    })

    if (!userId) return null

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-BD", {
            style: "currency",
            currency: "BDT",
            minimumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-2">
                    <DialogTitle className="text-2xl font-bold">User Details</DialogTitle>
                    <DialogDescription>
                        Complete information for {user?.name || "User"}
                    </DialogDescription>
                </DialogHeader>

                {isLoading ? (
                    <div className="flex items-center justify-center p-12">
                        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                    </div>
                ) : user ? (
                    <ScrollArea className="h-full max-h-[calc(90vh-100px)]">
                        <div className="p-6 pt-2 space-y-6">
                            {/* Header Section */}
                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm shrink-0">
                                    <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-full w-full object-cover" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
                                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>{user.status}</Badge>
                                    </div>
                                    <p className="text-sm text-gray-500 font-mono">{user.memberId}</p>
                                    <p className="text-sm text-gray-500">Joined on {new Date(user.joinDate).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Personal Information */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                                        <UserIcon className="h-4 w-4" /> Personal Information
                                    </h4>
                                    <Separator />
                                    <div className="grid gap-3 text-sm">
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Email</span>
                                            <span className="col-span-2 font-medium break-all">{user.email}</span>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Phone</span>
                                            <span className="col-span-2 font-medium">{user.phone}</span>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Address</span>
                                            <span className="col-span-2 font-medium">{user.address}</span>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Occupation</span>
                                            <span className="col-span-2 font-medium">{user.occupation || "N/A"}</span>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Father's Name</span>
                                            <span className="col-span-2 font-medium">{user.fatherName || "N/A"}</span>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Mother's Name</span>
                                            <span className="col-span-2 font-medium">{user.motherName || "N/A"}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Account Information */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                                        <CreditCard className="h-4 w-4" /> Account Details
                                    </h4>
                                    <Separator />
                                    <div className="grid gap-3 text-sm">
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Type</span>
                                            <span className="col-span-2 font-medium"><Badge variant="outline">{user.accountType}</Badge></span>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Balance</span>
                                            <span className="col-span-2 font-medium text-green-600">{formatCurrency(user.currentBalance)}</span>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Total Deposit</span>
                                            <span className="col-span-2 font-medium">{formatCurrency(user.totalDeposited)}</span>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Penalties</span>
                                            <span className="col-span-2 font-medium text-red-600">{formatCurrency(user.totalPenalties)}</span>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <span className="text-gray-500">Streak</span>
                                            <span className="col-span-2 font-medium">{user.paymentStreak} months</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Reference Information */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                                    Reference
                                </h4>
                                <Separator />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
                                    <div>
                                        <span className="block text-gray-500 text-xs">Reference Person</span>
                                        <span className="font-medium">{user.referencePerson || "N/A"}</span>
                                    </div>
                                    <div>
                                        <span className="block text-gray-500 text-xs">Reference Phone</span>
                                        <span className="font-medium">{user.referencePhone || "N/A"}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Documents */}
                            {user.documents && (
                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                                        Documents
                                    </h4>
                                    <Separator />
                                    <div className="p-4 border rounded-lg bg-gray-50">
                                        {/* Assuming documents is a comma separated string or JSON of URLs, adapting as needed */}
                                        {/* For now just displaying the raw value or a link if it looks like a URL */}
                                        <p className="text-sm text-gray-600 break-all">{user.documents}</p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </ScrollArea>
                ) : (
                    <div className="p-8 text-center text-gray-500">User not found</div>
                )}
            </DialogContent>
        </Dialog>
    )
}
