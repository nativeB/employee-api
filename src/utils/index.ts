import {Types} from "mongoose"
export function getObjectId(id: string| Types.ObjectId){
    return typeof id === "string"? new Types.ObjectId(id) : id
}