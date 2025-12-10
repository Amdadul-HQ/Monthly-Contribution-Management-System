"use client"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { ArrowLeft, Check, Eye, EyeOff, Hash, Lock, Mail, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { useMemo } from "react"
import { useLoginMutation } from "@/redux/api/auth/authApi"
import { useDispatch } from "react-redux"
import { setUser } from "@/redux/userSlice/userSlice"
import { toast } from "sonner"
import Link from "next/link"


// Define validation schemas for each login type
const emailSchema = z.object({
  login: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

const phoneSchema = z.object({
  login: z.string().regex(/^\+?[\d\s\-$$$$]+$/, "Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

const memberIdSchema = z.object({
  login: z.string().min(1, "Member ID must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

type FormData = z.infer<typeof emailSchema>

const LoginPage =() => {
  const [isVisible, setIsVisible] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loginType, setLoginType] = useState<"email" | "phone" | "memberid">("email")
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const [login, { isLoading: isLoggingIn }] = useLoginMutation()

  const schema = useMemo(() => {
  switch (loginType) {
    case "email":
      return emailSchema
    case "phone":
      return phoneSchema
    case "memberid":
      return memberIdSchema
    default:
      return emailSchema
  }
}, [loginType])

  // Get the appropriate schema based on login type
  const getSchema = () => {
    switch (loginType) {
      case "email":
        return emailSchema
      case "phone":
        return phoneSchema
      case "memberid":
        return memberIdSchema
      default:
        return emailSchema
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    clearErrors,
  } = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
  mode: "onChange",
})

  // Reset form when login type changes
  useEffect(() => {
    reset()
    clearErrors()
  }, [loginType, reset, clearErrors])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const onSubmit = async (data: FormData) => {
    try {
      const result = await login({
        loginType,
        login: data.login,
        password: data.password,
      }).unwrap();

      if (result?.success && result?.data) {
        // Store user and tokens in Redux
        dispatch(setUser({
          user: result.data.user,
          token: result.data.token,
          refreshToken: result.data.refreshToken,
        }));

        setIsSuccess(true);
        toast.success(result.message || "Login successful!");
        
        setTimeout(() => {
          reset();
          router.push('/dashboard');
        }, 2000);
      } else {
        toast.error(result?.message || "Login failed.");
      }
    } catch (error: any) {
      console.error("Login failed:", error);
      toast.error(error?.data?.message || error?.message || "Login failed. Please try again.");
    }
  };

  const getInputType = () => {
    switch (loginType) {
      case "email":
        return "email"
      case "phone":
        return "tel"
      case "memberid":
        return "text"
      default:
        return "text"
    }
  }

  const getPlaceholder = () => {
    switch (loginType) {
      case "email":
        return "Enter your email"
      case "phone":
        return "Enter your phone"
      case "memberid":
        return "Enter your member ID"
      default:
        return "Enter your login"
    }
  }

  const getLabel = () => {
    switch (loginType) {
      case "email":
        return "Email Address"
      case "phone":
        return "Phone Number"
      case "memberid":
        return "Member ID"
      default:
        return "Login"
    }
  }

  const getIcon = () => {
    switch (loginType) {
      case "email":
        return <Mail className="h-4 w-4 text-gray-400" />
      case "phone":
        return <Phone className="h-4 w-4 text-gray-400" />
      case "memberid":
        return <Hash className="h-4 w-4 text-gray-400" />
      default:
        return <Mail className="h-4 w-4 text-gray-400" />
    }
  }

  const renderSuccess = () => (
      <div className="text-center space-y-6 py-8">
        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
          <Check className="h-8 w-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Login Successfully!</h2>
          <p className="text-gray-600">Welcome to MoneyWise! Your has been successfully Login.</p>
        </div>
        <div className="bg-green-50/50 rounded-xl p-4">
          <p className="text-sm text-green-700">
            You can now start managing your finances with our smart banking solutions.
          </p>
        </div>
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
            <div className="pt-12 pb-8 md:space-y-6">
              {
                isSuccess ? renderSuccess() : <>
                
              {/* Header */}
              <div
                className={`
                  flex items-center justify-between transition-all duration-1000 delay-300 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-white/20 rounded-full transition-all duration-300"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-700" />
                </Button>
                </Link>
                <h1 className="text-xl font-semibold text-gray-900">Login</h1>
                <div className="w-9"></div> {/* Spacer */}
              </div>

              {/* Welcome text */}
              <div
                className={`
                  text-center space-y-2 transition-all duration-1000 delay-500 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                <p className="text-gray-600 text-sm">Sign in to your account</p>
              </div>

              {/* Login type toggle */}
              <div
                className={`
                  flex bg-white/50 rounded-full p-1 transition-all duration-1000 delay-700 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <Button
                  type="button"
                  variant={loginType === "email" ? "default" : "ghost"}
                  size="sm"
                  className={`flex-1 rounded-full text-xs transition-all duration-300 ${
                    loginType === "email"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-white/30"
                  }`}
                  onClick={() => setLoginType("email")}
                >
                  <Mail className="h-3 w-3 mr-1" />
                  Email
                </Button>
                <Button
                  type="button"
                  variant={loginType === "phone" ? "default" : "ghost"}
                  size="sm"
                  className={`flex-1 rounded-full text-xs transition-all duration-300 ${
                    loginType === "phone"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-white/30"
                  }`}
                  onClick={() => setLoginType("phone")}
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Phone
                </Button>
                <Button
                  type="button"
                  variant={loginType === "memberid" ? "default" : "ghost"}
                  size="sm"
                  className={`flex-1 rounded-full text-xs transition-all duration-300 ${
                    loginType === "memberid"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-white/30"
                  }`}
                  onClick={() => setLoginType("memberid")}
                >
                  <Hash className="h-3 w-3 mr-1" />
                  Member ID
                </Button>
              </div>

              {/* Login form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`
                  space-y-4 transition-all duration-1000 delay-900 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                {/* Email/Phone/Member ID input */}
                <div className="space-y-2">
                  <Label htmlFor="login-input" className="text-sm font-medium text-gray-700">
                    {getLabel()}
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {getIcon()}
                    </div>
                    <Input
                      id="login-input"
                      type={getInputType()}
                      placeholder={getPlaceholder()}
                      className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
                        errors.login ? "border-red-400 focus:border-red-400" : ""
                      }`}
                      {...register("login")}
                    />
                  </div>
                  {errors.login && <p className="text-xs text-red-500 mt-1">{errors.login.message}</p>}
                  {loginType === "memberid" && !errors.login && (
                    <p className="text-xs text-gray-500 mt-1">
                      Your member ID is provided during registration (e.g., MEM001)
                    </p>
                  )}
                </div>

                {/* Password input */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className={`pl-10 pr-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
                        errors.password ? "border-red-400 focus:border-red-400" : ""
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

                {/* Forgot password */}
                <div className="text-right">
                  <Button
                    type="button"
                    variant="link"
                    className="text-xs text-blue-600 hover:text-blue-700 p-0 h-auto font-medium"
                  >
                    Forgot Password?
                  </Button>
                </div>

                {/* Login button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || isLoggingIn}
                  className="
                    w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-500 
                    hover:from-blue-700 hover:to-cyan-600 text-white font-medium 
                    rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                    transform hover:scale-105 active:scale-95 mt-6
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                  "
                >
                  {(isSubmitting || isLoggingIn) ? "Signing in..." : "Login"}
                </Button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/30"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-gradient-to-b from-blue-50 to-blue-200 px-2 text-gray-500">or</span>
                  </div>
                </div>

                {/* Sign up link */}
                <div className="text-center">
                  <span className="text-sm text-gray-600">{"Don't have an account? "}</span>
                  <Link href="/signup">
                  <Button
                      type="button"
                      variant="link"
                      className="text-sm text-blue-600 hover:text-blue-700 p-0 h-auto font-medium"
                    >
                      Sign up
                    </Button>
                  </Link>
                </div>
              </form>
              </>
              }
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>

        {/* Floating elements around the phone */}
        <div
          className={`
            absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 
            rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 delay-1000
            ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-4 rotate-45"}
          `}
        >
          <Lock className="w-6 h-6 text-white" />
        </div>

        <div
          className={`
            absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 
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


export default LoginPage