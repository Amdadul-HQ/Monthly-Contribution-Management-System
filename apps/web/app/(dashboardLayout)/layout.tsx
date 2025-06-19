"use client"

import { DashboardSidebar } from "@/components/module/dashboard/dashboar-sidebar"
import { MobileBottomNav } from "@/components/module/dashboard/mobile-navbar"
import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"
import type { ReactNode } from "react"

interface DashboardLayoutProps {
  children: ReactNode
  userType?: "member" | "admin"
}

const DashboardLayout = ({ children, userType = "admin" }: DashboardLayoutProps) => {
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
