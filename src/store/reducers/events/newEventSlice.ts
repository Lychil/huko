import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChangeEventFields, IEvent } from "@/store/reducers/events/eventsApi";

const initialState: IEvent = {
    title: "",
    location: "",
    description: "",
    start: "",
    finish: "",
}


export const newEventSlice = createSlice({
    name: "newEvent",
    initialState,
    reducers: {
        setField: (state: IEvent, action: PayloadAction<IChangeEventFields>) => {
            state[action.payload.key] = action.payload.value;
        }
    }
});

export const newEventReducer = newEventSlice.reducer;
export const newEventActions = newEventSlice.actions;