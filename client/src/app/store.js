import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import filtersSlice from '../features/filters/filtersSlice'
import itemsReducer from '../features/items/itemsSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        items: itemsReducer,
        filters: filtersSlice
    }
})

export { store }
