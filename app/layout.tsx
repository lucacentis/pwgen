import type { Metadata } from 'next'
import { Suspense } from 'react' 
import { Inter } from 'next/font/google'
import './globals.css'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Password Generator by Luca Centis',
  description: 'A simple and secure password, passphrase and hex generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <NuqsAdapter>
            {children}
          </NuqsAdapter>
        </Suspense>
      </body>
    </html>
  )
}
