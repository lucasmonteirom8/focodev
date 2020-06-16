import express, { Request, Response, Router } from 'express';
import InterfaceControllers from './Interface.controller';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User implements InterfaceControllers{
    
    public path = '/users';
    public router = express.Router();

    constructor(){
        this.initRoutes();
    }

    public initRoutes(){
        this.router.get('/', this.index);
        this.router.post('/test', this.post);
    }

    index = async (req: Request, res: Response) => {
        const allUser = await prisma.user.findMany();
        
        console.log(JSON.stringify(allUser));
    }

    delete = async (req: Request, res: Response) => {

    }

    update = async (req: Request, res: Response) => {

    }

    post = async  (req: Request, res: Response) => {
        const { user_type } = req.body;

        const createdType = await prisma.type.create({
            data: user_type
        }).then(() => {
            res.status(200).send({ message: "create type successfully", body: createdType });
        }).catch((err) => {
            res.status(400).send({ message: "error to create"})
        })
    }

    get = async (req: Request, res: Response) => {

    }
}

export default User;