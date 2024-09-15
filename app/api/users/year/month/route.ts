import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async (/*req: NextRequest*/) => {
    try {
        const { userId } = auth()

        if (!userId) {
            return new NextResponse("Não autorizado", { status: 403 })
        }

        await connectDB();

        const user = await User.findOne({ clerkId: userId })

        if (!user) {
            return new NextResponse("Usuario não encontrado", { status: 404 })
        }

        // const date = new Date().getFullYear()
        // const year = await user.year

    } catch (err) {
        console.log("Erro no POST month", err)
        return new NextResponse("Erro de execução POST_Month", { status: 500 })
    }
}