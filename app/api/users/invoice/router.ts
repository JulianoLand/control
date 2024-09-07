import User from "@/lib/models/User";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const { userId } = auth()

        if (!userId){
            return new NextResponse("Não autorizado", { status: 401 })
        }

        const user = await User.findOne({ clerkId: userId })
        if (!user){
            return new NextResponse("Usuario não encontrado", { status: 404 })
        }

        // PAREI AQUI

        const { monthId } = await req.json()
        if (!monthId) {
            return new NextResponse("Mês é requirido", { status: 400 })
        }

    } catch(err){
        console.log("invoice_POST", err);
        return new NextResponse("Erro no servidor", { status: 500 })
    }
}