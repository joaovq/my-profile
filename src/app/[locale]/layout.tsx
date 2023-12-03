import '../globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header/header'
const inter = Inter({ subsets: ['latin'] })
import {notFound} from 'next/navigation';

export const metadata: Metadata = {
  title: 'Joaovq dev',
  description: 'Profile for joaovq dev',
}

// Can be imported from a shared config
const locales = ['pt-BR', 'de'];

export default function RootLayout({
  children, params: {locale}
}: {
  children: React.ReactNode, params: any
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
