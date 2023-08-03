import mongoose from "mongoose";

const drogueriaSchema = mongoose.Schema(
   { nombre_drogueria:{
        type:String,
        required:true
    },
    NIT:{
        type:Number,
        required:true

    },
    celular:{
        type:Number,
        required:true
    },
    representante:{
        type:String,
        required:true
    }
    },
    {
        timestamps:true
    });

    const Droguerias = mongoose.model("droguerias", drogueriaSchema,"droguerias");

    export default Droguerias;
    