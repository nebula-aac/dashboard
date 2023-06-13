import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { userSlice } from "../features/user/userSlice";
import * as reduxLogger from 'redux-logger';

const logger = reduxLogger.createLogger()

const customizedMiddleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

const reducers = {
    [userSlice.name]: userSlice.reducer,
    //[themeSlice.name]: themeSlice.reducer,
    //[pageSlice.name]: pageSlice.reducer,
}

const reducer = combineReducers(reducers)

export const store = () => {
    return configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== "production",
        middleware: customizedMiddleware
    })
}

export const wrapper = createWrapper(store, { debug: true })