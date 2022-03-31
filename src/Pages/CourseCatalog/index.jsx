import React, {useEffect} from 'react';
import Layouts from "../../Layouts";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseListByCatalog} from "../../Redux/Slice/courseSlice";
import CourseCard from "../../Components/ItemCourse/CourseCard";

function CourseCatalog({maDanhMuc}) {
    const courseListByCatalog = useSelector(state => state.courseSlice.courseListByCatalog);
    const dispatch = useDispatch();

    let handleRenderCourseItem = () => {
        return courseListByCatalog?.map((item, index) => {
            return <CourseCard key={index} data={item}/>
        });
    };

    useEffect(() => {
        dispatch(fetchCourseListByCatalog(maDanhMuc));
    }, []);

    return (
        <div className='mt-20 lg:container px-20'>
            <h1>{courseListByCatalog ? courseListByCatalog[0].danhMucKhoaHoc.tenDanhMucKhoaHoc : <></>}</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                {handleRenderCourseItem()}
            </div>
        </div>
    );
}

export default Layouts(CourseCatalog);