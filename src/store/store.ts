import {combineReducers, configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducers/AuthHandling/LoginSlice"
import logoutReducer from "./reducers/AuthHandling/LogoutSlice"
import registerReducer from "./reducers/AuthHandling/RegisterSlice"
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"


const persistConfig = {
    key: "root",
    storage
}

const persistedLoginReducer = persistReducer(persistConfig,loginReducer)


const rootReducer = combineReducers({
    //[dataApi.reducerPath]: dataApi.reducer,
    persistedLoginReducer,
    logoutReducer,
    registerReducer
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
            }).concat(/*userApi.middleware*/)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
