import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { sectionSlice } from "./section/sectionSlice";
import { userSlice } from "./user/userSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        sections: sectionSlice.reducer,
        users: userSlice.reducer
    }

})