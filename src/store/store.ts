import {combineReducers, configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducers/AuthHandling/LoginSlice"
import logoutReducer from "./reducers/AuthHandling/LogoutSlice"
import registerReducer from "./reducers/AuthHandling/RegisterSlice"

const rootReducer = combineReducers({
    //[dataApi.reducerPath]: dataApi.reducer,
    loginReducer,
    logoutReducer,
    registerReducer
})

export const setupStore = ()=> {
    return configureStore({
        reducer: rootReducer,
        middleware:
            (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(/*userApi.middleware*/)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
