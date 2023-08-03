import mongoose from "mongoose";

const conectarDB = async() =>{
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        const url = `conexion establecida a la base de datos por el puerto ${connectDB.connection.port} y en el host ${connectDB.connection.host}`;
        console.log(url); 
    } catch (error) {
        console.log(error);
    }
}

export default conectarDB;