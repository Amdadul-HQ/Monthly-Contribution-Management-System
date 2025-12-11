import { baseApi } from "../baseApi";

// ============================================
// TypeScript Interfaces
// ============================================

// Payment Method Specific Interfaces
export interface HandToHandPaymentDto {
    receiverName: string;
    location: string;
    handoverDate: string;
    handoverTime: string;
}

export interface MobilePaymentDto {
    provider: string;
    phoneNumber: string;
    transactionId: string;
    transactionDate?: string;
}

export interface BankTransferDto {
    bankName?: string;
    accountNumber: string;
    accountHolderName: string;
    transactionRef?: string;
}

// Main Deposit DTOs
export interface CreateDepositDto {
    depositMonth: string;
    depositAmount: number;
    paymentMethod: "HAND_TO_HAND" | "BKASH" | "NAGAD" | "ROCKET" | "BANK_TRANSFER";
    referencePerson: string;
    proofImage?: string;
    notes?: string;
    handToHandDetails?: HandToHandPaymentDto;
    mobilePaymentDetails?: MobilePaymentDto;
    bankTransferDetails?: BankTransferDto;
    paymentDate?: string;
}

export interface UpdateDepositDto {
    depositAmount?: number;
    paymentMethod?: "HAND_TO_HAND" | "BKASH" | "NAGAD" | "ROCKET" | "BANK_TRANSFER";
    referencePerson?: string;
    proofImage?: string;
    notes?: string;
    handToHandDetails?: HandToHandPaymentDto;
    mobilePaymentDetails?: MobilePaymentDto;
    bankTransferDetails?: BankTransferDto;
    paymentDate?: string;
}

export interface QueryDepositDto {
    page?: number;
    limit?: number;
    status?: "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";
    startDate?: string;
    endDate?: string;
    paymentMethod?: "HAND_TO_HAND" | "BKASH" | "NAGAD" | "ROCKET" | "BANK_TRANSFER";
}

// Response Interfaces
export interface DepositDto {
    id: string;
    memberId: number;
    depositMonth: string | Date;
    depositAmount: number | string;
    penalty: number | string;
    totalAmount: number | string;
    paymentDate: string | Date;
    paymentMethod: string;
    referencePerson: string;
    status: string;
    proofImage?: string;
    notes?: string;
    approvedBy?: number;
    approvedAt?: string | Date;
    rejectionReason?: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    user?: {
        id: string;
        name: string;
        email: string;
        memberId: number;
    };
    handToHandDetails?: HandToHandPaymentDto & { id: string; depositId: string };
    mobilePaymentDetails?: MobilePaymentDto & { id: string; depositId: string };
    bankTransferDetails?: BankTransferDto & { id: string; depositId: string };
}

export interface DepositResponse {
    success: boolean;
    message: string;
    data: DepositDto;
}

export interface DepositsResponse {
    success: boolean;
    message: string;
    data: {
        deposits: DepositDto[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
}

export interface DeleteDepositResponse {
    success: boolean;
    message: string;
    data: null;
}

// ============================================
// API Endpoints
// ============================================

const depositApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Create new deposit
        createDeposit: builder.mutation<DepositResponse, CreateDepositDto>({
            query: (data) => ({
                url: "/deposits",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["deposits"],
        }),

        // Get all deposits for authenticated user
        getAllDeposits: builder.query<DepositsResponse, QueryDepositDto>({
            query: (params) => ({
                url: "/deposits",
                method: "GET",
                params,
            }),
            providesTags: ["deposits"],
        }),

        // Get single deposit by ID
        getDepositById: builder.query<DepositResponse, string>({
            query: (id) => ({
                url: `/deposits/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "deposits", id }],
        }),

        // Update deposit (only PENDING deposits)
        updateDeposit: builder.mutation<
            DepositResponse,
            { id: string; data: UpdateDepositDto }
        >({
            query: ({ id, data }) => ({
                url: `/deposits/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["deposits"],
        }),

        // Delete deposit (only PENDING deposits)
        deleteDeposit: builder.mutation<DeleteDepositResponse, string>({
            query: (id) => ({
                url: `/deposits/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["deposits"],
        }),
    }),
});

export const {
    useCreateDepositMutation,
    useGetAllDepositsQuery,
    useGetDepositByIdQuery,
    useUpdateDepositMutation,
    useDeleteDepositMutation,
} = depositApi;
