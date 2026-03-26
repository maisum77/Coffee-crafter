import type { Metadata } from 'next'
import { Cormorant_Garamond, Cormorant_SC, Jost, DM_Mono, Pinyon_Script } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/animations/CustomCursor'
import PageTransition from '@/components/animations/PageTransition'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-display',
})

const cormorantSC = Cormorant_SC({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sub-display',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-body',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
})

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: 'CoffeeCraft — Ultra-Premium Specialty Coffee Experience',
  description: 'Specialty coffee sourced from single origins, brewed with ritual precision. Located in DHA Lahore, Pakistan.',
  keywords: ['specialty coffee', 'premium coffee', 'coffee shop', 'DHA Lahore', 'artisan coffee'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coffeecraft.world',
    title: 'CoffeeCraft — Where Craft Meets Cup',
    description: 'Specialty coffee sourced from single origins, brewed with ritual precision.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CoffeeCraft Premium Coffee Experience',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;700&family=Cormorant+SC:wght@400;600&family=Jost:wght@300;400&family=DM+Mono:wght@400&family=Pinyon+Script&display=swap" rel="stylesheet" />
      </head>
      <body className={`
        ${cormorantGaramond.variable}
        ${cormorantSC.variable}
        ${jost.variable}
        ${dmMono.variable}
        ${pinyonScript.variable}
        antialiased
      `}>
        <CustomCursor />
        <Navigation />
        <PageTransition>
          <main className="min-h-screen">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}