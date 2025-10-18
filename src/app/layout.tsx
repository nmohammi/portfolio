import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Nasrallah MOHAMMI – GenAI & Data Analytics Engineer',
  description: 'Portfolio: AI products, data engineering, ML models. Projects, experience, and contact.',
  openGraph: {
    title: 'Nasrallah MOHAMMI – GenAI & Data Analytics Engineer',
    description: 'Portfolio: AI products, data engineering, ML models. Projects, experience, and contact.',
    url: 'https://nmohammi.github.io/portfolio',
    siteName: 'Nasrallah Mohammi',
    images: [
      {
        url: '/pdp.jpg',
        width: 1024,
        height: 1024,
        alt: 'Nasrallah Mohammi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nasrallah MOHAMMI – GenAI & Data Analytics Engineer',
    description: 'Portfolio: AI products, data engineering, ML models. Projects, experience, and contact.',
    images: ['/pdp.jpg'],
  },
  metadataBase: new URL('https://nmohammi.github.io/portfolio')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] px-3 py-2 rounded bg-black text-white">Skip to content</a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NavBar />
          <main id="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
