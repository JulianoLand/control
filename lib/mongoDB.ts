import mongoose from "mongoose"

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL || "");
        console.log("BD conectado");
    } catch(err) {
        console.log("erro ao conectar BD: ", err)
    }
}




// import mongoose from "mongoose";

// // eslint-disable-next-line prefer-const
// let isConnected: boolean = false;

// export const connectToDB = async (): Promise<void> => {
//     mongoose.set("strictQuery", true)

//     if (isConnected) {
//         console.log("Banco de dados conectado");
//         return;
//     }

//     try {
//         await mongoose.connect(process.env.MONGODB_URL || "", {
//             dbName: "User"
//         })

//         isConnected = true;
//         console.log("Mongo conectado!");
//     } catch (err){
//         console.log("falha ao conectar", err)
//     }
// }