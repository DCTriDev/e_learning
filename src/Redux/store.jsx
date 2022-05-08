import {configureStore} from "@reduxjs/toolkit";
import loadingAnimSlice from "./Slice/loadingAnimSlice";
import userSlice from "./Slice/userSlice";
import courseSlice from "./Slice/courseSlice";
import adminSlice from "./Slice/adminSlice";
import listCourseSlice from "./Slice/listCourseSlice";

const store = configureStore({
    reducer: {
        loadingAnimSlice,
        userSlice,
        courseSlice,
        adminSlice,
        listCourseSlice,
    },
    devTools: true,
});

export default store;