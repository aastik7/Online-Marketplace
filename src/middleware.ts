import { authMiddleware } from "@clerk/nextjs";

// Define your public routes
const publicRoutes = [
  "/",
  "/anyone-can-visit-this-route",
  "/api/trpc/post.hello",
];

// Define routes to be ignored by Clerk authentication
const ignoredRoutes = ["/no-auth-in-this-route", "/api/trpc/post.hello"];

// Apply the authMiddleware with the modified configuration
export default authMiddleware({
  publicRoutes,
  ignoredRoutes,
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
