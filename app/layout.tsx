import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quantera',
  description: 'Empowering investors thorugh AI powered insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Urbanist&display=swap"
        rel="stylesheet"
      />
      <body className={urbanist.className}>{children}</body>
    </html>
  )
}
