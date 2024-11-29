import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getData} from "./ActionCreators";
import {IContent, IWorkspace} from "../../models/models";

interface IDataSlice{
    data: IWorkspace[];
    isLoading: boolean;
    error: string;
    currentWorkspaceId: number;
    currentPageId: number;
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
    error: '',
    currentWorkspaceId: 0,
    currentPageId: 0
}

export const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setCurrentPageId(state, action){
            state.currentPageId = action.payload;
        },
        setCurrentWorkspaceId(state, action){
            state.currentWorkspaceId = action.payload;
        }
    },
    extraReducers: builder=>{
        builder
            .addCase(getData.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(getData.fulfilled,(state, action:PayloadAction<IContent>)=>{
                state.isLoading = false;
                state.error = "";
                if(action.payload.content !== "Unauthorized"){
                    state.data = action.payload.content as IWorkspace[];
                }else{
                    state.error = action.payload.content;
                }
            })
    }
})

export default dataSlice.reducer;
