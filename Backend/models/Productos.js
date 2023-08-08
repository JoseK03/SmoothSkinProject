import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre_producto:{
        type: String,
        required:true
    },
    marca:{
        type: String,
        required:true
    },
    descripcion:{
        type: String,
        required: true
    },
    usos:{
        type:Array,
        required:true
    },
    precios:{
        type:Array,
        required:true
    },
    categoria:{
        type:Array,
        required:true
    },
    imagen:{
        type: String,
        required:true,
        default:'azelaic.png'
    }
    },
    {
        timestamps: true
    });

    const Productos = mongoose.model("productos",productoSchema,"productos");

    export default Productos;