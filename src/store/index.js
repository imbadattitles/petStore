import { combineReducers, configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./goodsReducer";
import cartSlice from "./cartReducer";


const RootReducer = combineReducers({
    goods: goodsReducer,
    cart: cartSlice,
})

export default configureStore({
    reducer: RootReducer
})