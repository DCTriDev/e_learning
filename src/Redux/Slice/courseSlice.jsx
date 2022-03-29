import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    courseList: null,
    courseCatalogList: null,
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourseList: (state, action) => {
            state.courseList = action.payload;
        },
        setCourseListCatalog: (state, action) => {
            state.courseCatalogList = action.payload;
        },
    },
});

export const {setCourseList, setCourseListCatalog} = courseSlice.actions;

export default courseSlice.reducer;