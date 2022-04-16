import { configureStore } from "@reduxjs/toolkit";
import loadingAnimSlice from "./Slice/loadingAnimSlice";
import userSlice from "./Slice/userSlice";
import courseSlice from "./Slice/courseSlice";
import adminSlice from "./Slice/adminSlice";

const store = configureStore({
  reducer: {
    loadingAnimSlice,
    userSlice,
    courseSlice,
    adminSlice,
  },
  devTools: true,
});

export default store;
