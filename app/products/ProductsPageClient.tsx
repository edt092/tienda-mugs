'use client';

import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { useState } from 'react';

export default function ProductsPageClient() {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'mentalidad', label: 'Mentalidad' },
    { value: 'tumblers', label: 'Tumblers' },
    { value: 'diseños', label: 'Diseños' },
  ];

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 uppercase tracking-tight">
            La Colección
          </h1>
          <p className="text-gray-400 text-sm font-medium max-w-2xl normal-case">
            Cada pieza diseñada para impulsar tu ambición. Elige tu mentalidad.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-none transition-all ${
                filter === cat.value
                  ? 'bg-white text-black'
                  : 'border-2 border-gray-800 text-gray-400 hover:border-white hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No se encontraron productos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
