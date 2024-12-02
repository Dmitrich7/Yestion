import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getData} from "./ActionCreators";
import {IContent, IWorkspace} from "../../models/models";
import {useParams} from "react-router-dom";

interface IDataSlice{
    data: IWorkspace[];
    isLoading: boolean;
    error: string;
    currentBlockId: number;
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
                    frontendId: -1,
                    pageBlocks: [
                        {
                            type: "",
                            title: "",
                            content: "",
                            frontendId: -1
                        }
                    ]
                }
            ]
        }
    ],
    isLoading: false,
    error: '',
    currentWorkspaceId: -1,
    currentPageId: -1,
    currentBlockId: -1
}

export const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setCurrentBlockId(state, action){
            state.currentBlockId = action.payload;
        },
        updateCurrentWorkspaceId(state, action){
            state.currentWorkspaceId = action.payload;
        },
        updateCurrentPageId(state, action){
            state.currentPageId = action.payload;
        },
        updateCurrentBlockId(state, action){
            state.currentBlockId = action.payload;
        },
        updateBlock(state, action){
            state.data[action.payload.currentWorkspaceId].pages[action.payload.currentPageId].pageBlocks[action.payload.currentBlockId] =
                {
                    ...state.data[action.payload.currentWorkspaceId].pages[action.payload.currentPageId].pageBlocks[action.payload.currentBlockId],
                    [action.payload.name]: action.payload.value
                }
        },
        addBlock(state,action){

        },
        deleteBlock(state,action){

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
