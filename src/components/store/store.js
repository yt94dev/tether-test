import { configureStore } from '@reduxjs/toolkit'
import orderBookReducer from './orderBookReducer'

const store = configureStore({
    reducer: {
        orderBook: orderBookReducer,
    }
})

export default store