import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, supportedLocales } from "@/common/const/i18n";

export function middleware(request: NextRequest) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const excludePaths = [
      '/_next/',
      '/static/',
      'favicon'
    ]
    
    if (excludePaths.some(el => pathname.includes(el))) {
      return NextResponse.next();
    }

    const localeFromPath = pathname.split('/')[1];
    let locale = supportedLocales.includes(localeFromPath) ? localeFromPath : null;

    if (!locale) {
      locale = request.cookies.get('locale')?.value ?? defaultLocale;
    }

    const theme = request.cookies.get("theme")?.value ?? "light"

    if(supportedLocales.some(lang => pathname.includes(lang))){
      const response = NextResponse.next();
      response.cookies.set('locale', locale);
      response.cookies.set('theme', theme);
      return response;
    }

    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    const response = NextResponse.redirect(newUrl);
    response.cookies.set('locale', locale);
    response.cookies.set('theme', theme);
    return response;
}