import { type NextRequest, NextResponse } from "next/server"
import { jwtDecode } from "jwt-decode"

type Role = keyof typeof roleBasedPrivateRoutes

const authRoutes = ["/login", "/signup", "/"]
const pendingApprovalRoute = "/pending-approval"

const roleBasedPrivateRoutes = {
  USER: [/^\/dashboard(?!\/admin)/],
  ADMIN: [/^\/dashboard\/admin/],
}

const roleDashboardPaths = {
  USER: "/dashboard",
  ADMIN: "/dashboard/admin",
}

interface DecodedToken {
  roles?: Role
  status?: string
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
      // Check if user has PENDING status, redirect to pending approval page
      if (userInfo.status === "PENDING") {
        return NextResponse.redirect(new URL(pendingApprovalRoute, request.url))
      }
      const roles = userInfo.roles as Role
      const dashboardPath = roles && roleDashboardPaths[roles] ? roleDashboardPaths[roles] : "/dashboard"
      return NextResponse.redirect(new URL(dashboardPath, request.url))
    }
    return NextResponse.next()
  }

  // Allow authenticated users to access pending approval page
  if (pathname === pendingApprovalRoute) {
    if (userInfo) {
      return NextResponse.next()
    } else {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // If user is not authenticated and trying to access protected routes
  if (!userInfo) {
    return NextResponse.redirect(new URL(`/login?redirectPath=${pathname}`, request.url))
  }

  // Check if user has PENDING status and redirect to pending approval page
  if (userInfo.status === "PENDING") {
    return NextResponse.redirect(new URL(pendingApprovalRoute, request.url))
  }

  const roles = userInfo.roles as Role

  // Redirect to roles-specific dashboard root if accessing generic /dashboard
  if (pathname === "/dashboard" && roles && roleDashboardPaths[roles]) {
    return NextResponse.redirect(new URL(roleDashboardPaths[roles], request.url))
  }

  // Check if user has access to the current route based on their roles
  if (roles && roleBasedPrivateRoutes[roles]) {
    const routes = roleBasedPrivateRoutes[roles]
    if (routes.some((route) => route.test(pathname))) {
      return NextResponse.next()
    } else {
      // Redirect to correct dashboard if user tries to access unauthorized dashboard path
      return NextResponse.redirect(new URL(roleDashboardPaths[roles] || "/dashboard", request.url))
    }
  }

  // Allow access if no specific roles restrictions
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/pending-approval",
    "/dashboard",
    "/dashboard/:path*",
  ],
}
