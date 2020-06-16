import express, { Request, Response, Router } from 'express';
import InterfaceControllers from './Interface.controller';

class User implements InterfaceControllers{
    
    public path = '/users';
    public router = express.Router();

    constructor(){
        this.initRoutes();
    }

    public initRoutes(){
        this.router.get('/', this.index)
    }

    index = (req: Request, res: Response) => {

    }

    delete = (req: Request, res: Response) => {

    }

    update = (req: Request, res: Response) => {

    }

    post = (req: Request, res: Response) => {

    }

    get = (req: Request, res: Response) => {

    }
}

export default User;