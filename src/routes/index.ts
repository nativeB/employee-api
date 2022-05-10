import {getEmployees, getOneEmployeeById} from "../controller";

import { Router } from "express";
import {  employeeGetRouteValidator } from "../validators";
import { generateStatistics, validateIncoming } from "../middleware";

const router = Router();

router.get("/health", (_,res)=>{
    res.send("hello")
});
router.get("/employees",generateStatistics, getEmployees);
router.get("/employees/:employeeId", employeeGetRouteValidator, validateIncoming, getOneEmployeeById );

export default router;