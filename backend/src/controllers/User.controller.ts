import { connect } from 'http2';
import express, { Request, Response, Router } from 'express';
import InterfaceControllers from './Interface.controller';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User implements InterfaceControllers {

    public path = '/users';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get('/', this.index);
        this.router.post('/signup', this.signup);
        this.router.delete('/delete', this.delete);
    }

    index = async (req: Request, res: Response) => {
        const allUser = await prisma.user.findMany();

        console.log(allUser);
    }

    delete = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        try {
            const foundUser = await prisma.user.findOne({
                where: {
                    email
                }
            })

            if(!foundUser) {
                res.status(404).send({ message: "User doesn't exist" });
            } 

            else if(foundUser?.password != password) {
                res.status(404).send({ message: "Wrong password" });
            }
            
            await prisma.user.delete({
                where: {
                    id: foundUser?.id
                }
            }).then(() => {
                res.status(200).send({ message: "Deleted user successfully" });
            }).catch((err) => {
                console.log(err);
            })

        } catch (e) {
            console.log(e);
        }
        
    }

    update = async (req: Request, res: Response) => {

    }

    signup = async (req: Request, res: Response) => {
        const { username, email, password } = req.body;

        try {
            const createdUser = await prisma.user.create({
                data: {
                    username: username,
                    email: email,
                    password: password,
                    user_type: {
                        connect: {
                            id: 1
                        }
                    }
                }
            }).then(() => {
                res.status(200).send({ message: "Created User Successfully", createdUser });
            }).catch((err) => {
                res.status(400).send({ message: "Error creating user, contact support" });
            })

        } catch (e) {
            res.status(400).send({ message: 'Error at data transfer' });
        }
    }

    get = async (req: Request, res: Response) => {

    }
}

export default User;