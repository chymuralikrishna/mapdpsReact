import { configureStore } from "@reduxjs/toolkit";

import { authenticateUserLoginReducer } from "./authenticateUserLoginSlice";

export default configureStore({
    reducer:{
        userAuthentication:authenticateUserLoginReducer,
    },
})