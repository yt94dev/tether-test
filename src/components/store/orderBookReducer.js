import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bids: null,
    asks: null,
};

const orderBookSlice = createSlice({
    name: 'orderBook',
    initialState,
    reducers: {
        setBids: (state, action) => {
            state.bids = action.payload;
        },
        setAsks: (state) => {
            state.asks = null;
        },
    },
});

export const bidsSelector = (state) => state.orderBook.bids;
export const asksSelector = (state) => state.orderBook.asks;


export const {
    setBids,
    setAsks,
} = orderBookSlice.actions;

export default orderBookSlice.reducer;
