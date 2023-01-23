import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ITEMS_URL = 'https://treasure-hacks-server-production.up.railway.app/api/item'

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const res = await axios.get(ITEMS_URL)
    return res.data.items
})

export const addItem = createAsyncThunk('items/addItem', async (newItem) => {
    const res = await axios.post(ITEMS_URL, newItem)
    return res.data;
})

export const updateItem = createAsyncThunk('items/updateItem', async (itemId, itemUpdateObject) => {
    /* itemupdateobject {
        name: optional(string)
        complete: optional(boolean)
        categories: optional(List[string])
        description: optional(string)
        dueBy: optional(integer)

    } */
    const res = await axios.put(ITEMS_URL, {
    })
})

export const deleteItem = createAsyncThunk('items/deleteItem', async (itemId) => {
    const res = await axios.delete(`${ITEMS_URL}/${itemId}`)
})


const initialState = {
    items: [],
    status: 'idle', // | 'loading' | 'suceeded' | 'failed'
    error: null,
    focusedItemId: null
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        focusOnItem: (state, action) => {
            state.focusedItemId = action.payload;
            console.log(state.focusedItemId)
        }
    },
    extraReducers: (builder) => {
        builder
            /* fetchItems */
            .addCase(fetchItems.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.status = 'suceeded'
                state.items = action.payload
                state.focusedItemId = state.items[0].id
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            /* addItem */
            .addCase(addItem.fulfilled, (state, action) => {
                state.status = 'idle'
            })
            /* deleteItem */
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.status = 'idle'
            })

    },
})

export const selectAllItems = (state) => state.items.items;
export const getItemsStatus = (state) => state.items.status;
export const getItemsError = (state) => state.items.error;
export const getFocusedItemId = (state) => state.items.focusedItemId;

export const { focusOnItem } = itemsSlice.actions;
export default itemsSlice.reducer;
