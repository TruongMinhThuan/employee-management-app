import { configureStore } from '@reduxjs/toolkit'
import { createTurnSlice } from './features/employeeTurn/employeeTurnSlice'
import { employeeManagementSlice } from './features/employeeManagement/employeeManagementSlice'
// ...

export const store = configureStore({
  reducer: {
    employeeTurn: createTurnSlice.reducer,
    employeeManagement: employeeManagementSlice.reducer
  },

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


