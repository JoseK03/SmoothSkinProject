import Droguerias from "../models/Droguerias.js";

const getDrogueria = async (req,res) =>{
    const obtener = await Droguerias.find();
    res.json(obtener);
}

const getUnaDrogueria = async (req,res) =>{
    const obtener = await Droguerias.findOne({_id:req.params.id});
    res.json(obtener);
}

const postDrogueria = async (req,res) =>{
    const agregar = new Droguerias(req.body);
    try {
        const nueva = await agregar.save();
        res.json(nueva);
    } catch (error) {
        console.log(error);
    };
}

const deleteDrogueria = async (req,res) =>{
    try {
        await Droguerias.findOne({_id:req.params.id});
        res.send();
    } catch (error) {
        console.log(error);
    };
}

const updateDrogueria = async(req,res) =>{
    try {
        const editar = Droguerias.findOne({_id:req.params.id});
        if(req.body.nombre_dogueria){
            editar.nombre_drogueria= req.body.nombre_drogueria;
        }
        if(req.body.NIT){
            editar.nit= req.body.NIT;
        }
        if(req.body.celular){
            editar.celular= req.body.celular;
        }
        if(req.body.representante){
            editar.representante= req.body.representante;
        }
        await editar.send();
        res.json(editar)
    } catch (error) {
        console.log(error);
    };
}

export {getDrogueria,getUnaDrogueria,postDrogueria,deleteDrogueria,updateDrogueria};