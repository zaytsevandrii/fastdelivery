import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [],
}

export const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
    
        setItems(state, action) {
        state.items=action.payload
        },
       
    },
})

export const {setItems} = foodSlice.actions

export default foodSlice.reducer
