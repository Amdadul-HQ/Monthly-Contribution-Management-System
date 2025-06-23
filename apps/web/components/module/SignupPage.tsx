"use client"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import {
  ArrowLeft,
  Check,
  DollarSign,
  Eye,
  EyeOff,
  Lock,
  Mail,
  MapPin,
  Phone,
  User,
  Users,
  Briefcase,
  UserCheck,
  CreditCard,
  Hash,
  CalendarIcon,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Calendar } from "@workspace/ui/components/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover"
import { format } from "date-fns"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpMember } from "@/service/authService"

const signupSchema = z
  .object({
    // Step 1: Personal Information
    name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
    fatherName: z.string().min(1, "Father's name is required"),
    motherName: z.string().min(1, "Mother's name is required"),
    occupation: z.string().min(1, "Occupation is required"),

    // Step 2: Address & Contact
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    nid: z
      .string()
      .min(1, "NID number is required")
      .regex(/^\d{10,17}$/, "NID number must be 10-17 digits"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^\+?[\d\s-()]{10,}$/, "Invalid phone number format"),
    address: z.string().min(1, "Address is required"),

    // Step 3: Financial
    registrationFee: z
      .string()
      .min(1, "Registration fee is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Invalid amount"),
    monthlyDeposit: z
      .string()
      .min(1, "Monthly deposit is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Invalid amount"),
    joiningDate: z.date({
      required_error: "Joining date is required",
      invalid_type_error: "Please select a valid date",
    }),

    // Step 4: Reference & Payment
    referenceName: z.string().min(1, "Reference name is required"),
    paymentMethod: z.string().min(1, "Payment method is required"),
    senderPhoneNumber: z
      .string()
      .min(1, "Sender phone number is required")
      .regex(/^\+?[\d\s-()]{10,}$/, "Invalid phone number format"),

    // Step 5: Security
    password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type FormData = z.infer<typeof signupSchema>

export default function SignupPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const getStepFields = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ["name", "fatherName", "motherName", "occupation"]
      case 2:
        return ["email", "nid", "phone", "address"]
      case 3:
        return ["registrationFee", "monthlyDeposit", "joiningDate"]
      case 4:
        return ["referenceName", "paymentMethod", "senderPhoneNumber"]
      case 5:
        return ["password", "confirmPassword"]
      default:
        return []
    }
  }

  const validateStep = async (step: number): Promise<boolean> => {
    const fields = getStepFields(step)
    const result = await trigger(fields)
    return result
  }

  const handleNext = async () => {
    const isValid = await validateStep(currentStep)
    if (isValid) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      console.log(data)
        // Convert fields to appropriate types
    const formattedData = {
      ...data,
      registrationFee: parseFloat(data.registrationFee), // Convert to number
      monthlyDeposit: parseFloat(data.monthlyDeposit), // Convert to number
      phone:parseFloat(data.phone),
      senderPhoneNumber:parseFloat(data.senderPhoneNumber),
      nid:parseFloat(data.nid),
      joiningDate: data.joiningDate.toISOString(), // Convert to ISO string if needed
    };
    console.log(formattedData); // Log the formatted data
    // Simulate API call
    const res = await signUpMember(formattedData);

      console.log(res)

      setIsSubmitting(false)
      // setIsSuccess(true)

      // // Reset form after success
      // setTimeout(() => {
      //   setIsSuccess(false)
      //   setCurrentStep(1)
      //   reset()
      // }, 3000)
    } catch (error) {
      setIsSubmitting(false)
      console.error("Submission error:", error)
    }
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
            {...register("name")}
            placeholder="Enter your full name"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.name ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="fatherName" className="text-sm font-medium text-gray-700">
          Father's Name
        </Label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="fatherName"
            {...register("fatherName")}
            placeholder="Enter father's name"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.fatherName ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.fatherName && <p className="text-red-500 text-xs">{errors.fatherName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="motherName" className="text-sm font-medium text-gray-700">
          Mother's Name
        </Label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="motherName"
            {...register("motherName")}
            placeholder="Enter mother's name"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.motherName ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.motherName && <p className="text-red-500 text-xs">{errors.motherName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="occupation" className="text-sm font-medium text-gray-700">
          Occupation
        </Label>
        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="occupation"
            {...register("occupation")}
            placeholder="Enter your occupation"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.occupation ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.occupation && <p className="text-red-500 text-xs">{errors.occupation.message}</p>}
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Address & Contact</h2>
        <p className="text-gray-600 text-sm">Your address and contact information</p>
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
            {...register("email")}
            placeholder="Enter your email"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.email ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="nidNumber" className="text-sm font-medium text-gray-700">
          NID Number
        </Label>
        <div className="relative">
          <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="nid"
            {...register("nid")}
            placeholder="Enter your NID number"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.nid ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.nid && <p className="text-red-500 text-xs">{errors.nid.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
          Personal Phone Number
        </Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="phone"
            type="number"
            {...register("phone")}
            placeholder="Enter your phone number"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.phone ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Address
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Textarea
            id="address"
            {...register("address")}
            placeholder="Enter your complete address"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl resize-none h-20 ${
              errors.address ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Financial</h2>
        <p className="text-gray-600 text-sm">Your financial details</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
          Registration Fee ($)
        </Label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="registrationFee"
            type="number"
            {...register("registrationFee")}
            placeholder="Enter registration fee amount"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.registrationFee ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.registrationFee && <p className="text-red-500 text-xs">{errors.registrationFee.message}</p>}
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
            {...register("monthlyDeposit")}
            placeholder="Enter monthly deposit amount"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.monthlyDeposit ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.monthlyDeposit && <p className="text-red-500 text-xs">{errors.monthlyDeposit.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="joiningDate" className="text-sm font-medium text-gray-700">
          Joining Date
        </Label>
        <Controller
          name="joiningDate"
          control={control}
          render={({ field }) => (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
                    !field.value ? "text-muted-foreground" : ""
                  } ${errors.joiningDate ? "border-red-400" : ""}`}
                >
                  <CalendarIcon className="h-4 w-4 text-gray-400" />
                  {field.value ? format(field.value, "PPP") : <span>Pick your joining date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          )}
        />
        {errors.joiningDate && <p className="text-red-500 text-xs">{errors.joiningDate.message}</p>}
      </div>

      <div className="bg-blue-50/50 rounded-xl p-3 mt-4">
        <p className="text-xs text-gray-600">
          The registration fee is a one-time payment. Monthly deposits will be collected regularly.
        </p>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Reference & Payment</h2>
        <p className="text-gray-600 text-sm">Choose your reference and payment method</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="referenceName" className="text-sm font-medium text-gray-700">
          Reference Name
        </Label>
        <div className="relative">
          <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Controller
            name="referenceName"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
                    errors.referenceName ? "border-red-400" : ""
                  }`}
                >
                  <SelectValue placeholder="Select reference name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arfan-shojib">Arfan Shojib</SelectItem>
                  <SelectItem value="xhamix-shovo">Xhamix Shovo</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        {errors.referenceName && <p className="text-red-500 text-xs">{errors.referenceName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="paymentMethod" className="text-sm font-medium text-gray-700">
          Payment Method
        </Label>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
                    errors.paymentMethod ? "border-red-400" : ""
                  }`}
                >
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bkash">bKash</SelectItem>
                  <SelectItem value="nagad">Nagad</SelectItem>
                  <SelectItem value="rocket">Rocket</SelectItem>
                  <SelectItem value="cash">Cash</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        {errors.paymentMethod && <p className="text-red-500 text-xs">{errors.paymentMethod.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="senderPhoneNumber" className="text-sm font-medium text-gray-700">
          Sender Phone Number
        </Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="senderPhoneNumber"
            type="tel"
            {...register("senderPhoneNumber")}
            placeholder="Phone number used for payment"
            className={`pl-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.senderPhoneNumber ? "border-red-400" : ""
            }`}
          />
        </div>
        {errors.senderPhoneNumber && <p className="text-red-500 text-xs">{errors.senderPhoneNumber.message}</p>}
      </div>

      <div className="bg-blue-50/50 rounded-xl p-3 mt-4">
        <p className="text-xs text-gray-600">
          Please ensure the phone number matches the one used for the selected payment method.
        </p>
      </div>
    </div>
  )

  const renderStep5 = () => (
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
            {...register("password")}
            placeholder="Create a strong password"
            className={`pl-10 pr-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.password ? "border-red-400" : ""
            }`}
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
        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
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
            {...register("confirmPassword")}
            placeholder="Confirm your password"
            className={`pl-10 pr-10 bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${
              errors.confirmPassword ? "border-red-400" : ""
            }`}
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
        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
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
          <div className="bg-gradient-to-b from-blue-50 to-blue-200 rounded-[2.5rem] p-6 relative overflow-hidden min-h-[calc(100vh-100px)]">
            <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col">
              {/* Header */}
              <div
                className={`
                  flex items-center justify-between mb-6 transition-all duration-1000 delay-300 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <Button
                  type="button"
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
                    {[1, 2, 3, 4, 5].map((step) => (
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
                      {currentStep === 4 && renderStep4()}
                      {currentStep === 5 && renderStep5()}
                    </>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              {!isSuccess && (
                <div className="mt-6 space-y-1">
                  {currentStep < 5 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Creating Account..." : "Create Account"}
                    </Button>
                  )}

                  <div className="text-center">
                    <span className="text-sm text-gray-600">Already have an account? </span>
                    <Button
                      type="button"
                      variant="link"
                      className="text-sm text-blue-600 hover:text-blue-700 p-0 h-auto font-medium"
                    >
                      Login
                    </Button>
                  </div>
                </div>
              )}
            </form>

            {/* Decorative elements */}
            <div className="absolute top-20 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>

        {/* Floating elements around the phone */}
        <div
          className={`
            absolute top-3 right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 
            rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 delay-1000
            ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-4 rotate-45"}
          `}
        >
          <User className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600 to-transparent"></div>
    </div>
  )
}
