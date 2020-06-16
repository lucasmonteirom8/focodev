import { Request, Response } from 'express';
import InterfaceControllers from './Interface.controller';
declare class User implements InterfaceControllers {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    initRoutes(): void;
    index: (req: Request, res: Response) => void;
    delete: (req: Request, res: Response) => void;
    update: (req: Request, res: Response) => void;
    post: (req: Request, res: Response) => void;
    get: (req: Request, res: Response) => void;
}
export default User;
