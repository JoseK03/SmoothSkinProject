import {Router} from 'express';
import { check } from 'express-validator';
import login from '../controllers/auth.controllers.js';


const router = Router();

router.post("/login", login)

export default router;