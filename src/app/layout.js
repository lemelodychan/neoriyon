import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

import Header from './components/Header';

import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Krona+One&family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet" />
        
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=neoriyon"></script>
      </head>
      <body>
        <Header></Header>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
