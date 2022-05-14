import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import CourseManagementSrv from "../../Services/courseMangement.service";
import httpService from "../../Services/http.service";

const initialState = {
  courseList: [],
  courseListClone: [],
  courseCatalog: null,
  courseListByCatalog: null,
  error: null,
  editCourseData: null,
};

export const fetchCourseList = createAsyncThunk(
  "course/fetchCourseList",
  async () => {
    const response = await httpService.getCoursesList();
    return response.data;
  }
);

export const fetchCourseCatalog = createAsyncThunk(
  "course/fetchCourseCatalog",
  async () => {
    const response = await httpService.getCourseCatalog();
    return response.data;
  }
);

export const fetchCourseListByCatalog = createAsyncThunk(
  "course/fetchCourseListByCatalog",
  async (maDanhMuc) => {
    const response = await httpService.getCourseListByCatalog(maDanhMuc);
    return response.data;
  }
);
export const fetchDeleteCourse = createAsyncThunk(
  "course/fetchDeleteCourse",
  async (maKhoaHoc, { rejectWithValue }) => {
    try {
      const response = await CourseManagementSrv.deleteCourse(maKhoaHoc);
      return { res: response.data, maKhoaHoc };
    } catch (err) {
      return rejectWithValue(err.err.response.data);
    }
  }
);
const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseListCatalog: (state, action) => {
      state.courseCatalogList = action.payload;
    },
    searchCourse: (state, action) => {
      if (action.payload.trim().length === 0) {
        state.courseList = [...state.courseListClone];
      } else {
        state.courseList = [...state.courseListClone].filter((course) => {
          return (
            course.tenKhoaHoc
              .toLowerCase()
              .trim()
              .search(action.payload.toLowerCase().trim()) !== -1 ||
            course.maKhoaHoc
              .toLowerCase()
              .trim()
              .search(action.payload.toLowerCase().trim()) !== -1
          );
        });
      }
    },
    setEditCourseData: (state, action) => {
      state.editCourseData = action.payload;
    },
  },
  extraReducers: {
    [fetchCourseList.fulfilled]: (state, action) => {
      state.courseList = action.payload;
      state.courseListClone = action.payload;
    },
    [fetchCourseCatalog.fulfilled]: (state, action) => {
      state.courseCatalog = action.payload;
    },
    [fetchCourseListByCatalog.fulfilled]: (state, action) => {
      state.courseListByCatalog = action.payload;
    },
    [fetchDeleteCourse.fulfilled]: (state, action) => {
      message.success(action.payload.res);
      state.courseList = [...state.courseList].filter((item) => {
        return item.maKhoaHoc !== action.payload.maKhoaHoc;
      });
      state.courseListClone = [...state.courseList].filter((item) => {
        return item.maKhoaHoc !== action.payload.maKhoaHoc;
      });
    },
    [fetchDeleteCourse.rejected]: (state, action) => {
      message.error(action.payload);
    },
  },
});

export const { searchCourse, editCourseData, setEditCourseData } = courseSlice.actions;

export default courseSlice.reducer;
