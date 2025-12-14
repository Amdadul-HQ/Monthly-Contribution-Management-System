"use client"

import { useForm, Controller } from "react-hook-form"
import { useState, useEffect } from "react"
import { format } from "date-fns"
import {
  CreditCard,
  Smartphone,
  Banknote,
  Upload,
  User,
  Camera,
  CheckCircle,
  AlertCircle,
  X,
  CalendarIcon,
  AlertTriangle,
  Info,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Label } from "@workspace/ui/components/label"
import { Input } from "@workspace/ui/components/input"
import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Calendar } from "@workspace/ui/components/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Alert, AlertDescription } from "@workspace/ui/components/alert"
import { toast } from "sonner"
import { useCreateDepositMutation } from "@/redux/api/deposit/depositApi"
import { useUploadDocumentMutation, useDeleteDocumentMutation } from "@/redux/api/document/documentApi"

type PaymentMethod = "hand-to-hand" | "bkash" | "nagad" | "rocket" | "bank"
type ReferencePersons = "Afran Sojib" | "Xhamix Shuvo"

const paymentMethods = [
  { value: "hand-to-hand", label: "Hand to Hand", icon: Banknote, color: "text-green-600" },
  { value: "bkash", label: "bKash", icon: Smartphone, color: "text-pink-600" },
  { value: "nagad", label: "Nagad", icon: Smartphone, color: "text-orange-600" },
  { value: "rocket", label: "Rocket", icon: Smartphone, color: "text-purple-600" },
  { value: "bank", label: "Bank Transfer", icon: CreditCard, color: "text-blue-600" },
]

const referencePersons: ReferencePersons[] = ["Afran Sojib", "Xhamix Shuvo"]

interface FormData {
  amount: string
  month: Date | undefined
  paymentMethod: PaymentMethod | ""
  referencePerson: ReferencePersons | ""
  // Hand to hand fields
  receiverName: string
  location: string
  date: string
  time: string
  // Mobile banking fields
  phoneNumber: string
  transactionId: string
  // Bank transfer fields
  bankHolderName: string
  accountNumber: string
  // Common fields
  notes: string
  proofImage: string
  proofImagePublicId: string
}

