import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import httpService from "../../Services/http.service";

const initialState = {
    courseList: null,
    courseCatalogList: null,
    error: null,
};

export const fetchCourseList = createAsyncThunk(
    'course/fetchCourseList',
    async () => {
        const response = await httpService.getCoursesList();
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
    },
});

export const {setCourseList, setCourseListCatalog} = courseSlice.actions;

export default courseSlice.reducer;