import mongoose from "mongoose";

const categoriasSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    }
    },
    {
        timestamps:true
    })

    const Categorias = mongoose.model("categorias",categoriasSchema,"categorias");

    export default Categorias;