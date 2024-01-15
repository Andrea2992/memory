import { createSlice } from '@reduxjs/toolkit'

export const clickSLice = createSlice({
    name: 'clicked',
    initialState: {
        value: false,
    },
    reducers: {
        changeBooleanValue: (state) => {
            state.value = !state.value
        }
    },
})

export const { changeBooleanValue } = clickSLice.actions;
export default clickSLice.reducer