import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: [],
        amount: 0
    },
    reducers : {
        pushItems(state, action) {
            state.items.push(action.payload)
        },
        setItems(state, action) {
            state.items = action.payload
        },
        deleteItems(state, action) {
            state.items = state.items.filter(item => {
                if (item.itemNumber !== action.payload.itemNumber) {
                    return item
                }
            })
        },
        setAmount(state, action) {
            state.amount = action.payload
        }
    }
});

export default cartSlice.reducer
export const {pushItems, deleteItems, setItems, setAmount} = cartSlice.actions