import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    //[userApi.reducerPath]: userApi.reducer
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
