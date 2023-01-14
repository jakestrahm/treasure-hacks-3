import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        // //set from axios call?
        // id: "idString",
        // userId: "userIdString",
        // name: "name!",
        // complete: false,
        // categories: [
        //     {
        //         name: "test1",
        //         id: 0
        //     },
        //     {
        //         name: "test2",
        //         id: 1
        //     }],
        // description: "description test",
        // dueBy: Date.now() + 1000000,
        // createdAt: Date.now(),
        // updatedAt: Date.now(),
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
