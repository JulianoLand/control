import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { userId } = auth()

        if (!userId) {
            return new NextResponse("Não autorizado", { status: 403 })
        }

        await connectDB();

        let user = await User.findOne({ clerkId: userId })

        if (!user) {
            user = await User.create({ clerkId: userId })
            await user.save()
        }

        return NextResponse.json(user, { status: 200 })
    } catch (err) {
        console.log("Sem acesso ao BD: ", err)
        return new NextResponse("Erro interno", { status: 500 })
    }

}