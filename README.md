# employee api

## prerequisites
 * typescript ^4.6.3
 * mongodb  ^4.4
 * nodejs ^14


## Getting Started
 * rename .env.example to .env
 * open terminal to folder
 * run command npm i 
 * run npm run insertEmployees (only once)
 * run command npm run build:watch
 * open another terminal to folder
 * run npm run start

## Routes
 # Get : /employees/:employeeId
    get a employee
 ## params
1. employeeId
    * Objectid
    * Required 
 # Get : /employees
    get multiple employees takes in  offSet and limit for pagination



* populated country data is presented in property "countryData"
* identifier for employees in asia and europe is stored in "identifier"
    


