import { Request, Response } from "express";
import { getManyEmployees } from "../../services";
import constants from "../../utils/constants";

export const getEmployees =  async (req: Request, res: Response) => {
  try{
    const { query } = req;
    const limit = parseInt(query.limit as string) || 10;
    const offSet = parseInt(query.offSet as string) || 1;

    const employees = await getManyEmployees(offSet,limit);

    return res.json({
      success: true,
      employees
    })
  }catch(error: any) {
    return res.status(500).send({
      success:false,
      message: error.message || constants.STATUS_CODES[500]
    })
  }
};