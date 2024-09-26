import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { eventsApi } from "@/store/reducers/events/eventsApi";
import { newEventReducer } from "./reducers/events/newEventSlice";

const rememberedReducers = [
    ""
];

const rootReducer = combineReducers({
    newEventReducer,
    [eventsApi.reducerPath]: eventsApi.reducer
});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
    reducer: rememberedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(eventsApi.middleware),
    enhancers: (getDefaultEnhancer) =>
        getDefaultEnhancer().concat(
            rememberEnhancer(window.localStorage, rememberedReducers)
        ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];