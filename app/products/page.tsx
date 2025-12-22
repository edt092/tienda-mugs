import { Metadata } from 'next';
import ProductsPageClient from './ProductsPageClient';
import { products } from '@/lib/products';

const BASE_URL = 'https://mindsetmugs.com';

export const metadata: Metadata = {
  title: 'Tazas y Tumblers Motivacionales - La Colección',
  description: 'Descubre nuestra colección de tazas y tumblers motivacionales diseñados para emprendedores. Mensajes inspiradores respaldados por neurociencia. Envío gratis.',
  keywords: [
    'tazas motivacionales',
    'tumblers motivacionales',
    'colección mindsetmugs',
    'tazas para emprendedores',
    'regalos motivacionales',
    'tazas con mensajes',
    'mentalidad de éxito',
  ],
  alternates: {
    canonical: `${BASE_URL}/products`,
  },
  openGraph: {
    title: 'Tazas y Tumblers Motivacionales - La Colección | MindsetMugs',
    description: 'Descubre nuestra colección de tazas y tumblers motivacionales diseñados para emprendedores.',
    url: `${BASE_URL}/products`,
    siteName: 'MindsetMugs',
    images: [
      {
        url: '/img/og-collection.jpg',
        width: 1200,
        height: 630,
        alt: 'Colección MindsetMugs - Tazas y Tumblers Motivacionales',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tazas y Tumblers Motivacionales - La Colección',
    description: 'Descubre nuestra colección de tazas y tumblers motivacionales diseñados para emprendedores.',
    images: ['/img/og-collection.jpg'],
  },
};

export default function ProductsPage() {
  // JSON-LD Schema para ItemList (lista de productos)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Colección MindsetMugs',
    description: 'Tazas y tumblers motivacionales para emprendedores',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        url: `${BASE_URL}/products/${product.slug}`,
        image: `${BASE_URL}${product.image}`,
        description: product.tagline,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };

  // Schema CollectionPage
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Colección MindsetMugs',
    description: 'Tazas y tumblers motivacionales diseñados para emprendedores y mentes que construyen.',
    url: `${BASE_URL}/products`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ProductsPageClient />
    </>
  );
}
