'use client'
import { useParams } from 'next/navigation'
import { Providers } from './providers'
import './globals.css'

export default function RootLayout({ children }) {
  const params = useParams()
  return (
    <html lang={params?.lang ?? 'en'}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
