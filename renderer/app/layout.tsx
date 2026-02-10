import React from 'react'
import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Metadata } from 'next'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'ClawPilot onboarding – React/Electron test',
  description:
    'Pixel-perfect implementation of the ClawPilot onboarding screen using React (Next.js), Electron, and TailwindCSS.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable
        )}>
        {children}
      </body>
    </html>
  )
}
