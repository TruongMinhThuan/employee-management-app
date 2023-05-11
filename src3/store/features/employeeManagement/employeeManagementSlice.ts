import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { employeeType } from '../../../types/employee.type';
import { TurnType } from '../../../types/turn.type';
import { fetchEmployee } from './thunks';

// Define a type for the slice state
interface EmployeeStateInterface {
    employeeList: employeeType[]
}

// Define the initial state using that type
const initialState: EmployeeStateInterface = {
    employeeList: []
}

export const employeeManagementSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setEmployeeList: (state, action) => {
            state.employeeList = action.payload
        },
        addNewEmployee: (state, action: PayloadAction<employeeType>) => {
            let newEmployee = action.payload
            state.employeeList = [...state.employeeList, newEmployee]
        },
        updateEmployee: (state, action: PayloadAction<employeeType>) => {
            let employeeIndex = state.employeeList?.findIndex(e => e.id == action.payload.id)
            state.employeeList[employeeIndex] = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchEmployee.fulfilled, (state, action: PayloadAction<employeeType[]>) => {
            // state.entities[payload.id] = payload
            state.employeeList = action.payload
        })

    },
})

export const { setEmployeeList, addNewEmployee, updateEmployee } = employeeManagementSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.employeeTurn

export default employeeManagementSlice.reducer


