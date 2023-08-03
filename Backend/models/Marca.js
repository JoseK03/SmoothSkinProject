import mongoose from "mongoose";

const marcaSchema = mongoose.Schema({
    nombre_marca:{
        type:String,
        required:true
    }
    },
    {
        timeStamps:true
    });

    const Marca = mongoose.model("marcas", marcaSchema , "marcas");

    export default Marca;