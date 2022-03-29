import {configureStore} from "@reduxjs/toolkit";
import loadingAnimSlice from "./Slice/loadingAnimSlice";
import userSlice from "./Slice/userSlice";
import courseSlice from "./Slice/courseSlice";

const store = configureStore({
    reducer: {
        loadingAnimSlice,
        userSlice,
        courseSlice,
    },
    devTools: true
});

export default store;