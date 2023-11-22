import './globals.css'

import { Karla } from 'next/font/google'
import type { Metadata } from 'next'

import Cursor from './components/Cursor'


const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GWON Minyoung portfolio',
  description: 'Bienvenu à mon site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={karla.className}>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
