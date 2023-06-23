import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState : {
        auth: false,
        authLoading: false,
        user: {name: 'Незарегистрированный пользователь'},
    },
    reducers : {
        fetchUser(state, action) {
            state.user = action.payload
        },
        setAuth(state, action) {
            state.auth = action.payload
        },
        isLoading(state, action) {
            state.authLoading = action.payload
        }
    }
});


export default userSlice.reducer
export const {fetchUser, setAuth, isLoading} = userSlice.actions