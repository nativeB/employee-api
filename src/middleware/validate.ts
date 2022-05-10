import { NextFunction, Request, Response } from "express";
import { validationResult} from "express-validator";
import constants from "../utils/constants";

export async function validateIncoming (req: Request, res: Response, next: NextFunction) {
    try{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
              success:false,
              errors: errors.array(),
              message: constants.STATUS_CODES[400]
          });
        } else {
          return next()
        }
    }catch(error){
        return next(error)
    }
}