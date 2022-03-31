import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import loadingAnimSlice from "./Slice/loadingAnimSlice";
import listCourseSlice from "./Slice/listCourseSlice";

const store = configureStore({
  reducer: {
    loadingAnimSlice,
    userSlice,
    listCourseSlice,
  },
  devTools: true,
});

export default store;
