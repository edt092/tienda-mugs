import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const BASE_URL = 'https://mindsetmugs.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'MindsetMugs - Tazas y Tumblers Motivacionales para Emprendedores',
    template: '%s | MindsetMugs',
  },
  description: 'Tazas y tumblers premium con mensajes motivacionales respaldados por neurociencia. Diseñados para emprendedores, fundadores y mentes que construyen el futuro. Envío gratis.',
  keywords: [
    'tazas motivacionales',
    'tumblers motivacionales',
    'tazas para emprendedores',
    'regalo emprendedor',
    'mindset',
    'mentalidad de crecimiento',
    'productividad',
    'neurociencia',
    'afirmaciones positivas',
    'tazas personalizadas',
    'regalo motivacional',
  ],
  authors: [{ name: 'MindsetMugs' }],
  creator: 'MindsetMugs',
  publisher: 'MindsetMugs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BASE_URL,
    siteName: 'MindsetMugs',
    title: 'MindsetMugs - Tazas y Tumblers Motivacionales',
    description: 'Tazas y tumblers premium con mensajes motivacionales respaldados por neurociencia. Para emprendedores y mentes que construyen.',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MindsetMugs - Tazas y Tumblers Motivacionales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindsetMugs - Tazas y Tumblers Motivacionales',
    description: 'Tazas y tumblers premium con mensajes motivacionales respaldados por neurociencia.',
    images: ['/img/og-image.jpg'],
    creator: '@mindsetmugs',
  },
  verification: {
    // google: 'tu-codigo-de-verificacion',
  },
  category: 'ecommerce',
}

// JSON-LD Schema para Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MindsetMugs',
  url: BASE_URL,
  logo: `${BASE_URL}/img/logo.png`,
  sameAs: [
    'https://instagram.com/mindsetmugs',
    'https://facebook.com/mindsetmugs',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+593967479210',
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
  },
}

// JSON-LD Schema para WebSite con SearchAction
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MindsetMugs',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/products?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
