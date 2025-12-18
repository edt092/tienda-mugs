'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cartUtils, CartItem } from '@/lib/cart';
import { useRouter } from 'next/navigation';
import WhatsAppButton from '@/components/WhatsAppButton';

declare global {
  interface Window {
    payphone: any;
  }
}

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<'payphone' | 'transfer'>('payphone');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'Ecuador',
    zipCode: '',
    details: ''
  });

  useEffect(() => {
    const cartData = cartUtils.getCart();
    setCart(cartData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Cargar el script de Payphone cuando el método de pago sea payphone
    if (paymentMethod === 'payphone') {
      const appId = process.env.NEXT_PUBLIC_PAYPHONE_APP_ID;
      if (appId && !document.querySelector(`script[src*="payphonetodoesposible.com"]`)) {
        const script = document.createElement('script');
        script.src = `https://pay.payphonetodoesposible.com/api/button/js?appId=${appId}`;
        script.async = true;
        script.onload = () => {
          console.log('Payphone script cargado correctamente');
        };
        script.onerror = () => {
          console.error('Error al cargar el script de Payphone');
        };
        document.body.appendChild(script);
      }
    }
  }, [paymentMethod]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendOrderEmailNotification = async (orderId: string, paymentMethod: string, transactionId?: string) => {
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) return;

    const total = cartUtils.getCartTotal(cart);
    const orderDate = new Date().toLocaleString('es-EC', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'America/Guayaquil'
    });

    // Crear lista detallada de productos para el email
    const productsList = cart.map(item => {
      const itemSubtotal = item.price * item.quantity;
      return {
        nombre: item.name,
        cantidad: item.quantity,
        precioUnitario: `$${item.price.toFixed(2)}`,
        subtotal: `$${itemSubtotal.toFixed(2)}`,
        imagen: item.image
      };
    });

    // Crear objeto de orden completo
    const orderData = {
      // Información del pedido
      '_subject': `🛒 Nuevo Pedido #${orderId} - Tienda Mugs`,
      numeroPedido: orderId,
      fechaHora: orderDate,
      metodoPago: paymentMethod,
      ...(transactionId && { transaccionPayphone: transactionId }),

      // Información del cliente
      nombreCompleto: `${formData.firstName} ${formData.lastName}`,
      nombre: formData.firstName,
      apellidos: formData.lastName,
      email: formData.email,
      telefono: formData.phone,

      // Dirección de envío
      direccion: formData.address,
      ciudad: formData.city,
      codigoPostal: formData.zipCode || 'No especificado',
      pais: formData.country,
      detallesAdicionales: formData.details || 'Ninguno',

      // Productos
      productos: productsList,
      cantidadProductos: cart.length,
      totalArticulos: cartUtils.getCartItemsCount(cart),

      // Resumen de productos (texto plano para email)
      resumenProductos: cart.map(item =>
        `${item.quantity}x ${item.name} - $${item.price.toFixed(2)} c/u = $${(item.price * item.quantity).toFixed(2)}`
      ).join('\n'),

      // Totales
      total: `$${total.toFixed(2)}`,
      totalNumerico: total,
      envio: 'Incluido solo en Quito',

      // Notas
      nota: '✓ Envío incluido solo en Quito',
    };

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error('Error al enviar email de confirmación');
      }

      return true;
    } catch (error) {
      console.error('Error al enviar notificación por email:', error);
      throw error;
    }
  };

  const handleTransferPayment = async () => {
    if (!validateForm()) return;

    const orderDetails = cart.map(item =>
      `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const total = cartUtils.getCartTotal(cart);
    const orderId = `TM-${Date.now()}`;

    // Enviar notificación por email a través de Formspree
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (formspreeId) {
      try {
        await sendOrderEmailNotification(orderId, 'Transferencia Bancaria');
      } catch (error) {
        console.error('Error al enviar notificación por email:', error);
      }
    }

    const message = encodeURIComponent(
      `Hola! Quiero realizar una compra por transferencia bancaria:\n\n` +
      `*PEDIDO: ${orderId}*\n\n` +
      `*DATOS DE CONTACTO:*\n` +
      `Nombre: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n\n` +
      `*DIRECCIÓN DE ENVÍO:*\n` +
      `${formData.address}\n` +
      `${formData.city}, ${formData.zipCode}\n` +
      `${formData.country}\n` +
      `${formData.details ? 'Detalles: ' + formData.details : ''}\n\n` +
      `*PRODUCTOS:*\n${orderDetails}\n\n` +
      `*TOTAL: $${total.toFixed(2)}*\n` +
      `_Envío incluido solo en Quito_`
    );

    window.open(`https://wa.me/593967479210?text=${message}`, '_blank');
  };

  const validateForm = () => {
    if (!formData.email || !formData.phone || !formData.firstName ||
        !formData.lastName || !formData.address || !formData.city) {
      alert('Por favor completa todos los campos obligatorios');
      return false;
    }
    return true;
  };

  const handlePayphonePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const total = cartUtils.getCartTotal(cart);
    const clientTxId = `order-${Date.now()}`;

    // Esperar a que el script de Payphone esté cargado
    const waitForPayphone = () => {
      return new Promise((resolve, reject) => {
        let attempts = 0;
        const maxAttempts = 20; // 10 segundos máximo

        const checkPayphone = setInterval(() => {
          attempts++;

          if (window.payphone) {
            clearInterval(checkPayphone);
            resolve(true);
          } else if (attempts >= maxAttempts) {
            clearInterval(checkPayphone);
            reject(new Error('Timeout esperando a Payphone'));
          }
        }, 500);
      });
    };

    try {
      await waitForPayphone();

      // Configurar el botón de Payphone
      window.payphone.Button({
        token: process.env.NEXT_PUBLIC_PAYPHONE_TOKEN,
        btnHorizontal: true,
        btnOutline: false,
        amount: Math.round(total * 100), // Monto en centavos
        tax: 0,
        amountWithTax: Math.round(total * 100),
        currency: "USD",
        clientTransactionId: clientTxId,

        onComplete: async function (result: any) {
          if (result.transactionId) {
            try {
              const response = await fetch('/api/payphone/confirm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  id: result.transactionId,
                  clientTxId: clientTxId
                })
              });

              const data = await response.json();

              if (data.success) {
                // Enviar notificación por email con todos los detalles del pedido
                try {
                  await sendOrderEmailNotification(
                    clientTxId,
                    'Pago con Tarjeta (Payphone)',
                    result.transactionId
                  );
                } catch (error) {
                  console.error('Error al enviar notificación por email:', error);
                  // Continuar aunque falle el email
                }

                // Limpiar carrito
                cartUtils.clearCart();

                // Redirigir a página de éxito
                alert('¡Pago exitoso! Recibirás un correo de confirmación.');
                router.push('/');
              } else {
                alert('Error en el pago: ' + data.message);
              }
            } catch (error) {
              console.error('Error al confirmar el pago:', error);
              alert('Error al procesar el pago. Por favor contacta con soporte.');
            }
          }
        }
      }).render("#payphone-button");
    } catch (error) {
      console.error('Error al cargar Payphone:', error);
      alert('Error al cargar el sistema de pago. Por favor recarga la página.');
    }
  };

  const subtotal = cartUtils.getCartTotal(cart);
  const total = subtotal;

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-6 uppercase">Checkout</h1>
          <p className="text-gray-400 mb-8">Tu carrito está vacío</p>
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-white text-black font-bold uppercase hover:bg-gray-200 transition-all"
          >
            Ver Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black mb-12 uppercase tracking-tight">
            Finalizar Compra
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div>
              <form className="space-y-8">
                {/* Información de Contacto */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">
                    Información de Contacto
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:outline-none focus:border-white transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:outline-none focus:border-white transition-all"
                        placeholder="+593 999 999 999"
                      />
                    </div>
                  </div>
                </div>

                {/* Dirección de Envío */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">
                    Dirección de Envío
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:outline-none focus:border-white transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Apellidos *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:outline-none focus:border-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-2">
                        Dirección *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:outline-none focus:border-white transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-2">
                          Ciudad *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:outline-none focus:border-white transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                          Código Postal
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:outline-none focus:border-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-2">
                        País *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:outline-none focus:border-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="details" className="block text-sm font-medium mb-2">
                        Detalles adicionales
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:outline-none focus:border-white transition-all resize-none"
                        placeholder="Referencias, instrucciones de entrega, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Método de Pago */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">
                    Método de Pago
                  </h2>

                  {/* Payment Logos */}
                  <div className="mb-6 p-4 bg-gray-950 border border-gray-800">
                    <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">
                      Métodos de pago aceptados:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Image
                        src="/img/payment-logos-for-webs/payment-logos/Rounded Corners/PNG/medium/visa.png"
                        alt="Visa"
                        width={60}
                        height={40}
                        className="h-8 w-auto"
                      />
                      <Image
                        src="/img/payment-logos-for-webs/payment-logos/Rounded Corners/PNG/medium/mastercard.png"
                        alt="Mastercard"
                        width={60}
                        height={40}
                        className="h-8 w-auto"
                      />
                      <Image
                        src="/img/payment-logos-for-webs/payment-logos/Rounded Corners/PNG/medium/american-express.png"
                        alt="American Express"
                        width={60}
                        height={40}
                        className="h-8 w-auto"
                      />
                      <Image
                        src="/img/payment-logos-for-webs/payment-logos/Rounded Corners/PNG/medium/paypal.png"
                        alt="PayPal"
                        width={60}
                        height={40}
                        className="h-8 w-auto"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Payphone Option */}
                    <label className={`block p-4 border-2 cursor-pointer transition-all ${
                      paymentMethod === 'payphone'
                        ? 'border-white bg-gray-900'
                        : 'border-gray-800 hover:border-gray-600'
                    }`}>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="payphone"
                          checked={paymentMethod === 'payphone'}
                          onChange={(e) => setPaymentMethod('payphone')}
                          className="mr-3"
                        />
                        <div>
                          <span className="font-bold uppercase">Pago con Tarjeta (Payphone)</span>
                          <p className="text-xs text-gray-400 mt-1">
                            Paga de forma segura con tarjeta de crédito o débito
                          </p>
                        </div>
                      </div>
                    </label>

                    {/* Transfer Option */}
                    <label className={`block p-4 border-2 cursor-pointer transition-all ${
                      paymentMethod === 'transfer'
                        ? 'border-white bg-gray-900'
                        : 'border-gray-800 hover:border-gray-600'
                    }`}>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="transfer"
                          checked={paymentMethod === 'transfer'}
                          onChange={(e) => setPaymentMethod('transfer')}
                          className="mr-3"
                        />
                        <div>
                          <span className="font-bold uppercase">Transferencia Bancaria</span>
                          <p className="text-xs text-gray-400 mt-1">
                            Te enviaremos los datos bancarios por WhatsApp
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Payment Buttons */}
                  <div className="mt-6">
                    {paymentMethod === 'payphone' ? (
                      <div className="space-y-4">
                        <div id="payphone-button" className="payphone-container"></div>
                        <button
                          onClick={handlePayphonePayment}
                          type="button"
                          className="w-full px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-all"
                        >
                          Pagar ${total.toFixed(2)} con Tarjeta
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={handleTransferPayment}
                        type="button"
                        className="w-full px-8 py-4 bg-green-600 text-white font-bold uppercase tracking-wider hover:bg-green-700 transition-all flex items-center justify-center gap-3"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Continuar por WhatsApp
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-gray-950 border border-gray-800 p-6 sticky top-24">
                <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">
                  Tu Pedido
                </h2>

                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-800">
                      <div className="relative w-20 h-20 flex-shrink-0 bg-gray-900">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm uppercase">{item.name}</h3>
                        <p className="text-xs text-gray-400 mt-1">
                          Cantidad: {item.quantity}
                        </p>
                        <p className="text-sm font-bold mt-2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t border-gray-800 pt-4">
                  <div className="flex justify-between text-xl">
                    <span className="font-black uppercase">Total</span>
                    <span className="font-black">${total.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-400 pt-2">
                    ✓ Envío incluido solo en Quito
                  </p>
                </div>

                <Link
                  href="/cart"
                  className="block w-full mt-6 text-center text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
                >
                  ← Volver al Carrito
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton productName="Checkout - Asistencia con tu pedido" />
    </>
  );
}
