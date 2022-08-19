import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    plan: any;
}

const initialState: InitialState = {
    plan: {},
};

export const plan = createSlice({
    name: "plan",
    initialState,
    reducers: {
        setPlan: (state, action) => {
            state.plan = action.payload;
        },
    },
});

export const { setPlan } = plan.actions;
export default plan.reducer;