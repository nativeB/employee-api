import { NextFunction, Request, Response } from "express";
import { countEmployees } from "../services";

export async function generateStatistics (_req: Request, res: Response, next: NextFunction) {
        try{
                const total = await countEmployees({});

                res.set("x-total-employees",`${total}`)
                next()

        }catch(error){
                return next(error)
        }
}