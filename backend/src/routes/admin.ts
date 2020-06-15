import { Router, Response, Request } from 'express';

const adminRoutes = Router();

adminRoutes.get("/get", (req: Request, res: Response) => {
    res.status(200).json({message: "Done"});
});


export default adminRoutes;