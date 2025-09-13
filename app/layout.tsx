import type { Metadata } from 'next'
import { Inter, DM_Sans, Plus_Jakarta_Sans, Pacifico } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const dmSans = DM_Sans({ subsets: ['latin'] })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })
const pacifico = Pacifico({ 
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Ekpombang Consulting & Training - Professional Services & Training',
  description: 'From auditing and financial advisory to professional training in ACCA, PMP, and more — EC&T delivers solutions that drive growth and lasting impact.',
  keywords: 'consulting, training, ACCA, PMP, auditing, financial advisory, professional development',
  authors: [{ name: 'Ekpombang Consulting & Training' }],
  icons: {
    icon: '/ect-logo.png',
    shortcut: '/ect-logo.png',
    apple: '/ect-logo.png',
  },
  openGraph: {
    title: 'Ekpombang Consulting & Training - Professional Services & Training',
    description: 'From auditing and financial advisory to professional training in ACCA, PMP, and more — EC&T delivers solutions that drive growth and lasting impact.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/ect-logo.png',
        width: 1200,
        height: 630,
        alt: 'EC&T Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ekpombang Consulting & Training - Professional Services & Training',
    description: 'From auditing and financial advisory to professional training in ACCA, PMP, and more — EC&T delivers solutions that drive growth and lasting impact.',
    images: ['/ect-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/ect-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ect-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/ect-logo.png" />
        <link rel="shortcut icon" href="/ect-logo.png" />
      </head>
      <body className={`${inter.className} ${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

