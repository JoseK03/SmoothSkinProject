import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        required:true,
        default:'admin'
    }
    },
    {
        timestamps:true
    });

    const Usuarios = mongoose.model('usuarios',usuarioSchema,'usuarios');

    export default Usuarios;