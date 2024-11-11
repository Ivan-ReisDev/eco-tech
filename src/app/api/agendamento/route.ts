// pages/api/submit-form.ts

import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
 
    // Lê o corpo da requisição
    const { name, address, date, time, email, cpf }: { name: string, address: string, date: string, time: string, email: string, cpf: string } = await req.json();

    // Verifica se todos os campos estão presentes
    if (!name || !address || !date || !time || !email || !cpf) {
      return NextResponse.json(
        {
          success: false,
          message: 'Todos os campos são obrigatórios.',
        },
        { status: 400 }
      );
    }

    // Retorna sucesso
    return NextResponse.json(
      {
        success: true,
        message: 'Cadastro enviado com sucesso!',
      },
      { status: 200 }
    );
 
}
