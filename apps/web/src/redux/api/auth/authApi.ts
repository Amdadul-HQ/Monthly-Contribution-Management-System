import { baseApi } from "../../api/baseApi";

export interface LoginRequest {
  loginType: "email" | "phone" | "memberid";
  login: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  fatherName?: string;
  motherName?: string;
  address?: string;
  occupation?: string;
  nid?: string;
  registrationFee?: number;
  referencePerson?: string;
  referencePhone?: string;
  joiningDate?: string;
  monthlyDeposit?: number;
  paymentMethod?: string;
  senderPhoneNumber?: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    memberId?: number;
    [key: string]: any;
  };
  token: string;
  refreshToken: string;
}

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // User Registration
    register: builder.mutation<{ success: boolean; message: string; data: AuthResponse }, RegisterRequest>({
      query: (userInfo) => ({
        url: "/auth/registration",
        method: "POST",
        body: userInfo,
      }),
    }),

    // User Login
    login: builder.mutation<{ success: boolean; message: string; data: AuthResponse }, LoginRequest>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    // Get Current User Information
    getCurrentUser: builder.query<{ success: boolean; message: string; data: any }, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    // Forgot Password - Request Reset Code
    forgotPassword: builder.mutation<{ success: boolean; message: string }, ForgotPasswordRequest>({
      query: ({ email }) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),

    // Reset Password with Token
    resetPassword: builder.mutation<{ success: boolean; message: string }, ResetPasswordRequest>({
      query: (userInfo) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: userInfo,
      }),
    }),

    // Change Password
    changePassword: builder.mutation<{ success: boolean; message: string }, ChangePasswordRequest>({
      query: (passwordData) => ({
        url: "/auth/change-password",
        method: "POST",
        body: passwordData,
      }),
    }),

    // Refresh Access Token
    refreshToken: builder.mutation<{ success: boolean; message: string; data: { token: string; refreshToken: string } }, RefreshTokenRequest>({
      query: ({ refreshToken }) => ({
        url: "/auth/refresh-token",
        method: "POST",
        body: { refreshToken },
      }),
    }),

    // Logout - Revoke Refresh Token
    logout: builder.mutation<{ success: boolean; message: string }, RefreshTokenRequest>({
      query: ({ refreshToken }) => ({
        url: "/auth/logout",
        method: "POST",
        body: { refreshToken },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
} = authApi;
