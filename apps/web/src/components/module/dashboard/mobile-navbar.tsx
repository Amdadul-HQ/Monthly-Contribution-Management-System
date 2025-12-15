"use client"

import { cn } from "@workspace/ui/lib/utils"
import { History, BarChart3, User, UserCog, UserPlus, Wallet, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useUser } from "@/context/UserContext"

interface MobileBottomNavProps {
  userType: "member" | "admin"
}

const memberNavItems = [
  {
    title: "Profile",
    url: "/dashboard/member/profile",
    icon: User,
  },
  {
    title: "Overview",
    url: "/dashboard/member",
    icon: BarChart3,
  },
  {
    title: "Deposit",
    url: "/dashboard/member/deposit",
    icon: Wallet,
  },
  {
    title: "History",
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
    url: "/dashboard/admin/deposit",
    icon: Wallet,
  },
  {
    title: "Deposits Request's",
    url: "/dashboard/admin/deposit-request",
    icon: Wallet
  },
]

export function MobileBottomNav({ userType }: MobileBottomNavProps) {
  const pathname = usePathname()
  const navItems = userType === "member" ? memberNavItems : adminNavItems
  const { logout } = useUser()

  return (
    <div className="md:hidden">
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border">
        <div className="flex items-center justify-around px-2 py-2 safe-area-pb">
          {navItems.map((item) => {
            const isActive = pathname === item.url

            return (
              <Link
                key={item.title}
                href={item.url}
                className={cn(
                  "flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1",
                  "transition-all duration-300 ease-in-out",
                  "hover:scale-105 active:scale-95",
                )}
              >
                <div className="flex flex-col items-center justify-center space-y-1">
                  <div
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-lg",
                      "transition-all duration-300 ease-in-out",
                      isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium transition-colors duration-200",
                      isActive ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.title}
                  </span>
                  {isActive && <div className="w-1 h-1 bg-primary rounded-full animate-in zoom-in-50 duration-200" />}
                </div>
              </Link>
            )
          })}

          {/* Logout Button */}
          <button
            onClick={logout}
            className={cn(
              "flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1",
              "transition-all duration-300 ease-in-out",
              "hover:scale-105 active:scale-95",
              "text-muted-foreground hover:text-red-500"
            )}
          >
            <div className="flex flex-col items-center justify-center space-y-1">
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-lg",
                  "transition-all duration-300 ease-in-out",
                  "hover:bg-red-50"
                )}
              >
                <LogOut className="w-5 h-5" />
              </div>
              <span
                className="text-xs font-medium transition-colors duration-200"
              >
                Logout
              </span>
            </div>
          </button>
        </div>
      </nav>

      {/* Bottom padding to prevent content from being hidden behind nav */}
      <div className="h-20" />
    </div>
  )
}
