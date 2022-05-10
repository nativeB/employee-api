import { EmployeeDocumentInterface, Employee } from "../../mongoose/models";
import { BasicObjectType } from "../../types";

export async function getOneEmployee(query: BasicObjectType): Promise<EmployeeDocumentInterface | null> {
    return Employee.findOne(query)
}