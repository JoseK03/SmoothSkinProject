import { getProductos, getOneProducto , postProductos , deleteProductos , updateProducto } from "../controllers/productos.controllers.js";
import {Router} from "express";
import {check} from "express-validator";
import validateDocuments from '../middlewares/validate.documents.js';
import Marca from '../models/Marca.js';

const router = Router();

router.get("/get", getProductos);
router.post("/add",[
    check('nombre_producto','nombre es requierido').not().isEmpty(),
    check('nombre_marca').custom(async(nombre_marca='')=>{
        const existeMarca = await Marca.findOne({nombre_marca});
        if(!existeMarca){
            throw new Error(`La marca ${nombre_marca} no está registrada en la base de datos`)
        }
    }),
    check('categoria').custom(),
    validateDocuments], postProductos);

router.delete("/del", deleteProductos);
router.patch("/upd", updateProducto);

export default router;

