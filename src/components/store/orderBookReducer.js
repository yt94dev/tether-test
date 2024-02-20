import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bids: null,
    asks: null,
    subscribed: false,
};

const orderBookSlice = createSlice({
    name: 'orderBook',
    initialState,
    reducers: {
        setBids: (state, action) => {
            state.bids = action.payload;
        },
        setAsks: (state, action) => {
            state.asks = action.payload;
        },
        setSubscribed: (state, action) => {
            state.subscribed = action.payload;
        }
    },
});

export const bidsSelector = (state) => state.orderBook.bids;
export const asksSelector = (state) => state.orderBook.asks;
export const subscribedSelector = (state) => state.orderBook.subscribed;



export const {
    setBids,
    setAsks,
    setSubscribed
} = orderBookSlice.actions;

export default orderBookSlice.reducer;
