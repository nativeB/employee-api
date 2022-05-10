import {Types} from "mongoose"
import { EmployeeInterface } from "../mongoose/models"
import constants from "./constants"
export function getObjectId(id: string| Types.ObjectId){
    return typeof id === "string"? new Types.ObjectId(id) : id
}
//generate identifier if region exist in regions_with_identifiers
export function generateIdentifier(region:string, employee:EmployeeInterface){
    if(constants.REGIONS_WITH_IDENTIFIERS.includes(region.toUpperCase())){
        const {firstName, lastName, dateOfBirth} = employee
        return `${firstName.toLocaleLowerCase()}${lastName.toLocaleLowerCase()}${dateOfBirth.split("/").join("")}`
    }
    return null
}