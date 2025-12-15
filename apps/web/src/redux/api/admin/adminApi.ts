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
    }),
});

export const { useGetAdminOverviewQuery } = adminApi;
