import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: "Most popular",
        sortProperty: "rating",
    },
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setActiveList: (state, action) => {
            state.sort = action.payload
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setFilters: (state, action) => {
          state.currentPage=action.payload.currentPage
          state.categoryId=action.payload.categoryId
          state.sort=action.payload.sort
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setActiveList, incrementByAmount,setFilters } = filterSlice.actions

export default filterSlice.reducer
