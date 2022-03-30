import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseList} from "../../../Redux/Slice/courseSlice";
import ItemHomePageCourse from "./ItemHomePageCourse";

function CourseList() {
    const CARD_RENDER_AMOUNT = 8

    let {courseList} = useSelector(state => state.courseSlice);
    console.log(courseList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCourseList());
    }, []);

    let handleRenderCourseItem = () => {
        return courseList?.map((item, index) => {
            if (index < CARD_RENDER_AMOUNT) {
                return <ItemHomePageCourse key={index} data={item}/>
            }
        });
    };

    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-4xl font-bold mb-8'>Danh Sách Khóa Học Mới Nhất</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                {handleRenderCourseItem()}
            </div>
        </div>
    );
}

export default CourseList;