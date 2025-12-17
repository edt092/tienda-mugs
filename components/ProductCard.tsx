import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-black border-2 border-gray-800 hover:border-white transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-square bg-gray-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3">
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          <h3 className="text-base font-black mb-2 uppercase tracking-tight group-hover:text-gray-300 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 font-medium mb-4 line-clamp-2 normal-case">
            {product.tagline}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-black">${product.price}</span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
              Ver →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
