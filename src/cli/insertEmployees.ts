/* tslint-disable no-debugger, no-console */
import dotenv = require("dotenv")
dotenv.config();

import  * as mongoose from "mongoose"
import {  Employee } from "../mongoose/models";
// import employees json
import { data as employees } from "../data/employees.json";
(()=>{
    try{
        console.log("inserting employees...")
        mongoose.connect(process.env.MONGO_URI as string, {
        }, async () => {

            // insert employees to database using insertMany method
            await Employee.insertMany(employees)
            console.log("done inserting employees!")
            mongoose.disconnect()
            process.exit(0);
        })
    }catch(err){
        console.log(err)
        process.exit(1);
    }
})()