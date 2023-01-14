import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        //set from axios call?
        id: "idString",
        userId: "userIdString",
        name: "name!",
        complete: false,
        categories: ["test1", "test2"],
        description: "description test",
        dueBy: Date.now() + 10000,
        createdAt: Date.now(),
        updatedAt: Date.now()

    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { changeName } = itemSlice.actions
export const selectItem = state => state.item

export default itemSlice.reducer
