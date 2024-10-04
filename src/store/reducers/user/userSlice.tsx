import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserStartInfo {
    email: string | null
}

const initialState = {
    startInfo: {} as IUserStartInfo
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setStartInfo: (state, action: PayloadAction<IUserStartInfo>) => {
            state.startInfo = Object.assign(action);
        },
        resetStartInfo: () => {
            return initialState;
        }
    }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;