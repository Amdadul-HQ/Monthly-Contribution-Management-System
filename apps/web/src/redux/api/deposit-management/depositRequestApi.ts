import { baseApi } from "../baseApi";

// ============================================
// TypeScript Interfaces
// ============================================

export interface QueryDepositRequestDto {
    page?: number;
    limit?: number;
    search?: string;
    status?: "PENDING" | "APPROVED" | "REJECTED" | "all";
    month?: string;
    paymentMethod?: "BKASH" | "NAGAD" | "ROCKET" | "BANK_TRANSFER" | "HAND_TO_HAND";
}

export interface DepositRequestDto {
    id: string;
    memberId: number;
    memberName: string;
    memberEmail: string;
    memberPhone: string;
    accountType: string;
    monthOf: string;
    amount: number;
    paymentMethod: string;
    transactionId: string;
    referenceNumber: string;
    bankHolderName?: string;
    accountNumber?: string;
    submissionDate: string;
    proofImage?: string;
    status: string;
    notes?: string;
    penalty: number;
    isPenalized: boolean;
    daysLate: number;
    approvedBy?: string;
    approvedAt?: string;
    rejectedBy?: string;
    rejectedAt?: string;
    rejectionReason?: string;
    handToHandDetails?: any;
    mobilePaymentDetails?: any;
    bankTransferDetails?: any;
}

export interface DepositRequestStatsDto {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
    totalAmount: number;
    totalPenalties: number;
}

export interface DepositRequestsResponse {
    success: boolean;
    message: string;
    data: {
        requests: DepositRequestDto[];
        stats: DepositRequestStatsDto;
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
}

export interface DepositRequestResponse {
    success: boolean;
    message: string;
    data: DepositRequestDto;
}

export interface ApproveDepositRequestDto {
    notes?: string;
}

export interface RejectDepositRequestDto {
    rejectionReason: string;
}

// ============================================
// API Endpoints
// ============================================

const depositRequestApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get all deposit requests with filters
        getAllDepositRequests: builder.query<DepositRequestsResponse, QueryDepositRequestDto>({
            query: (params) => ({
                url: "/admin/deposit-requests",
                method: "GET",
                params,
            }),
            providesTags: ["deposits"],
        }),

        // Get single deposit request by ID
        getDepositRequestById: builder.query<DepositRequestResponse, string>({
            query: (id) => ({
                url: `/admin/deposit-requests/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "deposits", id }],
        }),

        // Approve deposit request
        approveDepositRequest: builder.mutation<
            DepositRequestResponse,
            { id: string; data: ApproveDepositRequestDto }
        >({
            query: ({ id, data }) => ({
                url: `/admin/deposit-requests/${id}/approve`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["deposits"],
        }),

        // Reject deposit request
        rejectDepositRequest: builder.mutation<
            DepositRequestResponse,
            { id: string; data: RejectDepositRequestDto }
        >({
            query: ({ id, data }) => ({
                url: `/admin/deposit-requests/${id}/reject`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["deposits"],
        }),
    }),
});

export const {
    useGetAllDepositRequestsQuery,
    useGetDepositRequestByIdQuery,
    useApproveDepositRequestMutation,
    useRejectDepositRequestMutation,
} = depositRequestApi;
