import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Prompt } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const prompt = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-prompt',
});

export const metadata: Metadata = {
  title: 'lucky.commit — Creative Developer & Systems Builder',
  description:
    'I design and build digital products that work. Full-stack developer creating production-ready platforms with artistic taste and strong implementation skills. Based in Thailand.',
  keywords: [
    'creative developer',
    'full-stack developer',
    'web developer',
    'React',
    'Next.js',
    'TypeScript',
    'portfolio',
    'systems builder',
    'product developer',
    'UI/UX',
  ],
  openGraph: {
    title: 'lucky.commit — Creative Developer & Systems Builder',
    description: 'I design and build digital products that work.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${prompt.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
