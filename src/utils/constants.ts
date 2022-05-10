const STATUS_CODES:  {
    [key: string]: string
} = {
    200: "Successful",
    500: "An error occurred, please try later",
    404: "The resource was not found",
    400: "Input parameters failed validation"
}
const ERROR_MESSAGES: {
    [key:string]:  {
        required: string;
        type: string;
        exists?: string;
    }
} = {
    employeeId: {
        required: "employeeId param is required",
        type: "employee id should be an objectid"
    }
}
const REGIONS_WITH_IDENTIFIERS = ["ASIA", "EUROPE"];
const constants = Object.freeze({
    STATUS_CODES,
    ERROR_MESSAGES,
    REGIONS_WITH_IDENTIFIERS
})

export default constants;