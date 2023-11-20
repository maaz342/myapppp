import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MAAZAZON',
  description: 'ECOMM APP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><main className='p-4  min-w-[300px] max-w-7xl m-auto'>
        {children}</main></body>
    </html>
  )
}
