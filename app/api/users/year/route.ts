import User from "@/lib/models/User"
// import Year from "@/lib/models/Year"
import { connectDB } from "@/lib/mongoDB"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const { userId } = auth()

        if(!userId) {
            return new NextResponse("Não autorizado", { status: 403 })
        }

        await connectDB();

        const user = await User.findOne({ clerkId: userId })

        if (!user){
            return new NextResponse("Usuário não encontrado", { status: 404 })
        }
        
        const date = new Date().getFullYear()
        // date++;
        console.log('data incrementada: ',date.toString())

        // const year = await User.find()
        const year = await user.year

        console.log('puxar o que tem no array: ',year);
        if (year == ""){
            console.log('estou no if')
            //year = await user.year.includes({ year: date })
            // user.year.push(await Year.create({title:date}))
            user.year.push([date.toString()])
        } else if(year.includes(date)) {
            console.log("ja tem ano declarado")
            // user.year.push(date.toString())
        }

        await user.save()
        console.log('Depois do if',year);

        return NextResponse.json(year, { status: 200 })
    } catch(err){
        console.log("Sem acesso", err)
        return new NextResponse("Erro interno GET_year", { status: 500 })
    }
}