import { Metadata } from 'next';
import CartPageClient from './CartPageClient';

export const metadata: Metadata = {
  title: 'Tu Carrito de Compras',
  description: 'Revisa los productos en tu carrito de MindsetMugs. Tazas y tumblers motivacionales para emprendedores.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CartPage() {
  return <CartPageClient />;
}
