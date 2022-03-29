import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCourseList} from "../../../Redux/Slice/courseSlice";
import ItemHomePageCourse from "./ItemHomePageCourse";
import httpService from "../../../Services/http.service";

function CourseList() {
    const CARD_RENDER_AMOUNT = 8
    let {courseList} = useSelector(state => state.courseSlice);
    console.log(courseList);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchCourseList());
    // }, []);
    useEffect(() => {
        httpService.getCoursesList()
            .then(response => dispatch(setCourseList(response.data)))
            .catch(error => console.log(error));
    }, []);

    let handleRenderCourseItem = () => {
        return courseList.map((item, index) => {
            if (index < CARD_RENDER_AMOUNT) {
                return <ItemHomePageCourse key={index} data={item}/>
            }
        });
    };

    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-4xl font-bold mb-8'>Danh Sách Khóa Học Mới Nhất</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                {courseList?handleRenderCourseItem():<></>}
            </div>
        </div>
    );
}

export default CourseList;