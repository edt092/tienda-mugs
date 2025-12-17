# Guía Definitiva de Integración con la API de Payphone

Este documento sirve como una guía estandarizada para integrar la pasarela de pagos de Payphone en aplicaciones web. Está basado en las leacciones aprendidas y las mejores prácticas del proyecto "BebéSeguro" para optimizar y acelerar futuras implementaciones.

## Índice
1.  [Flujo de la Transacción](#1-flujo-de-la-transacción)
2.  [Prerrequisitos](#2-prerrequisitos)
3.  [Variables de Entorno](#3-variables-de-entorno)
4.  [Paso 1: Implementación en el Frontend](#4-paso-1-implementación-en-el-frontend)
5.  [Paso 2: Creación del Endpoint de Confirmación (Backend)](#5-paso-2-creación-del-endpoint-de-confirmación-backend)
6.  [Paso 3: Verificación y Pruebas con Postman](#6-paso-3-verificación-y-pruebas-con-postman)
7.  [Manejo de Errores Comunes](#7-manejo-de-errores-comunes)

---

## 1. Flujo de la Transacción

El proceso de pago con Payphone se divide en dos fases principales:

1.  **Preparación (Frontend):** El usuario hace clic en "Pagar". El frontend prepara la transacción con los datos del pedido y abre el botón de pago de Payphone. Payphone devuelve un `transactionId`.
2.  **Confirmación (Backend):** Una vez que el usuario completa (o cancela) la acción en la ventana de Payphone, el frontend envía el `transactionId` a nuestro propio backend. **Nuestro backend es el único que debe comunicarse con la API de Payphone para confirmar el estado final de la transacción**. Esto es crucial por seguridad.

```
Usuario          Frontend                Backend               Payphone API
   |                 |                       |                      |
   |---Pagar--->|                 |                      |
   |                 |--Prepara Btn.-->|                      |
   |                 |                       |                      |
   |<--Abre Modal Payphone--|                       |                      |
   |                 |                       |                      |
   |--Realiza Pago-->|-------------------------------------------->|
   |                 |                       |                      |
   |<--Cierra Modal--|                       |                      |
   |                 |                       |                      |
   |                 |--Enviar IDs---------->|                      |
   |                 |                       |--Confirmar()------->|
   |                 |                       |<--Estado Transacción|
   |                 |<--Respuesta Final-----|                      |
   |                 |                       |                      |
   |<--Muestra Éxito/Error--|                       |                      |

```

## 2. Prerrequisitos

- **Cuenta de Payphone:** Tener acceso a una cuenta de desarrollador o de producción en Payphone.
- **Token de Autenticación:** Obtener el Token de Autenticación desde el panel de configuración de Payphone. Este token es **secreto**.
- **Postman (Recomendado):** Para realizar pruebas de manera controlada. Puedes importar la colección `Payphone_API_Tests.postman_collection.json` de este proyecto como plantilla.

## 3. Variables de Entorno

Para mantener la seguridad y la flexibilidad entre entornos (desarrollo, producción), es **mandatorio** usar variables de entorno. **Nunca escribas el token directamente en el código.**

Crea un archivo `.env.local` (o configúralas en tu proveedor de hosting como Netlify, Vercel, etc.):

```env
# Token secreto proporcionado por Payphone
PAYPHONE_TOKEN="Bearer eyJhbGciOiJI..."

# URL base de la API de Payphone
PAYPHONE_API_URL="https://pay.payphonetodoesposible.com"
```

## 4. Paso 1: Implementación en el Frontend

El frontend es responsable de mostrar el botón de pago.

1.  **Genera un ID de cliente único:** Antes de llamar a Payphone, crea un ID de transacción único para tu sistema (ej: `orden-12345`, un UUID, etc.). Esto es el `clientTransactionId`.
2.  **Configura el botón de Payphone:** Usa el script de Payphone para configurar el botón.

    ```javascript
    // Ejemplo de configuración del botón en el frontend
    const clientTxId = `order-${Date.now()}`; // ¡Usa un ID más robusto en producción!

    payphone.Button({
      token: "TU_TOKEN_PUBLICO_SI_APLICA", // O usa el token del backend
      btnHorizontal: true,
      btnOutline: false,
      amount: 1000, // Monto en centavos (ej: 10.00 USD)
      tax: 0,
      amountWithTax: 1000,
      currency: "USD",
      clientTransactionId: clientTxId,
      // URL a la que Payphone hará un POST si la transacción es aprobada (opcional, pero la confirmación por API es más segura)
      // responseUrl: "https://tu-tienda.com/api/payphone/confirm",

      onComplete: function (result) {
        // Esta función se llama cuando el modal de Payphone se cierra.
        // 'result' contiene el transactionId.
        if (result.transactionId) {
          // Enviar los IDs a nuestro backend para la confirmación segura.
          confirmarPagoEnBackend(result.transactionId, clientTxId);
        }
      }
    }).render("#payphone-button");

    async function confirmarPagoEnBackend(transactionId, clientTxId) {
      try {
        const response = await fetch('/api/payphone/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: transactionId,
            clientTxId: clientTxId
          })
        });
        const data = await response.json();

        if (data.success) {
          // Pago aprobado: redirigir a página de éxito, mostrar mensaje, etc.
          console.log("Pago confirmado con éxito:", data.message);
        } else {
          // Pago fallido o pendiente: mostrar mensaje de error.
          console.error("Fallo en la confirmación del pago:", data.message);
        }
      } catch (error) {
        console.error("Error de red al confirmar el pago:", error);
      }
    }
    ```

## 5. Paso 2: Creación del Endpoint de Confirmación (Backend)

Este es el paso más importante. Crea un endpoint en tu backend (ej: `POST /api/payphone/confirm`) que se encargue de la comunicación segura con Payphone.

```javascript
// Ejemplo de un endpoint en Next.js / Netlify Functions (pages/api/payphone/confirm.js)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { id, clientTxId } = req.body;

  if (!id || !clientTxId) {
    return res.status(400).json({ success: false, message: 'Faltan los parámetros id y clientTxId' });
  }

  const PAYPHONE_API_URL = process.env.PAYPHONE_API_URL;
  const PAYPHONE_TOKEN = process.env.PAYPHONE_TOKEN;

  try {
    const response = await fetch(`${PAYPHONE_API_URL}/api/button/V2/Confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': PAYPHONE_TOKEN
      },
      body: JSON.stringify({ id, clientTxId })
    });

    const data = await response.json();

    // Analizar la respuesta de Payphone
    if (data.transactionStatus === "Approved") {
      // ¡ÉXITO! El pago fue aprobado.
      // Aquí debes:
      // 1. Actualizar el estado del pedido en tu base de datos a "Pagado".
      // 2. Enviar un email de confirmación al cliente.
      // 3. Reducir el stock del producto.
      return res.status(200).json({ success: true, message: `Pago aprobado. Estado: ${data.transactionStatus}` });
    } else {
      // El pago fue Rechazado, Cancelado o sigue Pendiente.
      // Aquí debes:
      // 1. Registrar el intento fallido.
      // 2. No actualizar el pedido a "Pagado".
      return res.status(400).json({ success: false, message: `El pago no fue aprobado. Estado: ${data.transactionStatus}` });
    }

  } catch (error) {
    console.error('Error al confirmar con la API de Payphone:', error);
    return res.status(500).json({ success: false, message: 'Error interno del servidor.' });
  }
}
```

## 6. Verificación y Pruebas con Postman

Usa la colección de Postman para verificar cada parte del proceso de forma aislada.

1.  **Test de Conexión:** Llama al endpoint `Confirm` de Payphone con un ID falso (`999999`).
    -   **Resultado esperado:** Un error `404 Not Found` con el mensaje `Transaction not found`. Esto es **bueno**, significa que tu `PAYPHONE_TOKEN` es correcto y tienes conexión con la API.
2.  **Confirmar Transacción Real (Directa):** Después de generar una transacción real desde tu frontend, toma el `transaction_id` y `client_transaction_id` y úsalos en la petición "Confirmar Transacción Real" de Postman.
    -   **Resultado esperado:** Un `200 OK` con los detalles de la transacción y el `transactionStatus`.
3.  **Confirmar - Local/Producción:** Prueba tu propio endpoint (`/api/payphone/confirm`) enviándole los mismos IDs.
    -   **Resultado esperado:** Deberías obtener la respuesta que programaste en tu API (`{ success: true, ... }` o `{ success: false, ... }`), no la respuesta directa de Payphone. Esto confirma que tu backend está procesando la lógica correctamente.

## 7. Manejo de Errores Comunes

- **`401 Unauthorized`:** Tu `PAYPHONE_TOKEN` es incorrecto, ha expirado o no tiene el formato `Bearer ...`. Verifica la variable de entorno.
- **`404 Not Found` (en tu API):** La URL de tu endpoint (`/api/payphone/confirm`) es incorrecta.
- **`500 Internal Server Error`:** Revisa los logs de tu servidor. Probablemente las variables de entorno no están cargadas correctamente o hay un error en la lógica del endpoint.
- **El pago se aprueba en Payphone pero no en tu sistema:** Casi siempre, esto ocurre porque el flujo de confirmación del frontend al backend falló (paso `onComplete`). Asegúrate de que la llamada a tu API se está realizando y de que tu backend funciona.
