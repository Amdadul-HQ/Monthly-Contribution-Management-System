/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut, setUser } from "../userSlice/userSlice";
import { toast } from "sonner";
import { TResponse } from "../type/apiType";

const baseQuery = fetchBaseQuery({
  // Fallback to local API if env is missing
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/ts",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.token;
    if (token) {
      headers.set("authorization", `bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken : BaseQueryFn<FetchArgs,BaseQueryApi,DefinitionType> = async (args,api, extraOption) :Promise<any> =>{
    let result = await baseQuery(args,api,extraOption) as TResponse<object>;

    if(result?.error?.status === 404){
        toast.error(result?.error?.data?.message)
    }

    if(result?.error?.status === 401){
        // * send Refresh token
        const state = api.getState() as RootState;
        const refreshToken = (state.auth as any)?.refreshToken;
        
        if (!refreshToken) {
            api.dispatch(logOut());
            return result;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/ts"}/auth/refresh-token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ refreshToken }),
          }
        );
        const data = await res.json();

        if(data?.success && data?.data?.token){
            const state = api.getState() as RootState;
            const user = state.auth.user;
            api.dispatch(setUser({
                user,
                token: data.data.token,
                refreshToken: data.data.refreshToken || refreshToken
            }));

            result = await baseQuery(args,api,extraOption) as TResponse<object>
        }
        else{
            api.dispatch(logOut())
        }

    }
    return result;
}

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["admins","paywallControl","PlanLimits", "logs","notes","users","user","coffeeShop","flaggedContent","pendingCafe","duplicateCafe","announcements","notifications","products","ip"],
  endpoints: () => ({}),
});