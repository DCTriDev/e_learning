import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpService from "../../Services/http.service";

const initialState = {
    userDetail: null,
};

export const fetchUserDetail = createAsyncThunk(
  "user/fetchUserDetail",

  async (data) => {
    const response = await httpService.getUserDetail(data);
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