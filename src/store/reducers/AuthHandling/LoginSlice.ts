import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login, logout} from "./ActionCreators";

interface ILoginSlice{
    isLoggedIn: boolean;
    isLoading: boolean;
    error: string;
}

const initialState: ILoginSlice = {
    isLoggedIn: false,
    isLoading: false,
    error: ''
}

export const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {},
    extraReducers: builder=>{
        builder
            .addCase(login.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(login.fulfilled,(state, action:PayloadAction<string>)=>{
                state.isLoading = false;
                state.isLoggedIn = true;
                localStorage.setItem("Authorization", action.payload);
            })
            .addCase(logout.fulfilled,(state)=>{
                state.isLoggedIn = false;
            })
            .addCase(login.rejected,(state, action)=>{
                state.isLoading = false;
                state.error = action.error.message??"";
            })
        }
})

export default loginSlice.reducer;
