import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductBySlug, products } from '@/lib/products';
import ProductPageClient from './ProductPageClient';

const BASE_URL = 'https://mindsetmugs.com';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Genera rutas estáticas para todos los productos
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Genera metadata dinámica para SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Producto no encontrado | MindsetMugs',
    };
  }

  const productType = product.category === 'tumblers' ? 'Tumbler' : 'Taza';
  const title = `${product.name} - ${productType} Motivacional | MindsetMugs`;
  const description = `${product.tagline}. ${product.description.slice(0, 120)}... Envío gratis. Diseño exclusivo para emprendedores.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      productType.toLowerCase(),
      'taza motivacional',
      'tumbler motivacional',
      'mentalidad',
      'mindset',
      'emprendedor',
      'regalo motivacional',
      'neurociencia',
      'productividad',
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
      canonical: `${BASE_URL}/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/products/${product.slug}`,
      siteName: 'MindsetMugs',
      images: [
        {
          url: `${BASE_URL}${product.image}`,
          width: 1200,
          height: 630,
          alt: `${product.name} - ${productType} motivacional de MindsetMugs`,
        },
      ],
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}${product.image}`],
      creator: '@mindsetmugs',
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productType = product.category === 'tumblers' ? 'Tumbler' : 'Taza';

  // JSON-LD Schema para datos estructurados
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images.map((img) => `${BASE_URL}${img}`),
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'MindsetMugs',
    },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/products/${product.slug}`,
      priceCurrency: 'USD',
      price: product.price,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'MindsetMugs',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: 0,
          currency: 'USD',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          businessDays: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 5,
          },
        },
      },
    },
    category: productType,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Beneficio Principal',
        value: product.tagline,
      },
      {
        '@type': 'PropertyValue',
        name: 'Material',
        value: product.category === 'tumblers' ? 'Acero inoxidable' : 'Cerámica premium',
      },
    ],
  };

  // Schema BreadcrumbList para navegación
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Productos',
        item: `${BASE_URL}/products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `${BASE_URL}/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ProductPageClient product={product} />
    </>
  );
}
