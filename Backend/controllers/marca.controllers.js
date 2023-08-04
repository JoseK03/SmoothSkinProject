import Marca from "../models/Marca.js";

const getMarca = async (req,res) =>{
    const obtener = await Marca.find();
    res.json(obtener);
}

const getUnaMarcar = async (req,res) =>{
    const obtenerUno = await Marca.findOne({_id:req.params.id});
    res.json(obtenerUno);
}

const postMarca = async (req,res) =>{
    const nuevaMarca = new Marca(req.body);
    try {
        const agregar = await nuevaMarca.save();
        res.json(agregar);
    } catch (error) {
        console.log(error);
    }
}

const deleteMarca = async (req,res) =>{
    try {
        await Marca.findOne({_id:req.params.id});
        res.send();
    } catch (error) {
        console.log(error);
    }
}

const updateMarca = async (req,res) =>{
    try {
        const editar = Marca.findOne({_id:req.params.id});
        if(req.body.nombre_marca){
            editar.nombre_marca = req.body.nombre_marca;
        }
        await editar.send();
        res.json(editar);
    } catch (error) {
        console.log(error);
    };
}

export {getMarca, getUnaMarcar, postMarca , deleteMarca , updateMarca};

