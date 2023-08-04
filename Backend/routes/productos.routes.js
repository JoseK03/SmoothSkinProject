import { getProductos, getOneProducto , postProductos , deleteProductos , updateProducto , getOneProductoMarca} from "../controllers/productos.controllers.js";
import {Router} from "express";
import {check} from "express-validator";
import validateDocuments from '../middlewares/validate.documents.js';
import Marca from '../models/Marca.js';
import Categorias from '../models/Categorias.js';

const router = Router();

router.get("/get", getProductos);
router.post("/add",[
    check('nombre_producto','nombre es requierido').not().isEmpty(),
    check('marca').custom(async(marca='')=>{
        const existeMarca = await Marca.findOne({marca});
        if(!existeMarca){
            throw new Error(`La marca ${marca} no está registrada en la base de datos`)
        }
    }),
    check('categoria').custom(async(nombre='')=>{
        const existeCategoria = await Categorias.findOne({nombre});
        if(!existeCategoria){
            throw new Error(`La categoria ${nombre} no esta registrada en la base de datos`)
        }
    }),
    validateDocuments], postProductos);

router.delete("/del", deleteProductos);
router.patch("/upd", updateProducto);
router.get("/one/:marca",getOneProductoMarca);
router.get("/uno/:id",getOneProducto)


export default router;

