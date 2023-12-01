import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joaovq dev',
  description: 'Profile for joaovq dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
