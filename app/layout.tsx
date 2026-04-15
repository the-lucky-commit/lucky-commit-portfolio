import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'lucky.commit | Full-stack Developer',
  description:
    'Full-stack developer portfolio focused on production-ready web products, business systems, and polished digital experiences.',
  keywords: [
    'web developer',
    'full-stack',
    'React',
    'Next.js',
    'TypeScript',
    'portfolio',
    'frontend',
    'backend',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  )
}
