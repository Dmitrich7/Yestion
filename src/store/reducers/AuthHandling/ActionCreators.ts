import axios, {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ICredentials} from "../../../models/models";

export const register = createAsyncThunk(
    'auth/register',
    async (params:ICredentials, thunkAPI) =>{
        try {
            await axios.post<ICredentials,void>(
                "povt-cluster.tstu.tver.ru:44666/api/auth/register",
                params
            );
        }catch (e) {
            let errorMessage = "Failed to do something exceptional";
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (params:ICredentials, thunkAPI) =>{
        try {
            const response =
                await fetch("http://povt-cluster.tstu.tver.ru:44667/api/auth/login",{
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(params)
                })
            return response.headers.get("Authorization")??"";
        }catch (e) {
            let errorMessage = "Failed to do something exceptional";
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (params, thunkAPI) =>{
        try {
            await axios.post<void,void>(
                "povt-cluster.tstu.tver.ru:44666/api/auth/logout",
                {
                    headers: {
                        "Authorization" : localStorage.getItem("Authorization")
                    }
                }
            );
        }catch (e) {
            let errorMessage = "Failed to do something exceptional";
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)
