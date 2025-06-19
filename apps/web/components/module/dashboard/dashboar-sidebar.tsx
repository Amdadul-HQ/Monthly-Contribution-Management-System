"use client"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,useSidebar } from "@workspace/ui/components/sidebar"
import { BarChart3, History, Plus, Settings, User, UserCog, UserPlus, Users, Wallet } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


interface DashboardSidebarProps {
  userType: "member" | "admin"
}

const memberNavItems = [
  {
    title: "Profile",
    url: "/dashboard/member/profile",
    icon: User,
  },
  ,
  {
    title: "Overview",
    url: "/dashboard/member",
    icon: BarChart3,
  },
  {
    title: "Deposit History",
    url: "/dashboard/member/deposit-history",
    icon: History,
  },
]

const adminNavItems = [
  {
    title: "Overview",
    url: "/dashboard/admin",
    icon: BarChart3,
  },
  {
    title: "Users",
    url: "/dashboard/admin/users",
    icon: UserCog,
  },
  {
    title: "User Request's",
    url: "/dashboard/admin/user-request",
    icon: UserPlus,
  },
  {
    title: "Deposits",
    url: "/admin/deposits",
    icon: Wallet,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
]

export function DashboardSidebar({ userType }: DashboardSidebarProps) {
  const pathname = usePathname()
  const navItems = userType === "member" ? memberNavItems : adminNavItems

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="flex items-center gap-2 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Wallet className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{userType === "member" ? "Member Portal" : "Admin Portal"}</span>
            <span className="truncate text-xs text-muted-foreground">Dashboard</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item:any) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {userType === "member" && (
          <>
            <Separator className="mx-4" />
            <SidebarGroup>
              <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-2">
                  <Button asChild className="w-full justify-start gap-2" size="sm">
                    <Link href="/dashboard/member/deposit">
                      <Plus className="size-4" />
                      Deposit Now
                    </Link>
                  </Button>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
              <div className="size-2 rounded-full bg-green-500" />
              <span>Online</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
