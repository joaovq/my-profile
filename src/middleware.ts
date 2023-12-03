import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales, pathnames } from '@/config';
 
export default createMiddleware({
  defaultLocale: "en",
  // A list of all locales that are supported
  locales,
  localePrefix,
  pathnames
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
   '/(pt-BR|en)/:path*'
  ]
};