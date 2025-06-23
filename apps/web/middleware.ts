import { type NextRequest, NextResponse } from "next/server"
import { jwtDecode } from "jwt-decode"

type Role = keyof typeof roleBasedPrivateRoutes

const authRoutes = ["/login", "/register"]

const roleBasedPrivateRoutes = {
  MEMBER: [/^\/dashboard(?!\/admin)/],
  ADMIN: [/^\/dashboard\/admin/],
}

const roleDashboardPaths = {
  MEMBER: "/dashboard/member/profile",
  ADMIN: "/dashboard/admin",
}

interface DecodedToken {
  role?: Role
  [key: string]: unknown
}

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl


  const accessToken = request.cookies.get("accessToken")?.value
  let userInfo: DecodedToken | null = null

  if (accessToken) {
    try {
      userInfo = jwtDecode<DecodedToken>(accessToken)
    } catch (err) {
      console.error("Invalid access token", err)
    }
  }

  // Allow access to auth routes
  if (authRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // If user is not authenticated
  if (!userInfo) {
    return NextResponse.redirect(new URL(`/login?redirectPath=${pathname}`, request.url))
  }

  const role = userInfo.role

  console.log(userInfo,'50 line')

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
      return NextResponse.redirect(new URL(roleDashboardPaths[role], request.url))
    }
  }

  // Fallback redirect to home page
  return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/dashboard",
    "/dashboard/:path*",
  ],
}
