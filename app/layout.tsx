import './globals.css'

import { Karla } from 'next/font/google'
import type { Metadata } from 'next'

import Cursor from './components/Cursor'
import Head from 'next/head'

const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GWON Minyoung portfolio frontend developer',
  description: 'Un site de portfolio pour GWON Minyoung, développeuse frontend à Strasbourg, actuellement à la recherche de son premier emploi dans ce domaine.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <Head>
        <title>
          {metadata.title as React.ReactNode}
        </title>
        <meta name='description' content={metadata.description?? 'Default Description'} />
        <meta property="og:title" content="GWON Minyoung portfolio frontend developer" key="ogtitle" />
        <meta property="og:description" content={metadata.description?? 'Default Description'} key="ogdesc" />
        <meta
            property="og:image"
            content="/img/site.png"
            key="ogimage"
        />
        <meta
            property="og:site_name"
            content="portfolio frontend | GWON Minyoung"
            key="ogsitename"
        />
        <meta
            property="og:url"
            content="https://portfolio-blue-nine-67.vercel.app/"
            key="ogurl"
        />
        <meta property="og:type" content="website" key="ogtype" />
        <meta name="twitter:card" content={metadata.description?? 'Default Description'} />
      </Head>
      <body className={karla.className}>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
