import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import plan from "./plan";
import user from "./user";


export const store = configureStore({
    reducer: {
        auth: auth,
        user: user,
        plan: plan,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;