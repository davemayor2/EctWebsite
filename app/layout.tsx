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
  openGraph: {
    title: 'Ekpombang Consulting & Training - Professional Services & Training',
    description: 'From auditing and financial advisory to professional training in ACCA, PMP, and more — EC&T delivers solutions that drive growth and lasting impact.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ekpombang Consulting & Training - Professional Services & Training',
    description: 'From auditing and financial advisory to professional training in ACCA, PMP, and more — EC&T delivers solutions that drive growth and lasting impact.',
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
      </head>
      <body className={`${inter.className} ${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

