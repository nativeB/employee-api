import { EmployeeDocumentInterface, Employee } from "../../mongoose/models";

export async function getManyEmployees(skip:number, limit:number): Promise<EmployeeDocumentInterface[]> {
    return  Employee.find({},null,{skip, limit})
}