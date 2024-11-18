import {createSlice} from "@reduxjs/toolkit";
import {logout} from "./ActionCreators";

interface ILoginSlice{
    isLoading: boolean;
    error: string;
}

const initialState: ILoginSlice = {
    isLoading: false,
    error: ''
}

export const logoutSlice = createSlice({
    name: "logout",
    initialState: initialState,
    reducers: {},
    extraReducers: builder=>{
        builder
        .addCase(logout.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(logout.fulfilled,(state)=>{
            state.isLoading = false;
            localStorage.removeItem("Authorization");
        })
        .addCase(logout.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message??"";
        })
    }
})

export default logoutSlice.reducer;
