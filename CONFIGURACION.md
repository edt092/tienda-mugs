# Configuración de la Tienda Mugs

Esta guía te ayudará a configurar correctamente el sistema de carrito, checkout, Payphone y Formspree.

## 1. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Payphone - API Backend
PAYPHONE_TOKEN="Bearer tu_token_aqui"
PAYPHONE_API_URL="https://pay.payphonetodoesposible.com"

# Payphone - Frontend
NEXT_PUBLIC_PAYPHONE_TOKEN="tu_token_publico_aqui"
NEXT_PUBLIC_PAYPHONE_APP_ID="tu_app_id_aqui"

# Formspree
NEXT_PUBLIC_FORMSPREE_ID="tu_formspree_id_aqui"
```

## 2. Configurar Payphone

### Paso 1: Obtener credenciales
1. Accede a tu cuenta de Payphone: https://pay.payphonetodoesposible.com
2. Ve a Configuración > API
3. Copia tu **Token de Autenticación** (debe incluir "Bearer " al inicio)
4. Copia tu **App ID**

### Paso 2: Configurar variables de entorno
- `PAYPHONE_TOKEN`: Token para llamadas del backend (mantener secreto)
- `NEXT_PUBLIC_PAYPHONE_APP_ID`: App ID para cargar el script del botón
- `NEXT_PUBLIC_PAYPHONE_TOKEN`: Token público si tu implementación lo requiere

### Paso 3: Probar la integración
Consulta el archivo `PAYPHONE_INTEGRATION_GUIDE.md` para instrucciones detalladas de testing con Postman.

## 3. Configurar Formspree

### Paso 1: Crear formulario
1. Ve a https://formspree.io
2. Crea una cuenta o inicia sesión
3. Crea un nuevo formulario
4. Copia el ID del formulario (ejemplo: `xxxxxxxxxxx`)

### Paso 2: Configurar variable de entorno
```env
NEXT_PUBLIC_FORMSPREE_ID="xxxxxxxxxxx"
```

### Paso 3: Personalizar notificaciones
En Formspree puedes configurar:
- Email de notificación cuando llegue un pedido
- Auto-respuesta al cliente
- Formato de los emails

## 4. Estructura del Sistema

### Carrito de Compras
- **Archivo**: `lib/cart.ts`
- **Almacenamiento**: LocalStorage del navegador
- **Funciones principales**:
  - `addToCart()`: Añadir productos
  - `updateQuantity()`: Actualizar cantidades
  - `removeFromCart()`: Eliminar productos
  - `getCartTotal()`: Calcular total
  - `clearCart()`: Vaciar carrito

### Páginas

#### 1. Página de Carrito (`app/cart/page.tsx`)
- Muestra todos los productos en el carrito
- Permite ajustar cantidades
- Muestra resumen de precios
- Botón para proceder al checkout

#### 2. Página de Checkout (`app/checkout/page.tsx`)
- Formulario de datos del cliente
- Dos métodos de pago:
  - **Payphone**: Pago con tarjeta (integración completa)
  - **Transferencia Bancaria**: Redirige a WhatsApp con detalles del pedido
- Muestra logos de métodos de pago aceptados
- Resumen del pedido

### API Endpoint

#### Confirmación de Payphone (`app/api/payphone/confirm/route.ts`)
- Recibe `transactionId` y `clientTxId`
- Verifica el pago con la API de Payphone
- Retorna el estado de la transacción
- **Importante**: Este endpoint debe mantenerse en el backend por seguridad

## 5. Flujo de Compra

### Opción A: Pago con Tarjeta (Payphone)
1. Cliente añade productos al carrito
2. Va a checkout y completa el formulario
3. Selecciona "Pago con Tarjeta"
4. Hace clic en "Pagar"
5. Se abre el modal de Payphone
6. Cliente completa el pago
7. Sistema verifica el pago con Payphone API
8. Si es exitoso:
   - Envía datos a Formspree
   - Limpia el carrito
   - Redirige al inicio
9. Cliente recibe confirmación por email (Formspree)

### Opción B: Transferencia Bancaria
1. Cliente añade productos al carrito
2. Va a checkout y completa el formulario
3. Selecciona "Transferencia Bancaria"
4. Hace clic en "Continuar por WhatsApp"
5. Se abre WhatsApp con:
   - Datos del cliente
   - Dirección de envío
   - Lista de productos
   - Total a pagar
6. Ventas responde con datos bancarios
7. Cliente realiza transferencia
8. Envía comprobante por WhatsApp

## 6. Logos de Métodos de Pago

Los logos están en: `public/img/payment-logos-for-webs/payment-logos/`

Actualmente se muestran:
- Visa
- Mastercard
- American Express
- PayPal

Para añadir más logos, edita `app/checkout/page.tsx` en la sección de Payment Logos.

## 7. Personalización

### Cambiar número de WhatsApp
Busca y reemplaza `593967479210` en:
- `app/checkout/page.tsx`
- `components/WhatsAppButton.tsx`

### Política de envío
Actualmente: **Envío incluido solo en Quito**

Si deseas cambiar esto:
- Edita el mensaje en `app/cart/page.tsx`
- Edita el mensaje en `app/checkout/page.tsx`
- Para cobrar envío, añade la variable `shipping` en los cálculos de total

### Añadir más productos
Edita `lib/products.ts` siguiendo la estructura existente.

### Añadir más categorías
1. Añade la categoría en `app/products/page.tsx` en el array `categories`
2. Asegúrate de que los productos tengan la categoría correcta

## 8. Testing

### Probar el carrito
1. Ejecuta `npm run dev`
2. Añade productos desde la página de productos
3. Verifica que el contador del navbar se actualice
4. Ve al carrito y prueba:
   - Aumentar/disminuir cantidades
   - Eliminar productos
   - Ver el total

### Probar Payphone (Sandbox)
1. Usa tarjetas de prueba de Payphone
2. Consulta `PAYPHONE_INTEGRATION_GUIDE.md`
3. Usa Postman para verificar el endpoint de confirmación

### Probar Formspree
1. Completa un pedido de prueba
2. Verifica que llegue el email a tu cuenta de Formspree
3. Revisa que todos los datos se envíen correctamente

## 9. Seguridad

### Variables de Entorno
- **NUNCA** subas el archivo `.env.local` al repositorio
- Mantén `PAYPHONE_TOKEN` completamente secreto
- Solo usa `NEXT_PUBLIC_*` para valores que pueden exponerse al frontend

### Validación
- El formulario valida campos obligatorios
- La API de Payphone verifica transacciones en el backend
- LocalStorage es seguro para carritos de compra

## 10. Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en Vercel Dashboard
3. Despliega

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno en Site Settings
3. Despliega

**Importante**: Asegúrate de configurar TODAS las variables de entorno en tu plataforma de hosting.

## 11. Soporte

Si tienes problemas:
1. Revisa este archivo completo
2. Consulta `PAYPHONE_INTEGRATION_GUIDE.md`
3. Verifica que todas las variables de entorno estén configuradas
4. Revisa los logs de la consola del navegador
5. Verifica los logs del servidor de Next.js
