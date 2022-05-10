import {  Request, Response } from "express";
import { Employee } from "../../mongoose/models";
import { getOneEmployee } from "../../services";
import { getObjectId } from "../../utils";
import constants from "../../utils/constants";

export const getOneEmployeeById =  async (req: Request, res: Response) => {
  try{
    const  employeeId = req.params.employeeId;

    const employee = await getOneEmployee({_id : getObjectId(employeeId) })
    if(!employee) {
      return res.status(404).send({
        success:false,
        message: constants.STATUS_CODES[404]
    })
    }

    const employeePopulated =  await Employee.populateEmployeeCountries(employee.toJSON());
    
    return res.json({
      success: true,
      employee: employeePopulated
    })
  }catch(error: any) {
    return res.status(500).send({
      success:false,
      message: error.message || constants.STATUS_CODES[500]
  })
}
  };