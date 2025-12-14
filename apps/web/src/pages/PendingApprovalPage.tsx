"use client"

import { Button } from "@workspace/ui/components/button"
import { AlertCircle, LogOut, Mail, Phone, RefreshCw } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { logOut } from "@/redux/userSlice/userSlice"
import Cookies from "js-cookie"
import { toast } from "sonner"

const PendingApprovalPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 300)
        return () => clearTimeout(timer)
    }, [])

    const handleLogout = () => {
        dispatch(logOut())
        Cookies.remove("accessToken")
        Cookies.remove("refreshToken")
        toast.success("Logged out successfully")
        router.push("/login")
    }

    const handleRefreshStatus = () => {
        setIsRefreshing(true)
        // Simulate checking status - in real scenario, this would call an API
        setTimeout(() => {
            setIsRefreshing(false)
            toast.info("Your account is still pending approval. Please contact support.")
            // In a real implementation, you would check the API and redirect if approved
            // if (user.status === "ACTIVE") {
            //   router.push("/dashboard")
            // }
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-500 flex items-center justify-center overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-bounce delay-2000"></div>
            </div>

            {/* Main content container */}
            <div className="relative z-10 w-full max-w-sm mx-auto px-4">
                {/* Phone mockup container */}
                <div
                    className={`
            bg-gradient-to-b from-white/20 via-blue-50/30 to-blue-400/20 
            backdrop-blur-sm rounded-[3rem] p-2 shadow-2xl border border-white/20
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}
          `}
                >
                    {/* Phone frame */}
                    <div className="bg-gradient-to-b from-blue-50 to-blue-200 rounded-[2.5rem] p-4 relative overflow-hidden min-h-[600px]">
                        {/* Content */}
                        <div className="pt-12 pb-8 space-y-6">

                            {/* Icon */}
                            <div
                                className={`
                  text-center transition-all duration-1000 delay-300 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
                            >
                                <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                    <AlertCircle className="h-10 w-10 text-white" />
                                </div>
                            </div>

                            {/* Header */}
                            <div
                                className={`
                  text-center space-y-2 transition-all duration-1000 delay-500 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
                            >
                                <h2 className="text-2xl font-bold text-gray-900">Account Pending Approval</h2>
                                <p className="text-gray-600 text-sm px-4">
                                    Your account registration is currently under review. Our team will verify your information shortly.
                                </p>
                            </div>

                            {/* Support Information Card */}
                            <div
                                className={`
                  bg-white/70 rounded-2xl p-5 space-y-4 backdrop-blur-sm border border-white/30
                  transition-all duration-1000 delay-700 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
                            >
                                <h3 className="text-lg font-semibold text-gray-900 text-center">Need Help?</h3>
                                <p className="text-sm text-gray-600 text-center">
                                    Contact our support team for assistance
                                </p>

                                <div className="space-y-3 pt-2">
                                    {/* Email */}
                                    <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-gray-500 font-medium">Email</p>
                                            <p className="text-sm text-gray-900 font-medium truncate">support@mcms.com</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl">
                                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-gray-500 font-medium">Phone</p>
                                            <p className="text-sm text-gray-900 font-medium">+880 1234-567890</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Box */}
                            <div
                                className={`
                  bg-amber-50/70 border border-amber-200 rounded-xl p-4
                  transition-all duration-1000 delay-900 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
                            >
                                <p className="text-xs text-amber-800 text-center leading-relaxed">
                                    <strong>Note:</strong> Approval typically takes 1-2 business days. You'll receive a notification once your account is activated.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div
                                className={`
                  space-y-3 pt-2 transition-all duration-1000 delay-1100 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
                            >
                                {/* Refresh Status Button */}
                                <Button
                                    onClick={handleRefreshStatus}
                                    disabled={isRefreshing}
                                    className="
                    w-full h-11 bg-gradient-to-r from-blue-600 to-cyan-500 
                    hover:from-blue-700 hover:to-cyan-600 text-white font-medium 
                    rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                    transform hover:scale-105 active:scale-95
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                  "
                                >
                                    <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                                    {isRefreshing ? "Checking..." : "Refresh Status"}
                                </Button>

                                {/* Logout Button */}
                                <Button
                                    onClick={handleLogout}
                                    variant="outline"
                                    className="
                    w-full h-11 bg-white/70 border-white/30 hover:bg-white/90
                    text-gray-700 font-medium rounded-xl
                    transition-all duration-300 transform hover:scale-105 active:scale-95
                  "
                                >
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Logout
                                </Button>
                            </div>

                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-20 right-4 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-20 left-4 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-1000"></div>
                    </div>
                </div>

                {/* Floating elements around the phone */}
                <div
                    className={`
            absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 
            rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 delay-1000
            ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-4 rotate-45"}
          `}
                >
                    <AlertCircle className="w-6 h-6 text-white" />
                </div>

                <div
                    className={`
            absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 
            rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 delay-1200
            ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-4 -rotate-45"}
          `}
                >
                    <Mail className="w-5 h-5 text-white" />
                </div>

                <div
                    className={`
            absolute top-1/2 -right-12 w-8 h-8 bg-white/30 rounded-full 
            transition-all duration-1000 delay-1400 animate-bounce
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
          `}
                ></div>

                <div
                    className={`
            absolute top-1/3 -left-12 w-6 h-6 bg-white/20 rounded-full 
            transition-all duration-1000 delay-1600 animate-bounce
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
          `}
                ></div>
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600 to-transparent"></div>
        </div>
    )
}

export default PendingApprovalPage
