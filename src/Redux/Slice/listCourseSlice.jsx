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
    await httpService.cancelCourse(data);
    return data.maKhoaHoc;
  }
);
const initialState = {
  listCourseDetail: [],
  listCourseDetailClone: [],
};

const listCourseSlice = createSlice({
  name: "listCourseSlice",
  initialState,
  reducers: {
    searchUser: (state, action) => {
      if (action.payload.trim().length === 0) {
        state.listCourseDetail = [...state.listCourseDetailClone];
      } else {
        state.listCourseDetail = [...state.listCourseDetailClone].filter(
          (item) => {
            return (
              item.tenKhoaHoc
                .toLowerCase()
                .trim()
                .search(action.payload.toLowerCase().trim()) !== -1
            );
          }
        );
      }
    },
  },
  extraReducers: {
    [fetchCourseDetail.fulfilled]: (state, action) => {
      state.listCourseDetail = [...state.listCourseDetail, action.payload];
      state.listCourseDetailClone = [...state.listCourseDetail, action.payload];
    },
    [fetchCancleCourse.fulfilled]: (state, action) => {
      let newlistCourseDetail = [...state.listCourseDetail].filter((item) => {
        return item.maKhoaHoc !== action.payload;
      });
      state.listCourseDetail = newlistCourseDetail;
      state.listCourseDetailClone = newlistCourseDetail;
    },
  },
});

export const { setList, removeCourse, searchUser } = listCourseSlice.actions;

export default listCourseSlice.reducer;