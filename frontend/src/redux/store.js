import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice.js"
import messageReducer from "./messageSlice.js"

export const store = configureStore({
    reducer: {
        user:userReducer,
        messages:messageReducer,
    },
})