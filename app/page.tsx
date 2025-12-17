import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="pt-16">
      <Hero />

      {/* Featured Products Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
              Colección Destacada
            </h2>
            <p className="text-gray-400 text-sm font-medium max-w-2xl mx-auto normal-case">
              Diseños seleccionados para quienes se niegan a pensar en pequeño
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-xs font-bold uppercase tracking-wider rounded-none hover:bg-white hover:text-black transition-all"
            >
              Ver Todos los Productos
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 uppercase tracking-tight">
            Más que una Taza
          </h2>
          <p className="text-gray-400 text-base font-medium leading-relaxed mb-8 normal-case">
            Cada mañana es un reinicio. Una oportunidad para construir, lanzar y ganar.
            Nuestras tazas están diseñadas para recordarte una cosa: la ejecución lo supera todo.
          </p>
          <blockquote className="text-xl font-bold text-white border-l-4 border-white pl-6 my-12 uppercase tracking-tight normal-case">
            "Las ideas son baratas. La ejecución lo es todo. Empieza tu día bien."
          </blockquote>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-xs font-bold uppercase tracking-wider rounded-none hover:bg-white hover:text-black transition-all"
          >
            Lee Nuestra Historia
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
