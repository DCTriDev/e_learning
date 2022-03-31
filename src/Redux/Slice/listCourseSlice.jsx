import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listCourseDetail: [],
};

const listCourseSlice = createSlice({
  name: "listCourseSlice",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.listCourseDetail = [...state.listCourseDetail, action.payload];
    },
    removeCourse: (state, action) => {
      let newState = state.listCourseDetail.filter((item) => {
        return item.maKhoaHoc !== action.payload;
      });
      state.listCourseDetail = newState;
    },
  },
});

export const { setList, removeCourse } = listCourseSlice.actions;

export default listCourseSlice.reducer;
