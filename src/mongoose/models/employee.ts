import * as mongoose from "mongoose"
import { populateEmployeeCountries } from "../statics/employee/populateEmployeeCountries"

export interface EmployeeInterface {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  jobTitle: string,
  company: string,
  country: string,
}

interface EmployeeModelInterface extends mongoose.Model<EmployeeDocumentInterface> {
  populateEmployeeCountries: (employees: EmployeeInterface) => Promise<EmployeeInterface>
}
export interface EmployeeDocumentInterface extends mongoose.Document {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  jobTitle: string,
  company: string,
  country: string,
}

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  }
},
{
  timestamps: true
})

EmployeeSchema.statics.populateEmployeeCountries = populateEmployeeCountries

const Employee = mongoose.model<EmployeeDocumentInterface, EmployeeModelInterface>("Employee", EmployeeSchema)

export { Employee }




