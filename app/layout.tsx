import type { Metadata } from 'next'
import ReactQueryProvider from '@context/ReactQueryProvider'
import { AppStateProvider } from '@context/AppStateContext'

import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'

import './globals.css'

export const metadata: Metadata = {
  title: 'Rick and Morty Search',
  description:
    'Aplicación para consultar y buscar en resultados de la API de Rick and Morty. Permite búsquedas precisas con una interfaz sencilla, orientada a mejorar la accesibilidad y eficiencia en la manipulación de datos. Ideal para usuarios que requieren resultados rápidos y relevantes.',
  keywords: ['Rick and Morty', 'API', 'Search', 'React', 'Next.js'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ReactQueryProvider>
      <AppStateProvider>
        <html lang='en'>
          <body>
            <div className='space-container'>
              <div className=' space stars1 absolute inset-0'></div>
              <div className=' space stars2 absolute inset-0'></div>
              <div className=' space stars3 absolute inset-0'></div>
            </div>
            <Header />
            <div className='px-4 md:p-20'>{children}</div>
            <Footer />
          </body>
        </html>
      </AppStateProvider>
    </ReactQueryProvider>
  )
}
