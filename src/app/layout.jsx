import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import clsx from 'clsx'
import Script from 'next/script'

import { Lato, Permanent_Marker, Overpass_Mono } from 'next/font/google'
import '@/styles/globals.css'

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['400', '900'],
})

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  variable: '--font-permanent-marker',
  display: 'swap',
  weight: '400',
})

const overpassMono = Overpass_Mono({
  subsets: ['latin'],
  variable: '--font-overpass-mono',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata = {
  title: {
    template: 'topobanana',
    default: 'Artworks by Stephanie Keske',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          'font-sans',
          lato.variable,
          permanentMarker.variable,
          overpassMono.variable
        )}
      >
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BW8G2FK3TL');
        `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
