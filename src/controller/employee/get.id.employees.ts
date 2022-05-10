import {  Request, Response } from "express";
import { getOneEmployee } from "../../services";
import { getObjectId } from "../../utils";
import constants from "../../utils/constants";

export const getOneEmployeeById =  async (req: Request, res: Response) => {
  try{
    const  gameId = req.params.gameId;

    const game = await getOneEmployee({_id : getObjectId(gameId) })

    if(!game) {
      return res.status(404).send({
        success:false,
        message: constants.STATUS_CODES[404]
    })
    }
    return res.json({
      success: true,
      game
    })
  }catch(error: any) {
    return res.status(500).send({
      success:false,
      message: error.message || constants.STATUS_CODES[500]
  })
}
  };