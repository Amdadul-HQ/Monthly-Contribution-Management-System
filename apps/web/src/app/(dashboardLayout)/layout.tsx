"use client"

import { DashboardSidebar } from "@/components/module/dashboard/dashboar-sidebar"
import { MobileBottomNav } from "@/components/module/dashboard/mobile-navbar"
import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"
import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"

interface DashboardLayoutProps {
  children: ReactNode
}

interface DecodedToken {
  roles?: string
  [key: string]: unknown
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [userType, setUserType] = useState<"member" | "admin">("member")

  useEffect(() => {
    // Get access token from cookies
    const accessToken = Cookies.get("accessToken")

    if (accessToken) {
      try {
        const decoded = jwtDecode<DecodedToken>(accessToken)
        console.log(decoded)
        // Set userType based on role - ADMIN gets "admin", others get "member"
        const type = decoded.roles === "ADMIN" ? "admin" : "member"
        setUserType(type)
      } catch (error) {
        console.error("Failed to decode token:", error)
        // Default to member if token decode fails
        setUserType("member")
      }
    }
  }, [])

  console.log(userType)

  return (
    <SidebarProvider>
      <DashboardSidebar userType={userType} />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4">{children}</div>
        <MobileBottomNav userType={userType} />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
