'use client'

// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

/**
 * @note
 * @tanStack
 * importing the react query dependencies
 */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <main>{children}</main>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </body>
    </html>
  )
}
