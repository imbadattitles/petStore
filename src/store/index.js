import { combineReducers, configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./goodsReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";


const RootReducer = combineReducers({
    goods: goodsReducer,
    cart: cartReducer,
    user: userReducer
})

export default configureStore({
    reducer: RootReducer
})