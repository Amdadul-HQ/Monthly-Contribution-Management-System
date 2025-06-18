"use client"

import { DashboardSidebar } from "@/components/module/dashboard/dashboar-sidebar"
import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"
import type { ReactNode } from "react"

interface DashboardLayoutProps {
  children: ReactNode
  userType?: "member" | "admin"
}

const DashboardLayout = ({ children, userType = "member" }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <DashboardSidebar userType={userType} />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
