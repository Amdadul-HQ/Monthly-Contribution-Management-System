import { baseApi } from "../baseApi";

// ============================================
// TypeScript Interfaces
// ============================================

export interface PersonalInfoDto {
    name: string;
    email: string;
    phone: string;
    profileImage: string;
    memberId: string;
    joinDate: string;
    address: string;
    nidNumber: string;
    occupation: string;
    emergencyContact: string;
}

export interface AccountInfoDto {
    accountStatus: string;
    accountType: string;
    totalDeposited: number;
    currentBalance: number;
    totalPenalties: number;
    nextPaymentDue: string;
    monthlyAmount: number;
    paymentStreak: number;
    onTimePaymentRate: number;
}

export interface PreferencesDto {
    preferredPaymentMethod: string;
    notificationsEnabled: boolean;
    emailAlerts: boolean;
    smsAlerts: boolean;
    language: string;
}

export interface StatisticsDto {
    monthsAsMember: number;
    totalTransactions: number;
    averageMonthlyDeposit: number;
    lastLoginDate: string;
}

export interface UserProfileResponseDto {
    personalInfo: PersonalInfoDto;
    accountInfo: AccountInfoDto;
    preferences: PreferencesDto;
    statistics: StatisticsDto;
}

export interface UpdateUserProfileDto {
    name?: string;
    email?: string;
    phone?: string;
    fatherName?: string;
    motherName?: string;
    address?: string;
    occupation?: string;
    joiningDate?: string;
}

export interface RecentDepositDto {
    month: string;
    amount: number;
    date: string;
    penalty: number;
    isPenalized: boolean;
    daysLate: number;
}

export interface MonthlyPaymentDto {
    month: string;
    amount: number;
}

export interface CurrentMonthStatusDto {
    month: string;
    amount: number;
    isPaid: boolean;
    paymentDate?: string;
    daysLate: number;
    penalty: number;
}

export interface SummaryStatsDto {
    last5MonthsTotal: number;
    averageMonthly: number;
    recentDepositsCount: number;
    monthsPaid: number;
    latePaymentsCount: number;
}

export interface MemberOverviewDto {
    totalReserved: number;
    totalPenalty: number;
    currentMonth: CurrentMonthStatusDto;
    recentDeposits: RecentDepositDto[];
    monthlyPayments: MonthlyPaymentDto[];
    summaryStats: SummaryStatsDto;
}

export interface MemberOverviewApiResponse {
    success: boolean;
    message: string;
    data: MemberOverviewDto;
}

export interface UserProfileApiResponse {
    success: boolean;
    message: string;
    data: UserProfileResponseDto;
}

// ============================================
// API Endpoints
// ============================================

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get current user profile
        getProfile: builder.query<UserProfileApiResponse, void>({
            query: () => ({
                url: "/user/profile",
                method: "GET",
            }),
            providesTags: ["user"],
        }),

        // Update user profile
        updateProfile: builder.mutation<UserProfileApiResponse, UpdateUserProfileDto>({
            query: (data) => ({
                url: "/user/profile",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["user"],
        }),

        // Get member overview dashboard functionality
        getMemberOverview: builder.query<MemberOverviewApiResponse, void>({
            query: () => ({
                url: "/deposits/overview",
                method: "GET",
            }),
            providesTags: ["user", "deposits"],
        }),
    }),
});

export const {
    useGetProfileQuery,
    useUpdateProfileMutation,
    useGetMemberOverviewQuery,
} = userApi;
