import { check } from "express-validator";
import { Router } from "express";
import { getCategorias,getOneCategoria,postCategoria,deleteCategoria,updateCategorias} from "../controllers/categorias.controllers.js";
import validateDocuments from "../middlewares/validate.documents.js";

const router = Router();

router.get("/get",getCategorias);
router.post("/add",postCategoria);
router.delete("/del/:id",deleteCategoria);
router.patch("/upd/:id",updateCategorias);

export default router;