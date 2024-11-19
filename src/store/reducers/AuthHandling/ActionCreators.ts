import axios, {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ICredentials} from "../../../models/models";

export const register = createAsyncThunk(
    'auth/register',
    async (params:ICredentials, thunkAPI) =>{
        try {
            await fetch("http://povt-cluster.tstu.tver.ru:44666/api/auth/register",{
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params)
            })
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
                await fetch("http://povt-cluster.tstu.tver.ru:44666/api/auth/login",{
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
            await fetch("http://povt-cluster.tstu.tver.ru:44666/api/auth/logout",{
                method: "POST",
                headers: {
                    "Authorization" : localStorage.getItem("Authorization") as string,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            })
            console.log("logout")
        }catch (e) {
            let errorMessage = "Failed to do something exceptional";
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)

export const getData = createAsyncThunk(
    'auth/getData',
    async (params, thunkAPI) =>{
        try {
            const response =
                await fetch("http://povt-cluster.tstu.tver.ru:44666/api/data/workspacesList",{
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization" : localStorage.getItem("Authorization") as string
                    }
                })
            return response.json();
        }catch (e) {
            let errorMessage = "Failed to do something exceptional";
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)
