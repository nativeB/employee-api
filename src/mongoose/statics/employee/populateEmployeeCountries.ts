import { get } from "lodash";
import { generateIdentifier } from "../../../utils";
import { instance } from "../../../utils/api";
import { EmployeeInterface } from "../../models";

//memoise expensive rest country calls
const countries:any = {};

export async function populateEmployeeCountries(employee: EmployeeInterface): Promise<any> {
    //create api instance
    const api = instance(process.env.REST_COUNTRIES_BASE_URL as string);
    let data: any;
    //map over employees and populate country
    const { country } = employee;
    if(!countries[country]) {
        const response = await api.get(`/alpha/${country}`);
        data = get(response, "data.0", {});
        countries[country] = data;
    }else{
        data = countries[country];
    }
    //first currency in object
    const currencyKeys = Object.keys(get(data, "currencies", {}));
    const currency = get(data, `currencies.${currencyKeys[0]}.name`, "");
    
    const countryData =  {
        fullName: get(data, "name.official", ""),
        currency,
        languages: Object.values(get(data, "languages", {})),
        timezones: Object.values(get(data, "timezones", {})),
        ...(data.region && { identifier: generateIdentifier(data.region, employee) })
    }
    
    return {
        ...employee,
        countryData
    }

}