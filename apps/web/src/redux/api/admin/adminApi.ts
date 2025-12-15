import { baseApi } from "../baseApi";
import { TResponse } from "../../type/apiType";

export interface AdminStatsDto {
    totalAmount: number;
    totalMembers: number;
    activeMembers: number;
    inactiveMembers: number;
    currentMonthTarget: number;
    currentMonthCollected: number;
    totalPenalties: number;
    newMembersThisMonth: number;
    averageMonthlyDeposit: number;
    collectionEfficiency: number;
}

export interface RecentPaymentDto {
    id: string;
    memberName: string;
    memberId: number;
    amount: number;
    method: string;
    date: Date;
    status: string;
    penalty: number;
}

export interface MonthlyCollectionDto {
    month: string;
    amount: number;
    target: number;
    members: number;
}

export interface PaymentMethodDistributionDto {
    name: string;
    value: number;
    color: string;
}

export interface TopContributorDto {
    name: string;
    totalDeposited: number;
    months: number;
    avgMonthly: number;
}

export interface AdminOverviewDto {
    stats: AdminStatsDto;
    recentPayments: RecentPaymentDto[];
    monthlyCollections: MonthlyCollectionDto[];
    paymentMethodDistribution: PaymentMethodDistributionDto[];
    topContributors: TopContributorDto[];
}

export interface UserListQueryDto {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    accountType?: string;
}

export interface UserListItemDto {
    id: number;
    userId: string;
    name: string;
    email: string;
    phone: string;
    memberId: string;
    status: string;
    accountType: string;
    joinDate: string;
    lastLogin: string;
    totalDeposited: number;
    currentBalance: number;
    totalPenalties: number;
    paymentStreak: number;
    address: string;
    avatar: string;
}

export interface PaginatedUserResponseDto {
    data: UserListItemDto[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export interface BlockUserDto {
    reason: string;
}

export interface SuspendUserDto {
    reason: string;
    endDate: string;
}

export interface UserActionResponseDto {
    success: boolean;
    message: string;
    userId?: string;
}

export interface UserDetailsDto extends UserListItemDto {
    occupation?: string;
    fatherName?: string;
    motherName?: string;
    documents?: string;
    referencePerson?: string;
    referencePhone?: string;
    registrationFee?: number;
}

export const adminApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAdminOverview: build.query<AdminOverviewDto, void>({
            query: () => ({
                url: "/admin/overview",
                method: "GET",
            }),
            transformResponse: (response: TResponse<AdminOverviewDto>) => response.data!,
            providesTags: ["admin"],
        }),
        getAllUsers: build.query<PaginatedUserResponseDto, UserListQueryDto>({
            query: (params) => ({
                url: "/admin/users",
                method: "GET",
                params,
            }),
            transformResponse: (response: TResponse<PaginatedUserResponseDto>) => response.data!,
            providesTags: ["users"],
        }),
        getUserDetails: build.query<UserDetailsDto, string>({
            query: (id) => ({
                url: `/admin/users/${id}`,
                method: "GET",
            }),
            transformResponse: (response: TResponse<UserDetailsDto>) => response.data!,
            providesTags: (result, error, id) => [{ type: "users", id }],
        }),
        blockUser: build.mutation<UserActionResponseDto, { id: string; data: BlockUserDto }>({
            query: ({ id, data }) => ({
                url: `/admin/users/${id}/block`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["users"],
        }),
        suspendUser: build.mutation<UserActionResponseDto, { id: string; data: SuspendUserDto }>({
            query: ({ id, data }) => ({
                url: `/admin/users/${id}/suspend`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["users"],
        }),
        removeUser: build.mutation<UserActionResponseDto, string>({
            query: (id) => ({
                url: `/admin/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["users"],
        }),
        updateUser: build.mutation<UserActionResponseDto, { id: string; data: Partial<UserDetailsDto> }>({
            query: ({ id, data }) => ({
                url: `/admin/users/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => ["users", { type: "users", id }],
        }),
    }),
});

export const {
    useGetAdminOverviewQuery,
    useGetAllUsersQuery,
    useGetUserDetailsQuery,
    useBlockUserMutation,
    useSuspendUserMutation,
    useRemoveUserMutation,
    useUpdateUserMutation
} = adminApi;
