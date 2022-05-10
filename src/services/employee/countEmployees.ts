import {  Employee } from "../../mongoose/models";
import { BasicObjectType } from "../../types";

export async function countEmployees(query: BasicObjectType): Promise<number> {
    return  Employee.countDocuments(query)
}