import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import SessionProvider from './SessionProvider'
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
      <body className={inter.className}> 
      <SessionProvider> <Navbar /><main className='p-4  min-w-[300px] max-w-7xl m-auto'>
        {children}</main>
        <Footer/>
        </SessionProvider>
        </body>
    </html>
  )
}
