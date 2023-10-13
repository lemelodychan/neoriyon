import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=neoriyon"></script>
      </head>
      <body className={inter.className}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
