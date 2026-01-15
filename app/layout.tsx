import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'lucky.commit | Full-stack Developer',
  description: 'Full-stack web developer specializing in React, TypeScript, Next.js, and modern web technologies.',
  keywords: ['web developer', 'full-stack', 'React', 'Next.js', 'TypeScript', 'portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}