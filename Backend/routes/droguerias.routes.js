import { Router } from "express";
import { check } from "express-validator";
import { getDrogueria,getUnaDrogueria,postDrogueria,deleteDrogueria,updateDrogueria } from "../controllers/droguerias.controllers.js";
import validateDocuments from "../middlewares/validate.documents.js";

const router = Router();

router.get("/get",getDrogueria);
router.post("/add",postDrogueria);
router.delete("/del",deleteDrogueria);
router.patch("/upd", updateDrogueria);

export default router;