import Usuarios from "../models/Usuarios.js";

const getUsuarios = async (req,res)=>{
    const obtener = await Usuarios.find();
    res.json(obtener);
}

const getOneUsuarios = async(req,res)=>{
    const obtenerUno = await Usuarios.findOne({_id:req.params.id});
    res.json(obtenerUno);
}

const postUsuarios = async (req,res)=>{
    const nuevoUsuario = new Usuarios(req.body);
    try {
        const nuevo = await nuevoUsuario.save();
        res.json(nuevo);
    } catch (error) {
        console.log(error);
    }
}

const deleteUsuario = async (req,res)=>{
    try {
        await Usuarios.deleteOne({_id:req.params.id});
        res.send()
    } catch (error) {
        console.log(error);
    }
}

const updateUsuario = async (req,res)=>{
    try {
        const editar = Usuarios.findOne({_id:req.params.id});
        if(req.body.username){
            editar.username = req.body.username;
        }
        if(req.body.password){
            editar.password = req.body.password;
        }
        if(req.body.rol){
            editar.rol = req.body.rol
        }
        await editar.send();
        res.json(editar)
    } catch (error) {
        console.log(error);
    }
}

export {getOneUsuarios, getUsuarios , postUsuarios, deleteUsuario,updateUsuario};