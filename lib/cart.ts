import { Product } from '@/types/product';

export interface CartItem extends Product {
  quantity: number;
}

const CART_STORAGE_KEY = 'tienda-mugs-cart';

export const cartUtils = {
  // Obtener el carrito del localStorage
  getCart: (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  },

  // Guardar el carrito en localStorage
  saveCart: (cart: CartItem[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  },

  // Añadir producto al carrito
  addToCart: (product: Product, quantity: number = 1): CartItem[] => {
    const cart = cartUtils.getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    cartUtils.saveCart(cart);
    return cart;
  },

  // Actualizar cantidad de un producto
  updateQuantity: (productId: string, quantity: number): CartItem[] => {
    const cart = cartUtils.getCart();
    const item = cart.find(item => item.id === productId);

    if (item) {
      item.quantity = Math.max(1, quantity);
      cartUtils.saveCart(cart);
    }

    return cart;
  },

  // Eliminar producto del carrito
  removeFromCart: (productId: string): CartItem[] => {
    const cart = cartUtils.getCart().filter(item => item.id !== productId);
    cartUtils.saveCart(cart);
    return cart;
  },

  // Limpiar todo el carrito
  clearCart: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(CART_STORAGE_KEY);
  },

  // Calcular el total del carrito
  getCartTotal: (cart: CartItem[]): number => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // Obtener el número total de items
  getCartItemsCount: (cart: CartItem[]): number => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }
};
