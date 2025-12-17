'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cartUtils, CartItem } from '@/lib/cart';

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCart(cartUtils.getCart());
    setIsLoading(false);
  }, []);

  const updateQuantity = (productId: string, quantity: number) => {
    const updatedCart = cartUtils.updateQuantity(productId, quantity);
    setCart(updatedCart);
  };

  const removeItem = (productId: string) => {
    const updatedCart = cartUtils.removeFromCart(productId);
    setCart(updatedCart);
  };

  const total = cartUtils.getCartTotal(cart);

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">Cargando carrito...</p>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-6 uppercase tracking-tight">
            Tu Carrito
          </h1>
          <p className="text-gray-400 mb-8">Tu carrito está vacío</p>
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-all"
          >
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-black mb-12 uppercase tracking-tight">
          Tu Carrito
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-gray-950 border border-gray-800 p-4 sm:p-6 flex gap-4 sm:gap-6"
              >
                {/* Product Image */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-lg font-bold uppercase hover:text-gray-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-400 mt-1 normal-case">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-8 h-8 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                      >
                        −
                      </button>
                      <span className="text-lg font-bold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-black">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Eliminar producto"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-950 border border-gray-800 p-6 sticky top-24">
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">
                Resumen
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xl">
                  <span className="font-black">Total</span>
                  <span className="font-black">${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-400 pt-2">
                  ✓ Envío incluido solo en Quito
                </p>
              </div>

              <Link
                href="/checkout"
                className="block w-full px-8 py-4 bg-white text-black text-center font-bold uppercase tracking-wider hover:bg-gray-200 transition-all hover:scale-105"
              >
                Proceder al Pago
              </Link>

              <Link
                href="/products"
                className="block w-full mt-4 text-center text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                ← Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
