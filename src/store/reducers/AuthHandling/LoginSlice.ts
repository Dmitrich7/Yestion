import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login} from "./ActionCreators";

interface ILoginSlice{
    isLoading: boolean;
    error: string;
}

const initialState: ILoginSlice = {
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
                localStorage.setItem("Authorization", action.payload);
            })
            .addCase(login.rejected,(state, action)=>{
                state.isLoading = false;
                state.error = action.error.message??"";
            })

    }
})

export default loginSlice.reducer;
