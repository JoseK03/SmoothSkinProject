import Productos from "../models/Productos.js";

const getProductos = async (req,res)=>{
    const obtener = await Productos.find();
    res.json(obtener);
}

const getOneProducto = async (req,res) =>{
    try {
        const obtenerUno = await Productos.findOne({_id:req.params.id});
        res.json(obtenerUno);
    } catch (error) {
        console.log(error);
    }
}

const postProductos = async (req,res) =>{
    const agregar = new Productos(req.body);
    try {
        const nuevo = await agregar.save();
        res.json(nuevo);
    } catch (error) {
        console.log(error);
    }
}

const deleteProductos = async (req,res) =>{
    try {
        await Productos.deleteOne({_id:req.params.id});
        res.send();
    } catch (error) {
        console.log(error);
    }
}

const updateProducto = async (req,res) =>{
    try {
        const editar = Productos.findOne({_id:req.params.id});
        if(req.body.nombre){
            editar.nombre = req.body.nombre
        }
        if(req.body.marca){
            editar.marca = req.body.marca
        }
        if(req.body.descripcion){
            editar.descripcion = req.body.descripcion
        }
        if(req.body.usos){
            editar.usos = req.body.usos
        }
    } catch (error) {
        
    }
}



export {getProductos , getOneProducto, postProductos, deleteProductos, updateProducto };