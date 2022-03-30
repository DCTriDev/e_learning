import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import httpService from "../../Services/http.service";

const initialState = {
    courseList: null,
    courseCatalog: null,
    error: null,
};

export const fetchCourseList = createAsyncThunk(
    'course/fetchCourseList',
    async () => {
        const response = await httpService.getCoursesList();
        return response.data;
    }
);

export const fetchCourseCatalog = createAsyncThunk(
    'course/fetchCourseCatalog',
    async () => {
        const response = await httpService.getCourseCatalog();
        return response.data;
    }
);

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourseListCatalog: (state, action) => {
            state.courseCatalogList = action.payload;
        },
    },
    extraReducers: {
        [fetchCourseList.fulfilled]: (state, action) => {
            state.courseList = action.payload;
        },
        [fetchCourseCatalog.fulfilled]: (state, action) => {
            state.courseCatalog = action.payload;
        },
    },
});

export default courseSlice.reducer;