import type { Metadata } from 'next'
import './globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: {
    default: 'Valley View University ? Redesign',
    template: '%s ? Valley View University',
  },
  description: 'A vibrant, modern redesign of Valley View University with a focus on clarity, accessibility, and student success.',
  metadataBase: new URL('https://agentic-014c7d89.vercel.app'),
  openGraph: {
    title: 'Valley View University',
    description: 'A vibrant, modern redesign for a world-class institution.',
    url: 'https://agentic-014c7d89.vercel.app',
    siteName: 'Valley View University',
    images: [
      { url: '/og-cover.png', width: 1200, height: 630 }
    ],
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen grid grid-rows-[auto,1fr,auto]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
