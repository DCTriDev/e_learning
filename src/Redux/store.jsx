import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import loadingAnimSlice from "./Slice/loadingAnimSlice";

const store = configureStore({
    reducer: {
        loadingAnimSlice,
        userSlice,
    },
    devTools: true
});

export default store;