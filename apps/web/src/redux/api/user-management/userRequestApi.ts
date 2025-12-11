import { baseApi } from "../baseApi";

// ============================================
// TypeScript Interfaces
// ============================================

export interface UserRequestDto {
    id: string;
    name: string;
    email: string;
    phone: string;
    nidNumber: string;
    address: string;
    occupation: string;
    emergencyContact: string;
    emergencyContactName: string;
    emergencyContactRelation: string;
    registrationFee: number;
    paymentMethod: string;
    transactionId: string;
    paymentDate: string | Date;
    requestDate: string | Date;
    status: string;
    accountType: string;
    referredBy: string;
    approvedBy?: string;
    approvedDate?: string | Date;
    memberId?: number;
    rejectedBy?: string;
    rejectedDate?: string | Date;
    rejectionReason?: string;
    additionalNotes?: string;
}

export interface QueryUserRequestDto {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    accountType?: string;
    paymentMethod?: string;
}

export interface ApproveUserRequestDto {
    notes?: string;
}

export interface RejectUserRequestDto {
    rejectionReason: string;
}

export interface UserRequestResponse {
    success: boolean;
    message: string;
    data: {
        requests: UserRequestDto[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
}

export interface SingleUserRequestResponse {
    success: boolean;
    message: string;
    data: UserRequestDto;
}

export interface ApproveRejectResponse {
    success: boolean;
    message: string;
    data: {
        id: string;
        name: string;
        email: string;
        memberId?: number;
        status: string;
        approvedDate?: Date;
        rejectionReason?: string;
        rejectedDate?: Date;
    };
}

// ============================================
// API Endpoints
// ============================================

const userRequestApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get all user registration requests with pagination and filters
        getAllUserRequests: builder.query<UserRequestResponse, QueryUserRequestDto>({
            query: (params) => ({
                url: "/admin/user-requests",
                method: "GET",
                params,
            }),
            providesTags: ["users"],
        }),

        // Get single user request by ID
        getUserRequestById: builder.query<SingleUserRequestResponse, string>({
            query: (id) => ({
                url: `/admin/user-requests/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "users", id }],
        }),

        // Approve user registration request
        approveUserRequest: builder.mutation<
            ApproveRejectResponse,
            { id: string; data: ApproveUserRequestDto }
        >({
            query: ({ id, data }) => ({
                url: `/admin/user-requests/${id}/approve`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["users"],
        }),

        // Reject user registration request
        rejectUserRequest: builder.mutation<
            ApproveRejectResponse,
            { id: string; data: RejectUserRequestDto }
        >({
            query: ({ id, data }) => ({
                url: `/admin/user-requests/${id}/reject`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["users"],
        }),
    }),
});

export const {
    useGetAllUserRequestsQuery,
    useGetUserRequestByIdQuery,
    useApproveUserRequestMutation,
    useRejectUserRequestMutation,
} = userRequestApi;
