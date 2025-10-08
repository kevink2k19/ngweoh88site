import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NgweOh88 Casino - Premium Online Casino Experience',
  description: 'Experience luxury gaming at NgweOh88 Casino. Enjoy slots, live casino, sports betting, and more with our premium beige and olive themed platform.',
  keywords: 'casino, online casino, slots, live casino, sports betting, Myanmar casino, NgweOh88',
  authors: [{ name: 'NgweOh88 Casino' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'NgweOh88 Casino - Premium Online Casino Experience',
    description: 'Experience luxury gaming at NgweOh88 Casino with slots, live casino, and sports betting.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NgweOh88 Casino - Premium Online Casino Experience',
    description: 'Experience luxury gaming at NgweOh88 Casino with slots, live casino, and sports betting.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#6b7c3b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="NgweOh88" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}