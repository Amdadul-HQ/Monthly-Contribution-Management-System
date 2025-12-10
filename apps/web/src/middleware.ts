import { type NextRequest, NextResponse } from "next/server"
import { jwtDecode } from "jwt-decode"

type Role = keyof typeof roleBasedPrivateRoutes

const authRoutes = ["/login", "/signup", "/"]

const roleBasedPrivateRoutes = {
  USER: [/^\/dashboard(?!\/admin)/],
  ADMIN: [/^\/dashboard\/admin/],
}

const roleDashboardPaths = {
  USER: "/dashboard",
  ADMIN: "/dashboard/admin",
}

interface DecodedToken {
  role?: Role
  sub?: string
  email?: string
  [key: string]: unknown
}

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  // Get access token from cookies
  const accessToken = request.cookies.get("accessToken")?.value
  let userInfo: DecodedToken | null = null

  if (accessToken) {
    try {
      userInfo = jwtDecode<DecodedToken>(accessToken)
    } catch (err) {
      console.error("Invalid access token", err)
      // Clear invalid token cookie
      const response = NextResponse.next()
      response.cookies.delete("accessToken")
      return response
    }
  }

  // Allow access to auth routes and home page
  if (authRoutes.includes(pathname)) {
    // If user is already authenticated and tries to access auth routes, redirect to dashboard
    if (userInfo && (pathname === "/login" || pathname === "/signup")) {
      const role = userInfo.role as Role
      const dashboardPath = role && roleDashboardPaths[role] ? roleDashboardPaths[role] : "/dashboard"
      return NextResponse.redirect(new URL(dashboardPath, request.url))
    }
    return NextResponse.next()
  }

  // If user is not authenticated and trying to access protected routes
  if (!userInfo) {
    return NextResponse.redirect(new URL(`/login?redirectPath=${pathname}`, request.url))
  }

  const role = userInfo.role as Role

  // Redirect to role-specific dashboard root if accessing generic /dashboard
  if (pathname === "/dashboard" && role && roleDashboardPaths[role]) {
    return NextResponse.redirect(new URL(roleDashboardPaths[role], request.url))
  }

  // Check if user has access to the current route based on their role
  if (role && roleBasedPrivateRoutes[role]) {
    const routes = roleBasedPrivateRoutes[role]
    if (routes.some((route) => route.test(pathname))) {
      return NextResponse.next()
    } else {
      // Redirect to correct dashboard if user tries to access unauthorized dashboard path
      return NextResponse.redirect(new URL(roleDashboardPaths[role] || "/dashboard", request.url))
    }
  }

  // Allow access if no specific role restrictions
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/dashboard",
    "/dashboard/:path*",
  ],
}
