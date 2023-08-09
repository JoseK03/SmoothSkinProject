import {response} from "express"; 

const login = (req,res = response)=>{
    res.json({
        msg:"all good duuuuude"
    })
}

export default login;