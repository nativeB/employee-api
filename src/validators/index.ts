
import {check} from "express-validator";
import constants from "../utils/constants";

export const employeeGetRouteValidator = [
    check("employeeId",constants.ERROR_MESSAGES.employeeId.required ).exists().isMongoId().withMessage(constants.ERROR_MESSAGES.employeeId.type)
  ]

