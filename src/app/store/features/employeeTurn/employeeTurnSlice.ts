import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { employeeType } from '../../../types/employee.type';
import { TurnType } from '../../../types/turn.type';

// Define a type for the slice state
interface TurnState {
    value: number,
    employeeTurns: any
}

// Define the initial state using that type
const initialState: TurnState = {
    value: 0,
    employeeTurns: []
}

export const createTurnSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setEmployeeTurns: (state, action) => {
            state.employeeTurns = action.payload?.employeeTurnList
        },
        addEmployeeTurn: (state, action) => {
            let templeEmployeeTurns = state.employeeTurns;
            let currentEmployee = templeEmployeeTurns?.find((e: employeeType) => e.id == action.payload.employee_id);

            if (!currentEmployee?.turns || currentEmployee?.turns?.length <= 0) {
                currentEmployee.turns = []
            }

            if (action.payload.new_turn) {
                currentEmployee?.turns?.push(action.payload.new_turn)
            }
        },
        deleteEmployeeTurn: (state, action) => {
            let currentEmployee = state.employeeTurns?.find((e: employeeType) => e.id == action.payload.employee_id);
            let newEmployeeTurns = currentEmployee?.turns?.filter((turn: TurnType) => turn?.id != action.payload.turn_id)
            currentEmployee.turns = newEmployeeTurns
        },
        updateEmployeeTurn: (state, action) => {
            let templeEmployeeTurns = state.employeeTurns;

            let currentEmployee = templeEmployeeTurns?.find((e: employeeType) => e.id == action.payload.employee_id);
            let newTurns = currentEmployee?.turns?.map((turn: TurnType) => {
                if (turn?.id == action.payload.turn?.id) {
                    return action.payload?.turn
                }
                return turn
            })
            currentEmployee.turns = newTurns
        }
    },
})

export const { setEmployeeTurns, addEmployeeTurn, deleteEmployeeTurn, updateEmployeeTurn } = createTurnSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.employeeTurn

export default createTurnSlice.reducer


