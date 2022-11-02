import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchValue: '',
    categoryIndex: 0,
    currentPage: 1,
    activeSort: {
        name: "Most popular",
        sortProperty: "rating",
    },
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryIndex = action.payload
        },
        setSearchValues(state, action) {
            state.searchValue = action.payload
        },
        setActiveList: (state, action) => {
            state.activeSort = action.payload
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setActiveList, incrementByAmount, setSearchValues } = filterSlice.actions

export default filterSlice.reducer
