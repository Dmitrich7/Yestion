import {createSlice} from "@reduxjs/toolkit";
import {register} from "./ActionCreators";

interface IRegisterState{
    isLoading: boolean;
    error: string;
}

const initialState: IRegisterState = {
    isLoading: false,
    error: '',
}

export const registerSlice = createSlice({
    name: "register",
    initialState: initialState,
    reducers: {},
    extraReducers: builder=>{
        builder
            .addCase(register.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(register.fulfilled,(state)=>{
                state.isLoading = false;
            })
            .addCase(register.rejected,(state,action)=>{
                state.isLoading = false;
                state.error = action.error.message??"";
            })
    }
})

export default registerSlice.reducer;
