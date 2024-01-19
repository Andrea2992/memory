import { createSlice } from '@reduxjs/toolkit'

export const memoryCard = createSlice({
    name: 'memoryCard',
    initialState: {
        value: [
            
        ]
    },
    reducers: {
        updateCards: (state, action) => {
            state.value = action.payload
        }
    },
})

export const {updateCards} = memoryCard.actions;
export default memoryCard.reducer;