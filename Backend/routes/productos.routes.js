import { getProductos, getOneProducto , postProductos , deleteProductos , updateProducto } from "../controllers/productos.controllers.js";
import {Router} from "express";
import {check} from "express-validator";
import validateDocuments from '../middlewares/validate.documents.js';

const router = Router();

router.get("/get", getProductos);
router.post("/add", postProductos);
router.delete("/del", deleteProductos);
router.patch("/upd", updateProducto);

export default router;

