import { NextResponse } from "next/server";
import { getCurrentUser } from "./service/Auth"; // Make sure this function extracts user from cookie/token

// Routes that do not require authentication
const AuthRoutes = ["/login", "/register"];

// Routes that are accessible only if user is logged in (any role)
const PublicAuthenticatedRoutes = [
  "/addBlog",
  "/blog",
  "/blogPost",
  "/dashboard/profile",
];

// Role-based restricted routes
const roleBasedRoutes = {
  admin: [/^\/dashboard\/admin/],
  //   user: [/^\/dashboard\/profile/],
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. Attempt to get the user from token/cookie
  let user = null;
  try {
    user = await getCurrentUser(); // Make sure this reads cookie or header token
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  // 2. If no user and not accessing public auth routes -> redirect to login
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
    );
  }

  // 3. Allow access to public authenticated routes
  const isPublicAuthenticated = PublicAuthenticatedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  if (isPublicAuthenticated) {
    return NextResponse.next();
  }

  // 4. Handle role-based routes
  const userRole = user.role;
  const allowedRoutes = roleBasedRoutes[userRole];
  if (allowedRoutes && allowedRoutes.some((regex) => regex.test(pathname))) {
    return NextResponse.next();
  }

  // 5. Block access and redirect to home
  return NextResponse.redirect(new URL("/", request.url));
}

// 7. Configure route matching
export const config = {
  matcher: [
    "/addBlog",
    "/blog",
    "/blogPost/:path*",
    "/dashboard/profile/:path*",
    "/dashboard/admin/:path*",
    "/login",
    "/register",
  ],
};
