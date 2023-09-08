import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils";
import Provider from '@/components/Provider';
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cute Animal',
  description: 'using OpenAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="ko"   className={cn(
      'bg-white text-slate-900 antialiased light',
      inter.className
    )}>
 
 <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
 <Provider>
 <Navbar />
          {children}
          </Provider>
      </body>
    </html>
   
  )
}
