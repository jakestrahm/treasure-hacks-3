import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: ["test"]
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            //disallow dups
            state.filters.push(action.payload)
        },
        removeFilter: (state, action) => {
            const newFilters = state.filters.filter((f) => f !== action.payload)
            state.filters = newFilters;
        },
    },
})


export const selectAllFilters = (state) => state.filters.filters;
export const { addFilter, removeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
