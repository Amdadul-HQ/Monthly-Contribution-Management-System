import { z } from "zod";

const signupMemberSchema = z.object({
  body: z.object({
    // credentials
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z
      .number()
      .min(10, "Phone must be at least 10 digits"),
    password: z.string().min(8, "Password must be at least 8 characters"),

    // personalInfo
    fatherName: z.string().min(1, "Father's name is required"),
    motherName: z.string().min(1, "Mother's name is required"),
    address: z.string().min(1, "Address is required"),
    occupation: z.string().min(1, "Occupation is required"),
    nid: z
      .number({ invalid_type_error: "NID must be a number" })
      .int("NID must be an integer"),
    joiningDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Joining date must be a valid date",
    }),
    referenceName: z.string().min(1, "Reference name is required"),
    senderPhoneNumber: z
      .number()
      .min(10, "Sender phone number is required"),

    // personalInfoStates
    monthlyDeposit: z
      .number({ invalid_type_error: "Monthly deposit must be a number" })
      .int("Monthly deposit must be an integer"),
    registrationFee: z
      .number({ invalid_type_error: "Registration fee must be a number" })
      .int("Registration fee must be an integer"),
    paymentMethod: z.string().min(1, "Payment method is required"),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address").optional(),
    phone: z
      .number()
      .min(10, "Phone must be at least 10 digits")
      .optional(),
    memberId: z.number().min(1, "Member Id is Required").optional(),
    password: z.string().min(8, "Password must be at least 8 characters"),
  }).refine(data => {
    // At least one of email, phone, or memberId must be provided
    return !!data.email || !!data.phone || !!data.memberId;
  }, {
    message: "At least one of email, phone, or memberId is required",
    path: ["email", "phone", "memberId"], // Specify the path for the error
  })
});


export const AuthValidationSchema = {
    signupMemberSchema,
    loginSchema
}