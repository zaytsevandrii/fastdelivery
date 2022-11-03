import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Sort={
    name: string,
    sortProperty:string
}

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
        setCategoryId(state, action:PayloadAction<number>) {
            state.categoryIndex = action.payload
        },
        setSearchValues(state, action:PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setActiveList: (state, action:PayloadAction<Sort>) => {
            state.activeSort = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setActiveList, setSearchValues } = filterSlice.actions

export default filterSlice.reducer
