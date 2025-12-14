"use client"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { ArrowLeft, Check, Lock, Eye, EyeOff } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useResetPasswordMutation } from "@/redux/api/auth/authApi"
import { toast } from "sonner"

// Define validation schema
const resetPasswordSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

type FormData = z.infer<typeof resetPasswordSchema>

const ResetPasswordPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const router = useRouter()
    const searchParams = useSearchParams()
    const token = searchParams?.get('token')

    const [resetPassword, { isLoading }] = useResetPasswordMutation()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(resetPasswordSchema),
        mode: "onChange",
    })

    const handleError = useCallback((error: unknown, context: string) => {
        console.error(`Error in ${context}:`, error);
        const errorMessage = error instanceof Error
            ? error.message
            : typeof error === 'string'
                ? error
                : 'An unexpected error occurred';
        toast.error(`${errorMessage}`);
    }, []);

    useEffect(() => {
        try {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 300)
            return () => clearTimeout(timer)
        } catch (error) {
            handleError(error, 'Animation setup');
        }
    }, [handleError])

    useEffect(() => {
        if (!token) {
            toast.error("Invalid or missing reset token. Please request a new link.");
        }
    }, [token])

    const onSubmit = async (data: FormData) => {
        if (!token) {
            toast.error("Missing reset token");
            return;
        }

        try {
            const result = await resetPassword({
                token,
                newPassword: data.password,
                confirmPassword: data.confirmPassword
            }).unwrap();

            if (result.success) {
                setIsSuccess(true);
                toast.success("Password reset successfully!");
                setTimeout(() => {
                    router.push('/login');
                }, 3000);
            } else {
                toast.error(result.message || "Failed to reset password.");
            }
        } catch (error: any) {
            console.error("Reset password failed:", error);
            toast.error(error?.data?.message || "Failed to reset password. Token might be expired.");
        }
    };

    const renderSuccess = () => (
        <div className="text-center space-y-6 py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <Check className="h-8 w-8 text-white" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Password Reset Successful!</h2>
                <p className="text-gray-600">Your password has been updated successfully.</p>
            </div>
            <div className="bg-green-50/50 rounded-xl p-4">
                <p className="text-sm text-green-700">
                    Redirecting to login page...
                </p>
            </div>
            <Link href="/login">
                <Button variant="outline" className="mt-4 w-full">
                    Go to Login
                </Button>
            </Link>
        </div>
    )

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-500 flex items-center justify-center overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-bounce delay-2000"></div>
            </div>

            {/* Main content container */}
            <div className="relative z-10 w-full max-w-sm mx-auto">
                <div
                    className={`
            bg-gradient-to-b from-white/20 via-blue-50/30 to-blue-400/20 
            backdrop-blur-sm rounded-[3rem] p-2 shadow-2xl border border-white/20
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}
          `}
                >
                    <div className="bg-gradient-to-b from-blue-50 to-blue-200 rounded-[2.5rem] p-4 relative overflow-hidden min-h-[600px] flex flex-col justify-center">
                        <div className="pt-8 pb-8 md:space-y-6">
                            {isSuccess ? renderSuccess() : (
                                <>
                                    {/* Header */}
                                    <div
                                        className={`
                                            flex items-center justify-between transition-all duration-1000 delay-300 ease-out mb-8
                                            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                                        `}
                                    >
                                        <Link href="/login">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="p-2 hover:bg-white/20 rounded-full transition-all duration-300"
                                            >
                                                <ArrowLeft className="h-5 w-5 text-gray-700" />
                                            </Button>
                                        </Link>
                                    </div>

                                    {/* Title */}
                                    <div
                                        className={`
                      text-center space-y-2 transition-all duration-1000 delay-500 ease-out mb-8
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    `}
                                    >
                                        <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
                                        <p className="text-gray-600 text-sm">Enter your new password</p>
                                    </div>

                                    {/* Form */}
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className={`
                      space-y-4 transition-all duration-1000 delay-900 ease-out
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    `}
                                    >
                                        {/* Password */}
                                        <div className="space-y-2">
                                            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                                New Password
                                            </Label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Lock className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="password"
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Enter new password"
                                                    className={`pl-10 pr-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.password ? "border-red-400 focus:border-red-400" : ""
                                                        }`}
                                                    {...register("password")}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-transparent"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="h-4 w-4 text-gray-400" />
                                                    ) : (
                                                        <Eye className="h-4 w-4 text-gray-400" />
                                                    )}
                                                </Button>
                                            </div>
                                            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
                                        </div>

                                        {/* Confirm Password */}
                                        <div className="space-y-2">
                                            <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                                Confirm Password
                                            </Label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Lock className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="confirmPassword"
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    placeholder="Confirm new password"
                                                    className={`pl-10 pr-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.confirmPassword ? "border-red-400 focus:border-red-400" : ""
                                                        }`}
                                                    {...register("confirmPassword")}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-transparent"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                >
                                                    {showConfirmPassword ? (
                                                        <EyeOff className="h-4 w-4 text-gray-400" />
                                                    ) : (
                                                        <Eye className="h-4 w-4 text-gray-400" />
                                                    )}
                                                </Button>
                                            </div>
                                            {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>}
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting || isLoading}
                                            className="
                        w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-500 
                        hover:from-blue-700 hover:to-cyan-600 text-white font-medium 
                        rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                        transform hover:scale-105 active:scale-95 mt-6
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                      "
                                        >
                                            {(isSubmitting || isLoading) ? "Resetting..." : "Reset Password"}
                                        </Button>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Decorative elements similar to Login Page */}
                        <div className="absolute top-20 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-20 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage
