import '../globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/header/header'
const inter = Inter({ subsets: ['latin'] })
import { notFound } from 'next/navigation';
import { locales } from '@/config'
import { unstable_setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider, useMessages } from 'next-intl'

export const metadata: Metadata = {
  title: 'Joaovq dev',
  description: 'Profile for joaovq dev',

}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children, params: { locale }
}: {
  children: React.ReactNode, params: any
}) {
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