export function DepositForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  // Redux mutations
  const [createDeposit, { isLoading: isCreatingDeposit }] = useCreateDepositMutation()
  const [uploadDocument, { isLoading: isUploadingDocument }] = useUploadDocumentMutation()
  const [deleteDocument, { isLoading: isDeletingDocument }] = useDeleteDocumentMutation()

  // Local state for upload status
  const [isUploading, setIsUploading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      amount: "",
      month: undefined,
      paymentMethod: "",
      referencePerson: "",
      receiverName: "",
      location: "",
      date: "",
      time: "",
      phoneNumber: "",
      transactionId: "",
      bankHolderName: "",
      accountNumber: "",
      notes: "",
      proofImage: "",
      proofImagePublicId: "",
    },
  })

  const watchedPaymentMethod = watch("paymentMethod")
  const watchedProofImage = watch("proofImage")
  const watchedAmount = watch("amount")

  // Calculate penalty
  const calculatePenalty = (amount: string) => {
    if (!amount) return 0
    const numAmount = Number.parseFloat(amount)
    if (isNaN(numAmount)) return 0

    // Penalty: 30 BDT per 1000 BDT
    return Math.floor(numAmount / 1000) * 30
  }

  // Check if current date is after 15th
  const isAfter15th = () => {
    const today = new Date()
    return today.getDate() > 15
  }

  // Handle image selection and instant upload
  const handleImageSelection = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Show local preview immediately
    const previewUrl = URL.createObjectURL(file)
    setImagePreview(previewUrl)
    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("folder", "deposit-proofs")

      const uploadResult = await uploadDocument(formData).unwrap()

      console.log(uploadResult)

      if (uploadResult.success && uploadResult.data) {
        setValue("proofImage", uploadResult.data.secureUrl, { shouldValidate: true, shouldDirty: true })
        setValue("proofImagePublicId", uploadResult.data.publicId)
        toast.success("Image uploaded successfully")
      }
    } catch (error) {
      console.error("Upload failed:", error)
      toast.error("Failed to upload image")
      setImagePreview(null)
      // Reset local preview if upload fails
    } finally {
      setIsUploading(false)
      // Clear input value so same file can be selected again if needed
      e.target.value = ''
    }
  }

  const removeImage = async () => {
    const publicId = watch("proofImagePublicId")

    if (publicId) {
      try {
        await deleteDocument(publicId).unwrap()
        toast.success("Image removed successfully")
      } catch (error) {
        console.error("Delete failed:", error)
        toast.error("Failed to delete image from server")
        // We still remove it locally even if server delete fails
      }
    }

    setValue("proofImage", "", { shouldValidate: true, shouldDirty: true })
    setValue("proofImagePublicId", "")
    setImagePreview(null)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (imagePreview && !imagePreview.startsWith('http')) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      if (!data.proofImage) {
        toast.error("Please upload a payment proof image")
        return
      }

      // Step 2: Map payment method to backend enum
      const paymentMethodMap: Record<PaymentMethod, string> = {
        "hand-to-hand": "HAND_TO_HAND",
        "bkash": "BKASH",
        "nagad": "NAGAD",
        "rocket": "ROCKET",
        "bank": "BANK_TRANSFER",
      }

      // Step 3: Prepare deposit data
      const depositData: any = {
        depositMonth: data.month?.toISOString(),
        depositAmount: Number.parseFloat(data.amount),
        paymentMethod: paymentMethodMap[data.paymentMethod as PaymentMethod],
        referencePerson: data.referencePerson,
        proofImage: data.proofImage, // Use the uploaded URL directly
        notes: data.notes || undefined,
      }

      // Step 4: Add payment method specific details
      if (data.paymentMethod === "hand-to-hand") {
        depositData.handToHandDetails = {
          receiverName: data.receiverName,
          location: data.location,
          handoverDate: data.date,
          handoverTime: data.time,
        }
      } else if (["bkash", "nagad", "rocket"].includes(data.paymentMethod)) {
        depositData.mobilePaymentDetails = {
          provider: paymentMethodMap[data.paymentMethod as PaymentMethod],
          phoneNumber: data.phoneNumber,
          transactionId: data.transactionId,
        }
      } else if (data.paymentMethod === "bank") {
        depositData.bankTransferDetails = {
          accountNumber: data.accountNumber,
          accountHolderName: data.bankHolderName,
        }
      }

      // Step 5: Create deposit
      const result = await createDeposit(depositData).unwrap()

      toast.success(result.message || "Deposit submitted successfully!")
      setSubmitStatus("success")

      // Reset form after successful submission
      setTimeout(() => {
        reset()
        setImagePreview(null)
        setSubmitStatus("idle")
      }, 3000)
    } catch (error: any) {
      setSubmitStatus("error")
      toast.error(error?.data?.message || "Failed to submit deposit. Please try again.")
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getPaymentMethodIcon = (method: PaymentMethod) => {
    const methodConfig = paymentMethods.find((m) => m.value === method)
    if (!methodConfig) return null
    const Icon = methodConfig.icon
    return <Icon className={`h-4 w-4 ${methodConfig.color}`} />
  }

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900">
          <CreditCard className="h-5 w-5 text-blue-600" />
          Deposit Money
        </CardTitle>
        <CardDescription className="text-gray-700">Submit your monthly deposit with payment details</CardDescription>
      </CardHeader>
      <CardContent>

        {/* Penalty Disclaimer */}
        {
          isAfter15th() && <Alert className="mb-6 border-orange-200 bg-orange-50/50">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <div className="space-y-2">
                <p className="font-medium">⚠️ Late Payment Penalty Notice</p>
                <p className="text-sm">
                  Deposits made after the 15th of each month will incur a penalty of{" "}
                  <span className="font-semibold">৳30 for every ৳1,000</span> deposited.
                </p>
                <p className="text-xs text-orange-700">
                  Example: ৳5,000 deposit after 15th = ৳150 penalty | ৳10,000 deposit after 15th = ৳300 penalty
                </p>
              </div>
            </AlertDescription>
          </Alert>
        }


        {/* Current Date Warning */}
        {isAfter15th() && (
          <Alert className="mb-6 border-red-200 bg-red-50/50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <div className="space-y-1">
                <p className="font-medium">🚨 Late Payment Warning</p>
                <p className="text-sm">Today is after the 15th. Your deposit will incur a late payment penalty.</p>
              </div>
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Amount and Month */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
                Deposit Amount (BDT) *
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                {...register("amount", {
                  required: "Amount is required",
                  min: { value: 1, message: "Amount must be greater than 0" },
                })}
                className={`bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.amount ? "border-red-400" : ""
                  }`}
              />
              {errors.amount && <p className="text-xs text-red-600">{errors.amount.message}</p>}
              {watchedAmount && (
                <div className="space-y-1">
                  <p className="text-xs text-blue-600">
                    Amount: ৳{new Intl.NumberFormat("en-BD").format(Number.parseFloat(watchedAmount))}
                  </p>
                  {isAfter15th() && watchedAmount && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                      <p className="text-xs text-red-700 font-medium">
                        ⚠️ Late Payment Penalty: {formatCurrency(calculatePenalty(watchedAmount))}
                      </p>
                      <p className="text-xs text-red-600">
                        Total with penalty:{" "}
                        {formatCurrency(Number.parseFloat(watchedAmount) + calculatePenalty(watchedAmount))}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Select Month *</Label>
              <Controller
                name="month"
                control={control}
                rules={{ required: "Month is required" }}
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white/70 border-white/30 hover:bg-white hover:border-blue-400 rounded-xl transition-all duration-300",
                          !field.value && "text-muted-foreground",
                          errors.month && "border-red-400",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? format(field.value, "MMMM yyyy") : "Pick a month"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date)
                        }}
                        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                        initialFocus
                        defaultMonth={field.value}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.month && <p className="text-xs text-red-600">{errors.month.message}</p>}
              {watch("month") && (
                <p className="text-xs text-blue-600">Selected: {format(watch("month")!, "MMMM yyyy")}</p>
              )}
            </div>
          </div>

          {/* Penalty Information Card */}
          {watchedAmount && Number.parseFloat(watchedAmount) > 0 && (
            <Alert className="border-blue-200 bg-blue-50/50">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <div className="space-y-2">
                  <p className="font-medium">💡 Payment Information</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>Deposit Amount: {formatCurrency(Number.parseFloat(watchedAmount))}</p>
                      <p>Penalty Rate: ৳30 per ৳1,000</p>
                    </div>
                    <div>
                      <p>
                        {isAfter15th() ? (
                          <span className="text-red-600 font-medium">
                            Late Penalty: {formatCurrency(calculatePenalty(watchedAmount))}
                          </span>
                        ) : (
                          <span className="text-green-600 font-medium">No Penalty (On Time)</span>
                        )}
                      </p>
                      <p className="font-medium">
                        Total:{" "}
                        {formatCurrency(
                          Number.parseFloat(watchedAmount) + (isAfter15th() ? calculatePenalty(watchedAmount) : 0),
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Payment Method */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700">Payment Method *</Label>
            <Controller
              name="paymentMethod"
              control={control}
              rules={{ required: "Payment method is required" }}
              render={({ field }) => (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <button
                        key={method.value}
                        type="button"
                        onClick={() => field.onChange(method.value)}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 ${field.value === method.value
                          ? "border-blue-400 bg-blue-50/50"
                          : "border-white/30 bg-white/50 hover:border-blue-200"
                          }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Icon className={`h-6 w-6 ${method.color}`} />
                          <span className="text-sm font-medium text-gray-900">{method.label}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}
            />
            {errors.paymentMethod && <p className="text-xs text-red-600">{errors.paymentMethod.message}</p>}
          </div>

          {/* Reference Person */}
          <div className="space-y-2">
            <Label htmlFor="referencePerson" className="text-sm font-medium text-gray-700">
              Reference Person *
            </Label>
            <Controller
              name="referencePerson"
              control={control}
              rules={{ required: "Reference person is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={`bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 rounded-xl ${errors.referencePerson ? "border-red-400" : ""
                      }`}
                  >
                    <User className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Select reference person" />
                  </SelectTrigger>
                  <SelectContent>
                    {referencePersons.map((person) => (
                      <SelectItem key={person} value={person}>
                        {person}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.referencePerson && <p className="text-xs text-red-600">{errors.referencePerson.message}</p>}
          </div>

          {/* Conditional Fields Based on Payment Method */}
          {watchedPaymentMethod === "hand-to-hand" && (
            <div className="space-y-4 p-4 bg-green-50/50 rounded-xl border border-green-100/50">
              <h3 className="font-medium text-gray-900 flex items-center gap-2">
                <Banknote className="h-4 w-4 text-green-600" />
                Hand to Hand Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="receiverName" className="text-sm font-medium text-gray-700">
                    Receiver Name *
                  </Label>
                  <Input
                    id="receiverName"
                    placeholder="Who received the money?"
                    {...register("receiverName", {
                      required: watchedPaymentMethod === "hand-to-hand" ? "Receiver name is required" : false,
                    })}
                    className={`bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.receiverName ? "border-red-400" : ""
                      }`}
                  />
                  {errors.receiverName && <p className="text-xs text-red-600">{errors.receiverName.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                    Location *
                  </Label>
                  <Input
                    id="location"
                    placeholder="Where was the money given?"
                    {...register("location", {
                      required: watchedPaymentMethod === "hand-to-hand" ? "Location is required" : false,
                    })}
                    className={`bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.location ? "border-red-400" : ""
                      }`}
                  />
                  {errors.location && <p className="text-xs text-red-600">{errors.location.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                    Date *
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    {...register("date", {
                      required: watchedPaymentMethod === "hand-to-hand" ? "Date is required" : false,
                    })}
                    className={`bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.date ? "border-red-400" : ""
                      }`}
                  />
                  {errors.date && <p className="text-xs text-red-600">{errors.date.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-sm font-medium text-gray-700">
                    Time *
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    {...register("time", {
                      required: watchedPaymentMethod === "hand-to-hand" ? "Time is required" : false,
                    })}
                    className={`bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.time ? "border-red-400" : ""
                      }`}
                  />
                  {errors.time && <p className="text-xs text-red-600">{errors.time.message}</p>}
                </div>
              </div>
            </div>
          )}

          {["bkash", "nagad", "rocket"].includes(watchedPaymentMethod) && (
            <div className="space-y-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
              <h3 className="font-medium text-gray-900 flex items-center gap-2">
                {getPaymentMethodIcon(watchedPaymentMethod as PaymentMethod)}
                {watchedPaymentMethod?.charAt(0).toUpperCase() + watchedPaymentMethod?.slice(1)} Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    placeholder="01XXXXXXXXX"
                    {...register("phoneNumber", {
                      required: ["bkash", "nagad", "rocket"].includes(watchedPaymentMethod)
                        ? "Phone number is required"
                        : false,
                    })}
                    className={`bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.phoneNumber ? "border-red-400" : ""
                      }`}
                  />
                  {errors.phoneNumber && <p className="text-xs text-red-600">{errors.phoneNumber.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transactionId" className="text-sm font-medium text-gray-700">
                    Transaction ID *
                  </Label>
                  <Input
                    id="transactionId"
                    placeholder="Enter transaction ID"
                    {...register("transactionId", {
                      required: ["bkash", "nagad", "rocket"].includes(watchedPaymentMethod)
                        ? "Transaction ID is required"
                        : false,
                    })}
                    className={`bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.transactionId ? "border-red-400" : ""
                      }`}
                  />
                  {errors.transactionId && <p className="text-xs text-red-600">{errors.transactionId.message}</p>}
                </div>
              </div>
            </div>
          )}

          {watchedPaymentMethod === "bank" && (
            <div className="space-y-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
              <h3 className="font-medium text-gray-900 flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-blue-600" />
                Bank Transfer Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bankHolderName" className="text-sm font-medium text-gray-700">
                    Bank Holder Name *
                  </Label>
                  <Input
                    id="bankHolderName"
                    placeholder="Account holder's full name"
                    {...register("bankHolderName", {
                      required: watchedPaymentMethod === "bank" ? "Bank holder name is required" : false,
                    })}
                    className={`bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.bankHolderName ? "border-red-400" : ""
                      }`}
                  />
                  {errors.bankHolderName && <p className="text-xs text-red-600">{errors.bankHolderName.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountNumber" className="text-sm font-medium text-gray-700">
                    Account Number *
                  </Label>
                  <Input
                    id="accountNumber"
                    placeholder="Bank account number"
                    {...register("accountNumber", {
                      required: watchedPaymentMethod === "bank" ? "Account number is required" : false,
                    })}
                    className={`bg-white/70 border-white/30 focus:bg-white focus:border-blue-400 transition-all duration-300 rounded-xl ${errors.accountNumber ? "border-red-400" : ""
                      }`}
                  />
                  {errors.accountNumber && <p className="text-xs text-red-600">{errors.accountNumber.message}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Proof Image Upload with Overlay Preview */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700">Payment Proof *</Label>

            <div className="relative">
              {/* Hidden input for validation */}
              <input
                type="hidden"
                {...register("proofImage", { required: "Proof image is required" })}
              />

              <div
                className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 relative overflow-hidden ${errors.proofImage
                  ? "border-red-400 bg-red-50/50"
                  : watchedProofImage
                    ? "border-green-400 bg-green-50/50"
                    : "border-blue-300 bg-blue-50/50 hover:border-blue-400"
                  }`}
              >
                {/* Image Preview Overlay */}
                {imagePreview && (
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Payment proof preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-white text-center">
                        {isUploading ? (
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin mb-2"></div>
                            <p className="font-medium">Uploading...</p>
                          </div>
                        ) : (
                          <>
                            <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                            <p className="font-medium">Image Uploaded</p>
                            <p className="text-sm opacity-90">Ready to submit</p>
                          </>
                        )}
                      </div>
                    </div>
                    {!isUploading && (
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 h-8 w-8 p-0 rounded-full"
                        onClick={removeImage}
                        disabled={isDeletingDocument}
                      >
                        {isDeletingDocument ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <X className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelection}
                  className="hidden"
                  id="proofImageInput"
                  disabled={isUploading}
                />
                <label htmlFor="proofImageInput" className={`cursor-pointer block ${imagePreview ? 'pointer-events-none opacity-0' : ''}`}>
                  <div className="flex flex-col items-center gap-3">
                    <>
                      <Camera className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Upload Payment Proof</p>
                        <p className="text-sm text-gray-600">Click to select image or take photo</p>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                      </div>
                    </>
                  </div>
                </label>
              </div>
            </div>
            {errors.proofImage && <p className="text-xs text-red-600">{errors.proofImage.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Submit Deposit
                </div>
              )}
            </Button>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">Deposit Submitted Successfully!</p>
                <p className="text-sm text-green-600">Your deposit will be processed within 24 hours.</p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-medium text-red-800">Submission Failed</p>
                <p className="text-sm text-red-600">Please try again or contact support.</p>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}