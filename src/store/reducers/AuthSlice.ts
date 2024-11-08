import {createSlice} from "@reduxjs/toolkit";

interface ILoginSlice{
}

const initialState: ILoginSlice = {

}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers:{},
    extraReducers: builder => {
    }
})
