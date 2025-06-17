"use client"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { ArrowLeft, Check, DollarSign, Eye, EyeOff, Lock, Mail, MapPin, Phone, User, Users } from "lucide-react"
import { useEffect, useState } from "react"

interface FormData {
  name: string
  fatherName: string
  motherName: string
  address: string
  amount: string
  phoneNumber: string
  email: string
  monthlyDeposit: string
  password: string
  confirmPassword: string
}

interface FormErrors {
  [key: string]: string
}

export default function SignupPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    fatherName: "",
    motherName: "",
    address: "",
    amount: "",
    phoneNumber: "",
    email: "",
    monthlyDeposit: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required"
      if (!formData.fatherName.trim()) newErrors.fatherName = "Father's name is required"
      if (!formData.motherName.trim()) newErrors.motherName = "Mother's name is required"
      if (!formData.address.trim()) newErrors.address = "Address is required"
    }

    if (step === 2) {
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required"
      else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Invalid phone number"

      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address"

      if (!formData.amount.trim()) newErrors.amount = "Initial amount is required"
      else if (isNaN(Number(formData.amount)) || Number(formData.amount) < 0) newErrors.amount = "Invalid amount"

      if (!formData.monthlyDeposit.trim()) newErrors.monthlyDeposit = "Monthly deposit is required"
      else if (isNaN(Number(formData.monthlyDeposit)) || Number(formData.monthlyDeposit) < 0)
        newErrors.monthlyDeposit = "Invalid amount"
    }

    if (step === 3) {
      if (!formData.password.trim()) newErrors.password = "Password is required"
      else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters"

      if (!formData.confirmPassword.trim()) newErrors.confirmPassword = "Please confirm password"
      else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = async () => {
    if (!validateStep(3)) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false)
      setCurrentStep(1)
      setFormData({
        name: "",
        fatherName: "",
        motherName: "",
        address: "",
        amount: "",
        phoneNumber: "",
        email: "",
        monthlyDeposit: "",
        password: "",
        confirmPassword: "",
      })
    }, 3000)
  }

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
        <p className="text-gray-600 text-sm">Tell us about yourself</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter your full name"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.name ? "border-red-400" : ""}`}
          />
        </div>
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="fatherName" className="text-sm font-medium text-gray-700">
          Father's Name
        </Label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="fatherName"
            value={formData.fatherName}
            onChange={(e) => handleInputChange("fatherName", e.target.value)}
            placeholder="Enter father's name"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.fatherName ? "border-red-400" : ""}`}
          />
        </div>
        {errors.fatherName && <p className="text-red-500 text-xs">{errors.fatherName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="motherName" className="text-sm font-medium text-gray-700">
          Mother's Name
        </Label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="motherName"
            value={formData.motherName}
            onChange={(e) => handleInputChange("motherName", e.target.value)}
            placeholder="Enter mother's name"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.motherName ? "border-red-400" : ""}`}
          />
        </div>
        {errors.motherName && <p className="text-red-500 text-xs">{errors.motherName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Address
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Textarea
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            placeholder="Enter your complete address"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl resize-none h-20 ${errors.address ? "border-red-400" : ""}`}
          />
        </div>
        {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Contact & Financial</h2>
        <p className="text-gray-600 text-sm">Your contact and financial details</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
          Phone Number
        </Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            placeholder="Enter your phone number"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.phoneNumber ? "border-red-400" : ""}`}
          />
        </div>
        {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.email ? "border-red-400" : ""}`}
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
          Initial Amount ($)
        </Label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="amount"
            type="number"
            value={formData.amount}
            onChange={(e) => handleInputChange("amount", e.target.value)}
            placeholder="Enter initial deposit amount"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.amount ? "border-red-400" : ""}`}
          />
        </div>
        {errors.amount && <p className="text-red-500 text-xs">{errors.amount}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="monthlyDeposit" className="text-sm font-medium text-gray-700">
          Monthly Deposit ($)
        </Label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="monthlyDeposit"
            type="number"
            value={formData.monthlyDeposit}
            onChange={(e) => handleInputChange("monthlyDeposit", e.target.value)}
            placeholder="Enter monthly deposit amount"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.monthlyDeposit ? "border-red-400" : ""}`}
          />
        </div>
        {errors.monthlyDeposit && <p className="text-red-500 text-xs">{errors.monthlyDeposit}</p>}
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Security</h2>
        <p className="text-gray-600 text-sm">Create a secure password</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Create a strong password"
            className={`pl-10 pr-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.password ? "border-red-400" : ""}`}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
          </Button>
        </div>
        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
          Confirm Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            placeholder="Confirm your password"
            className={`pl-10 pr-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.confirmPassword ? "border-red-400" : ""}`}
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
        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
      </div>

      <div className="bg-blue-50/50 rounded-xl p-3 mt-4">
        <p className="text-xs text-gray-600">
          Password should be at least 8 characters long and contain a mix of letters, numbers, and special characters.
        </p>
      </div>
    </div>
  )

  const renderSuccess = () => (
    <div className="text-center space-y-6 py-8">
      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
        <Check className="h-8 w-8 text-white" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Created!</h2>
        <p className="text-gray-600">Welcome to MoneyWise! Your account has been successfully created.</p>
      </div>
      <div className="bg-green-50/50 rounded-xl p-4">
        <p className="text-sm text-green-700">
          You can now start managing your finances with our smart banking solutions.
        </p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-500 flex items-center justify-center p-4 overflow-hidden relative">
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
          <div className="bg-gradient-to-b from-blue-50 to-blue-200 rounded-[2.5rem] p-6 relative overflow-hidden min-h-[700px]">
            {/* Notch */}
            {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div> */}

            {/* Content */}
            <div className="pt-12 pb-8 h-full flex flex-col">
              {/* Header */}
              <div
                className={`
                  flex items-center justify-between mb-6 transition-all duration-1000 delay-300 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-white/20 rounded-full transition-all duration-300"
                  onClick={currentStep > 1 ? handleBack : undefined}
                >
                  <ArrowLeft className="h-5 w-5 text-gray-700" />
                </Button>
                <h1 className="text-xl font-semibold text-gray-900">Sign Up</h1>
                <div className="w-9"></div>
              </div>

              {/* Progress indicator */}
              {!isSuccess && (
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          step <= currentStep ? "bg-blue-500" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Form content */}
              <div className="flex-1 overflow-y-auto">
                <div
                  className={`
                    transition-all duration-1000 delay-500 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                  `}
                >
                  {isSuccess ? (
                    renderSuccess()
                  ) : (
                    <>
                      {currentStep === 1 && renderStep1()}
                      {currentStep === 2 && renderStep2()}
                      {currentStep === 3 && renderStep3()}
                    </>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              {!isSuccess && (
                <div className="mt-6 space-y-3">
                  {currentStep < 3 ? (
                    <Button
                      onClick={handleNext}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Creating Account..." : "Create Account"}
                    </Button>
                  )}

                  <div className="text-center">
                    <span className="text-sm text-gray-600">Already have an account? </span>
                    <Button variant="link" className="text-sm text-blue-600 hover:text-blue-700 p-0 h-auto font-medium">
                      Login
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>

        {/* Floating elements around the phone */}
        <div
          className={`
            absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 
            rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 delay-1000
            ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-4 rotate-45"}
          `}
        >
          <User className="w-6 h-6 text-white" />
        </div>

        <div
          className={`
            absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 
            rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 delay-1200
            ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-4 -rotate-45"}
          `}
        >
          <DollarSign className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600 to-transparent"></div>
    </div>
  )
}
