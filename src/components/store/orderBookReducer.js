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
            // state.bids = action.payload
            if(state.bids === null) {
                state.bids = action.payload
            };
            // if(state.bids) {
            //     console.log('state is not empty')
            //     state.bids = action.payload
            //     // do {
            //     //     console.log('state less 55')

            //     //     const oldBids = state.bids;
            //     //     const newBids = oldBids.concat(action.payload);
            //     //     state.bids = newBids;
            //     // } while (state.bids.length < 75);

            //     // while (state.bids.length > 45) {
            //     //     console.log('state more 45')

            //     //     state.bids = action.payload
            //     // }
            // }
            // if(state.bids.length >= 50 < 100){
            //     state.bids = action.payload.concat(state.bids);
            // }

            // if(state.bids.length >= 120){
            //     state.bids = action.payload.concat([]);
            // }
            
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
