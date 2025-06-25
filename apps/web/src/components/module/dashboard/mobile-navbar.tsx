"use client"

import { cn } from "@workspace/ui/lib/utils"
import { Home, History, BarChart3, User, Plus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MobileBottomNavProps {
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
  {
    title: "Deposit",
    url: "/dashboard/member/deposit",
    icon: Plus,
  },
]

const adminNavItems = [
  {
    title: "Home",
    url: "/dashboard/admin",
    icon: Home,
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: User,
  },
  {
    title: "Profile",
    url: "/admin/profile",
    icon: User,
  },
]

export function MobileBottomNav({ userType }: MobileBottomNavProps) {
  const pathname = usePathname()
  const navItems = userType === "member" ? memberNavItems : adminNavItems

  return (
    <div className="md:hidden">
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border">
        <div className="flex items-center justify-around px-2 py-2 safe-area-pb">
          {navItems.map((item:any) => {
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

                  {/* // Regular nav items */}
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
        </div>
      </nav>

      {/* Bottom padding to prevent content from being hidden behind nav */}
      <div className="h-20" />
    </div>
  )
}
