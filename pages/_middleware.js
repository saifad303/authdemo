import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //The token will exist if user is logged in.
  const token = await getToken({ req, secret: process.env.SECRET });

  const { pathname } = req.nextUrl;

  //allow the requests if the following is true...
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // if (!token || pathname !== "/auth/signin") {
  //   return NextResponse.redirect("/auth/signin");
  // }
}
