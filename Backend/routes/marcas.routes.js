import {Router} from "express";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validate.documents.js";
import { getMarca , getUnaMarcar , postMarca , updateMarca , deleteMarca } from "../controllers/marca.controllers.js";

const router = Router();

router.get("/get", getMarca);
router.post("/add",postMarca);
router.delete("/del", deleteMarca);
router.patch("/upd", updateMarca);

export default router;