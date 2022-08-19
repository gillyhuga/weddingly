import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import plan from "./plan";


export const store = configureStore({
    reducer: {
        auth: auth,
        plan: plan,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;