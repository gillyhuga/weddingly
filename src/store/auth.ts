import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    token: string;
    isAuthorized: boolean;
}

const initialState: InitialState = {
    token: "",
    isAuthorized: false,
};

export const authentication = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload
            state.isAuthorized = true;
        },
        logout: () => initialState,
    },
});

export const { login, logout } = authentication.actions;
export default authentication.reducer;