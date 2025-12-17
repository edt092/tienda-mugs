'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cartUtils } from '@/lib/cart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = cartUtils.getCart();
      const count = cartUtils.getCartItemsCount(cart);
      setCartCount(count);
    };

    updateCartCount();

    // Actualizar el contador cada segundo para detectar cambios
    const interval = setInterval(updateCartCount, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-lg font-black tracking-tight uppercase hover:opacity-80 transition-opacity"
          >
            MindsetMugs
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-xs font-bold uppercase tracking-wider hover:text-gray-300 transition-colors"
            >
              Tienda
            </Link>
            <Link
              href="/about"
              className="text-xs font-bold uppercase tracking-wider hover:text-gray-300 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/cart"
              className="px-5 py-2.5 bg-white text-black text-xs font-black uppercase tracking-wider rounded-none hover:bg-gray-200 transition-colors"
            >
              Carrito ({cartCount})
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-900">
            <Link
              href="/products"
              className="block text-xs font-bold uppercase tracking-wider hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tienda
            </Link>
            <Link
              href="/about"
              className="block text-xs font-bold uppercase tracking-wider hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/cart"
              className="block px-5 py-2.5 bg-white text-black text-xs font-black uppercase tracking-wider rounded-none hover:bg-gray-200 transition-colors w-fit"
              onClick={() => setIsOpen(false)}
            >
              Carrito ({cartCount})
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
