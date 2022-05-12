import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpService from "../../Services/http.service";
import localServices from "../../Services/localServices";

const initialState = {
  userDetail: null,
  statusLocal: true,
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
    const response = await httpService.updateUserDetail(ttcn);
    return response.data;
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
      let { matKhau, ...rest } = action.payload;
      localServices.setUserInfo({ ...localServices.getUserInfo(), ...rest });
      state.statusLocal = !state.statusLocal;
      state.userDetail = { ...action.payload, soDT: action.payload.soDt };
    },
  },
});

export default userSlice.reducer;
