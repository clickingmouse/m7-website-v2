import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
    async function middleware(req: NextRequest) {
     console.log("Middleware executed for:", req.nextUrl.pathname); 

        // Custom middleware logic can be added here if needed
    },
    {
        isReturnToCurrentPage:true,
        // Specify public routes that don't require authentication
        publicRoutes: ["/", "/login", "/about", "/getting-here", "/tips-and-guides"],
    }
);

export const config = {
     matcher: ["/((?!api|_next/static|_next/image|auth|_kinde|static|favicon.ico|robots.txt|images|login|getting-here|$).*)"],
 

    //matcher: ["/((?!api|_kinde|static|favicon.ico).*)"],
};