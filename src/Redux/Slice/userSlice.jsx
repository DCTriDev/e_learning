import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpService from "../../Services/http.service";
export const fetchUserDetail = createAsyncThunk(
  "user/fetchUserDetail",

  async (maKhoaHoc) => {
    const response = await httpService.getUserDetail(maKhoaHoc);
    return response.data;
  }
);
export const fetchUpdateUser = createAsyncThunk(
  "user/fetchUpdateUser",
  async (ttcn) => {
    await httpService.updateUserDetail(ttcn);
    return ttcn;
  }
);
const initialState = {
  userDetail: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserDetail.fulfilled]: (state, action) => {
      state.userDetail = action.payload;
    },
    [fetchUpdateUser.fulfilled]: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

export default userSlice.reducer;