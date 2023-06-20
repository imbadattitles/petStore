import { createSlice } from "@reduxjs/toolkit";


export const goodsSlice = createSlice({
    name: 'goods',
    initialState : {
        goods: [],
        categories: [],
        isLoading: true,
        isCategoriesLoading: true,
        isSimilarLoading: true
    },
    reducers : {
        fetchGoods(state, action) {
            state.goods = action.payload
        },
        fetchCategories(state, action) {
            state.categories = action.payload
        },
        isLoading(state, action) {
            state.isLoading = action.payload
        },
        isCategoriesLoading(state, action) {
            state.isCategoriesLoading = action.payload
        },
        isSimilarLoading(state, action) {
            state.isSimilarLoading = action.payload
        }
    }
});


export default goodsSlice.reducer
export const {fetchGoods, isLoading, fetchCategories, isCategoriesLoading, isSimilarLoading} = goodsSlice.actions