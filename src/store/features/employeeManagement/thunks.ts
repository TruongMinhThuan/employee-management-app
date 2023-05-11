import { createAsyncThunk } from "@reduxjs/toolkit"
import employeeService from "../../../services/employee.service"
import { employeeType } from "../../../types/employee.type"


const fetchEmployee = createAsyncThunk(
    'employee/fetchEmployee', async () => {
        const response: employeeType[] = await employeeService.getEmployee()

        return response
    }
)


// const updateEmployee = createAsyncThunk(
//     'employee/fetchEmployee', async () => {
//         const response: employeeType[] = await employeeService.getEmployee()

//         return response
//     }
// )


export { fetchEmployee }


