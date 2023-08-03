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
        trype: String,
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
    }
    },
    {
        timesStamps: true
    });

    const Productos = mongoose.model("productos",productoSchema,"productos");

    export default Productos;