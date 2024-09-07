import mongoose from "mongoose";

// eslint-disable-next-line prefer-const
let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log("Banco de dados conectado");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL || "", {
            dbName: "User"
        })
    } catch (err){
        console.log("falha ao conectar", err)
    }
}