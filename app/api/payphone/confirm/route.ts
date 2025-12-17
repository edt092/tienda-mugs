import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { id, clientTxId } = await req.json();

    if (!id || !clientTxId) {
      return NextResponse.json(
        { success: false, message: 'Faltan los parámetros id y clientTxId' },
        { status: 400 }
      );
    }

    const PAYPHONE_API_URL = process.env.PAYPHONE_API_URL;
    const PAYPHONE_TOKEN = process.env.PAYPHONE_TOKEN;

    if (!PAYPHONE_API_URL || !PAYPHONE_TOKEN) {
      console.error('Variables de entorno de Payphone no configuradas');
      return NextResponse.json(
        { success: false, message: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    const response = await fetch(`${PAYPHONE_API_URL}/api/button/V2/Confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': PAYPHONE_TOKEN
      },
      body: JSON.stringify({ id, clientTxId })
    });

    const data = await response.json();

    if (data.transactionStatus === "Approved") {
      // Pago aprobado: aquí deberías actualizar tu base de datos, enviar emails, etc.
      return NextResponse.json({
        success: true,
        message: `Pago aprobado. Estado: ${data.transactionStatus}`,
        transactionData: data
      });
    } else {
      // Pago no aprobado
      return NextResponse.json({
        success: false,
        message: `El pago no fue aprobado. Estado: ${data.transactionStatus || 'Desconocido'}`,
        transactionData: data
      }, { status: 400 });
    }

  } catch (error) {
    console.error('Error al confirmar con la API de Payphone:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
