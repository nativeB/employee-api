import { Request, Response } from "express";
import { Employee } from "../../mongoose/models";
import { getManyEmployees } from "../../services";
import constants from "../../utils/constants";

export const getEmployees =  async (req: Request, res: Response) => {
  try{
    const { query } = req;
    const limit = parseInt(query.limit as string) || 10;
    const offSet = parseInt(query.offSet as string) || 0;
    const employees = await getManyEmployees(offSet,limit);
    const employeesPopulated = await Promise.all(employees.map(async (employee: any) => {
      return await Employee.populateEmployeeCountries(employee.toJSON());
    }))

    return res.json({
      success: true,
      employees: employeesPopulated
    })
  }catch(error: any) {
    return res.status(500).send({
      success:false,
      message: error.message || constants.STATUS_CODES[500]
    })
  }
};