import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpService from "../../Services/http.service";
export const fetchCourseDetail = createAsyncThunk(
  "course/fetchCourseDetail",
  async (maKhoaHoc) => {
    const response = await httpService.getCourseDetail(maKhoaHoc);
    return response.data;
  }
);
export const fetchCancleCourse = createAsyncThunk(
  "course/fetchCancleCourse",
  async (data) => {
    await httpService.cancleCourse(data);
    return data.maKhoaHoc;
  }
);
const initialState = {
  listCourseDetail: [],
};

const listCourseSlice = createSlice({
  name: "listCourseSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCourseDetail.fulfilled]: (state, action) => {
      state.listCourseDetail = [...state.listCourseDetail, action.payload];
    },
    [fetchCancleCourse.fulfilled]: (state, action) => {
      let newlistCourseDetail = [...state.listCourseDetail].filter((item) => {
        return item.maKhoaHoc !== action.payload;
      });
      state.listCourseDetail = newlistCourseDetail;
    },
  },
});

export const { setList, removeCourse } = listCourseSlice.actions;

export default listCourseSlice.reducer;
