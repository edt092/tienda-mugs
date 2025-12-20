'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PromoItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  price: number;
  image: string;
  badge?: string;
}

const promoItems: PromoItem[] = [
  {
    id: '6',
    name: 'Kit Nacido Para Ganar',
    slug: 'kit-nacido-para-ganar',
    tagline: 'El regalo perfecto para impulsar el éxito',
    price: 39.99,
    image: '/img/productos/tumblers/tumbler-negro/tumbler-negro-born-to-win-combo-1.png',
    badge: 'Incluye Envío',
  },
  {
    id: '7',
    name: 'Kit Gratitude',
    slug: 'kit-gratitude',
    tagline: 'Regala el poder de la gratitud',
    price: 39.99,
    image: '/img/productos/tumblers/tumbler-gracias/tumbler-gracias-regalo-1.png',
    badge: 'Incluye Envío',
  },
  {
    id: '8',
    name: 'Kit Día Fenomenal',
    slug: 'kit-dia-fenomenal',
    tagline: 'Celebra cada día con estilo',
    price: 24.49,
    image: '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-regalo.png',
    badge: 'Popular',
  },
  {
    id: '9',
    name: 'Kit La Calma es mi Reino',
    slug: 'kit-la-calma-es-mi-reino',
    tagline: 'Regala paz y serenidad',
    price: 24.49,
    image: '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-regalo.png',
    badge: 'Nuevo',
  },
  {
    id: '10',
    name: 'Kit Soy un Multimillonario',
    slug: 'kit-soy-un-multimillonario',
    tagline: 'Regala mentalidad de abundancia',
    price: 24.49,
    image: '/img/productos/soy-un-multimillonario/soy-un-multimillonario-regalo.png',
    badge: 'Exclusivo',
  },
];

// Función para mezclar array aleatoriamente
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function PromoCarousel() {
  const [items, setItems] = useState<PromoItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Inicializar con orden aleatorio
  useEffect(() => {
    setItems(shuffleArray(promoItems));
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying || items.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  // Touch handlers para swipe en móvil
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <section
      className="relative w-full bg-gradient-to-b from-amber-950/20 via-black to-black overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Header */}
      <div className="pt-6 pb-2 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full">
          Kits de Regalo
        </span>
      </div>

      {/* Carousel Container */}
      <div
        className="relative h-[480px] sm:h-[520px] md:h-[500px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === currentIndex
                ? 'opacity-100 translate-x-0 z-10'
                : index < currentIndex
                  ? 'opacity-0 -translate-x-full z-0'
                  : 'opacity-0 translate-x-full z-0'
            }`}
          >
            <div className="h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-[240px] sm:h-[280px] md:h-[380px] flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 md:hidden" />
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Badge */}
                {item.badge && (
                  <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-amber-500 text-black text-xs font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6 px-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mt-2 normal-case">
                    {item.tagline}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <span className="text-3xl md:text-4xl font-black text-white">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-amber-400 font-medium uppercase tracking-wider">
                    Envío gratis en Quito
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
                  <Link
                    href={`/products/${item.slug}`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-all hover:scale-105 group"
                  >
                    Comprar Ahora
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href={`/products/${item.slug}`}
                    className="inline-flex items-center justify-center px-6 py-4 border-2 border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-black/50 border border-white/20 text-white hover:bg-white hover:text-black transition-all group"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-black/50 border border-white/20 text-white hover:bg-white hover:text-black transition-all group"
          aria-label="Siguiente"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 pb-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 h-2 bg-amber-500'
                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full bg-amber-500 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
