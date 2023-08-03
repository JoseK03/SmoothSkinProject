import { validationResult } from "express-validator";

const validateDocuments = (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json(errors);
    }
    next();
}
export default validateDocuments;