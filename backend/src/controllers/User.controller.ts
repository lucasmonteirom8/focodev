import { connect } from 'http2';
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
        this.router.post('/signup', this.signup);
    }

    index = async (req: Request, res: Response) => {
        const allUser = await prisma.user.findMany();
        
        console.log(JSON.stringify(allUser));
    }

    delete = async (req: Request, res: Response) => {

    }

    update = async (req: Request, res: Response) => {

    }

    signup = async  (req: Request, res: Response) => {
        const { username,email,password } = req.body;
        // const user_type = "common";
        try{
            const createdUser = await prisma.user.create({
                data: {
                    username: username,
                    email: email,
                    password: password,
                    user_type: {
                        connect: {
                            id: 2
                        }
                    }
                } 
            }).then(() => {
                res.status(200).send({ message: "Created User Successfully", body: createdUser });
            }).catch((err) => {
                res.status(400).send({ message: "Error creating user, contact support", error: err});
            })

        }catch(e){
            res.status(400).send({message: 'Error at data transfer'});
        }
    }

    get = async (req: Request, res: Response) => {

    }
}

export default User;