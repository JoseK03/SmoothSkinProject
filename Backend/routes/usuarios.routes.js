import { getOneUsuarios , getUsuarios , postUsuarios, deleteUsuario , updateUsuario } from "../controllers/usuarios.controllers.js";
import {Router} from "express";
import validateDocuments from "../middlewares/validate.documents.js";
import { check } from "express-validator";

const router = Router();

router.get("/get",getUsuarios);
router.get("/one",getOneUsuarios);
router.post("/add",[
    check('username','username es requerido').not().isEmpty(),
    check('password','password es requerida').not().isEmpty()
],postUsuarios);
router.delete("/del",deleteUsuario);
router.patch("/upd",updateUsuario);

export default router;