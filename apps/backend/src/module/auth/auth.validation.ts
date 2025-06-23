import { z } from "zod";

const signupMemberSchema = z.object({
  body: z.object({
    // credentials
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z
      .number()
      .min(10, "Phone must be at least 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),

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


export const AuthValidationSchema = {
    signupMemberSchema
}