import express from "express";
import cors from "cors";
import productosRouter from "../routes/productos.routes.js";

class Server{

    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;
        this.productosPath = "/api/productos"
        
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.productosPath,productosRouter)

    }

    listenner(){
        this.app.listen(this.port,()=>{
            console.log(`puerto:${this.port}`);
        })

    }
}

export default Server