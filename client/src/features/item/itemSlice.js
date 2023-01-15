import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        focusedId: "uid1"
    },
    reducers: {
        changeFocus: (state, action) => {
            state.focusedId = action.payload
        }
    }
})

export const { changeFocus } = itemSlice.actions
export const selectItem = state => state.item

export default itemSlice.reducer
