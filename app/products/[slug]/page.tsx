'use client';

import { notFound, useRouter } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/products';
import { cartUtils } from '@/lib/cart';
import ImageGallery from '@/components/ImageGallery';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { use, useState } from 'react';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const router = useRouter();
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  if (!product) {
    notFound();
  }

  const handleBuyNow = () => {
    cartUtils.addToCart(product, 1);
    router.push('/cart');
  };

  const handleAddToCart = () => {
    cartUtils.addToCart(product, 1);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  return (
    <>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors font-medium"
          >
            ← Volver a la Colección
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Product Image Gallery */}
            <ImageGallery images={product.images} productName={product.name} />

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
                {product.name}
              </h1>

              <p className="text-xl text-gray-300 mb-6 font-medium italic normal-case">
                "{product.tagline}"
              </p>

              <p className="text-gray-400 text-base mb-8 leading-relaxed normal-case">
                {product.description}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-black">${product.price}</span>
                <span className="text-gray-500 text-lg ml-2">USD</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-wider rounded-none hover:bg-gray-200 transition-all hover:scale-105"
                >
                  Comprar Ahora
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-8 py-4 border-2 border-white text-white text-sm font-bold uppercase tracking-wider rounded-none hover:bg-white hover:text-black transition-all"
                >
                  Añadir al Carrito
                </button>
              </div>

              {/* Added to Cart Message */}
              {showAddedMessage && (
                <div className="mb-4 p-4 bg-green-900 border border-green-700 text-green-100 text-sm">
                  <div className="flex items-center justify-between">
                    <span>✓ Producto añadido al carrito</span>
                    <Link href="/cart" className="underline hover:text-white">
                      Ver carrito
                    </Link>
                  </div>
                </div>
              )}

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Envío Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Garantía 30 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Edición Limitada</span>
                </div>
              </div>

              {/* Product Features */}
              <div className="pt-8 border-t border-gray-800">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-4">
                  Especificaciones
                </h3>
                <ul className="space-y-3 text-sm text-gray-400 normal-case">
                  <li className="flex items-start">
                    <span className="mr-2 text-white">✓</span>
                    <span>Cerámica premium de alta calidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-white">✓</span>
                    <span>Capacidad 330ml</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-white">✓</span>
                    <span>Apta para lavavajillas y microondas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-white">✓</span>
                    <span>Impresión sublimada permanente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-white">✓</span>
                    <span>Diseño exclusivo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Neuroscience Section */}
          <div className="mb-20 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                  Neurociencia Aplicada
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mt-4 mb-6 uppercase tracking-tight">
                  {product.neuroscience.title}
                </h2>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-8 normal-case">
                {product.neuroscience.description}
              </p>
              <div className="bg-black border-l-4 border-white p-6">
                <p className="text-sm text-gray-400 italic normal-case">
                  <span className="font-bold text-white">Impacto Diario:</span> {product.dailyImpact}
                </p>
              </div>
            </div>
          </div>

          {/* Psychological Benefits */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 uppercase tracking-tight">
                Beneficios Psicológicos Comprobados
              </h2>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto normal-case">
                Respaldado por estudios en neurociencia cognitiva y psicología del comportamiento
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {product.psychologicalBenefits.map((benefit, index) => (
                <div key={index} className="bg-black border-2 border-gray-800 p-6 hover:border-white transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed normal-case">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mental Benefits */}
          <div className="mb-20 bg-black border-2 border-gray-800 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black mb-8 text-center uppercase tracking-tight">
                Transformación Mental Garantizada
              </h2>
              <div className="space-y-6">
                {product.mentalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 pb-6 border-b border-gray-800 last:border-0">
                    <span className="text-2xl flex-shrink-0">🧠</span>
                    <p className="text-gray-300 text-base normal-case">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-white text-black p-8 md:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 uppercase tracking-tight">
              Empieza tu Transformación Hoy
            </h2>
            <p className="text-gray-800 text-base mb-8 max-w-2xl mx-auto normal-case">
              Únete a miles de personas que están reprogramando su mente cada mañana.
              La inversión más importante es la que haces en ti mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <button
                onClick={handleAddToCart}
                className="flex-1 px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-wider rounded-none hover:bg-gray-800 transition-all"
              >
                Añadir al Carrito
              </button>
              <button
                onClick={() => {
                  const message = encodeURIComponent(`Hola! Tengo una consulta sobre "${product.name}"`);
                  window.open(`https://wa.me/593967479210?text=${message}`, '_blank');
                }}
                className="flex-1 px-8 py-4 border-2 border-black text-black text-sm font-bold uppercase tracking-wider rounded-none hover:bg-black hover:text-white transition-all"
              >
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton productName={product.name} />
    </>
  );
}
