import Categorias from "../models/Categorias.js";


const getCategorias = async(req,res) =>{
    const obtener = await Categorias.find();
    res.json(obtener);
}

const getOneCategoria = async (req,res) =>{
    const obtenerCategoria = await Categorias.findOne({_id:req.params.id});
    res.json(obtenerCategoria);
}

const postCategoria = async (req,res) =>{
    const añadir = new Categorias.send();
    try {
        const nueva = añadir.save();
        res.json(nueva);
    } catch (error) {
        console.log(error);
    };
}

const deleteCategoria = async(req,res)=>{
    try {
        await Categorias.findOne({_id:req.params.id});
        res.send();
    } catch (error) {
        console.log(error);
    };
}

const updateCategorias = async (req,res) =>{
    try {
        const editar = Categorias.findOne({_id:req.params.id});
        if(req.body.nombre){
            editar.nombre = req.body.nombre
        }
    } catch (error) {
        console.log(error);
    };
}

export {getCategorias,getOneCategoria,postCategoria,deleteCategoria,updateCategorias};