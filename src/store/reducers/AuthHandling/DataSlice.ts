import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getData} from "./ActionCreators";
import {IWorkspace} from "../../../models/models";

interface IContent{
    content: IWorkspace[];
}

interface IDataSlice{
    data: IWorkspace[];
    isLoading: boolean;
    error: string;
}

const initialState: IDataSlice = {
    data: [
        {
            workspaceId: -1,
            name: "",
            pages: [
                {
                    title: "",
                    pageBlocks: [
                        {
                            type: "",
                            content: ""
                        }
                    ]
                }
            ]
        }
    ],
    isLoading: false,
    error: ''
}

export const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {},
    extraReducers: builder=>{
        builder
            .addCase(getData.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(getData.fulfilled,(state, action:PayloadAction<IContent>)=>{
                state.isLoading = false;
                state.data = action.payload.content;
                console.log(action.payload.content)
            })
            .addCase(getData.rejected,(state, action)=>{
                state.isLoading = false;
                state.error = action.error.message??"";
            })
    }
})

export default dataSlice.reducer;
