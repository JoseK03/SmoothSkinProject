import express from "express";
import cors from "cors";
import productosRouter from "../routes/productos.routes.js";
import marcaRouter from "../routes/marcas.routes.js";
import drogueriasRouter from "../routes/droguerias.routes.js";
import categoriasRouter from "../routes/categorias.routes.js";
import usuariosRouter from "../routes/usuarios.routes.js";

class Server{

    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;
        this.productosPath = "/api/productos";
        this.marcaPath = "/api/marcas";
        this.drogueriasPath = "/api/droguerias";
        this.categoriasPath = "/api/categorias";
        this.usuariosPath = "/api/usuarios";
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.productosPath,productosRouter);
        this.app.use(this.marcaPath,marcaRouter);
        this.app.use(this.drogueriasPath,drogueriasRouter);
        this.app.use(this.categoriasPath,categoriasRouter);
        this.app.use(this.usuariosPath,usuariosRouter);

    }

    listenner(){
        this.app.listen(this.port,()=>{
            console.log(`puerto:${this.port}`);
        })

    }
}

export default Server