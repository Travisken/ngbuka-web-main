import { NextResponse } from "next/server";

export function middleware(request) {
// const  path = re
    const user = true
   
    if (!user) {
        return NextResponse.redirect(
            new URL('/', request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/cart/checkout', '/wallet']
}