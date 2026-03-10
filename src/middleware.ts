import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const redirectMap: Record<string, string> = {
  '/about-us': '/about',
  '/about-us/': '/about',
  '/contact-us': '/contact',
  '/contact-us/': '/contact',
  '/category/blogs': '/blog',
  '/category/blogs/': '/blog',
  '/category/uncategorized': '/blog',
  '/category/uncategorized/': '/blog',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check direct redirect map
  const redirect = redirectMap[pathname];
  if (redirect) {
    const url = request.nextUrl.clone();
    url.pathname = redirect;
    return NextResponse.redirect(url, 301);
  }

  // Handle trailing slash variants for blog posts
  const cleanPath = pathname.replace(/\/$/, '');
  if (cleanPath && redirectMap[cleanPath]) {
    const url = request.nextUrl.clone();
    url.pathname = redirectMap[cleanPath];
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/about-us/:path*',
    '/contact-us/:path*',
    '/category/:path*',
  ],
};
