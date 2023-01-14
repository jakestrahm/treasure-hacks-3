import { configureStore } from '@reduxjs/toolkit'
import itemReducer from '../features/item/itemSlice'

export default configureStore({
    reducer: {
        item: itemReducer
    }
})
