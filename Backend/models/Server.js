import express from "express";
import cors from "cors";

class Server{

    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;

        
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){

    }

    listenner(){
        this.app.listen(this.port,()=>{
            console.log(`puerto:${this.port}`);
        })

    }
}

export default Server