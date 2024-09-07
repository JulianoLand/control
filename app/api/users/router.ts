import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req: NextRequest) => {
    try {
        const { userId } = auth()
        
        if (!userId) {
            return new NextResponse("Não autorizado", { status: 403 })
        }

        await connectToDB()

        let user = await User.findOne({ clerkId: userId })

        // Se não houver usuário no BD
        if (!user) {
            user = await User.create({ clerkId: userId })
            await user.save()
        }

        return NextResponse.json(user, { status: 200 })

    } catch (err) {
        console.log("Erro GET User", err)
        return new NextResponse("Erro no servidor interno", { status: 500 })
    }
}