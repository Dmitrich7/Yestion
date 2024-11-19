import {combineReducers, configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducers/AuthHandling/LoginSlice"
import logoutReducer from "./reducers/AuthHandling/LogoutSlice"
import registerReducer from "./reducers/AuthHandling/RegisterSlice"
import dataReducer from "./reducers/AuthHandling/DataSlice"
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import {dataApi} from "../Services/DataServices";


const persistConfig = {
    key: "root",
    storage
}

const persistedLoginReducer = persistReducer(persistConfig,loginReducer)


const rootReducer = combineReducers({
    persistedLoginReducer,
    logoutReducer,
    registerReducer,
    dataReducer
})

export const setupStore = ()=> {
    return configureStore({
        reducer: rootReducer,
        middleware:
            (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            })
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
