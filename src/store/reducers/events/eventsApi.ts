import { baseUrl } from "@/store/baseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IEvent {
    id?: number,
    title: string,
    location: string,
    description: string,
    start: string,
    finish: string,
    favourite?: number,
    click?: number,
    want?: number
}

export interface IChangeEventFields {
    key: KeysEventEnum,
    value: string
}

export enum KeysEventEnum {
    TITLE = "title",
    LOCATION = "location",
    DESCRIPTION = "description",
    START = "start",
    FINISH = "finish"
}

export const eventsApi = createApi({
    reducerPath: 'eventsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl, credentials: "include" }),
    endpoints: (builder) => ({
        createEvent: builder.mutation<void, IEvent>({
            query: (event) => ({
                url: "event/create",
                method: "POST",
                body: event
            }),
        }),
        getEvents: builder.query<IEvent[], void>({
            query: () => ({
                url: "event/all",
                method: "GET",
            }),
        }),
    }),
})

export const {
    useGetEventsQuery,
    useCreateEventMutation
} = eventsApi;