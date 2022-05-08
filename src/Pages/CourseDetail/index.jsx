import React, {useEffect, useState} from 'react';
import Layout from "../../Layouts";
import httpService from "../../Services/http.service";
import {useParams} from "react-router-dom";

function CourseDetail() {
    let [courseDetail, setCourseDetail] = useState({});
    let {courseID} = useParams();
    console.log(courseID)
    useEffect(() => {
        httpService.getCourseDetail(courseID)
            .then(res => {
                setCourseDetail(res.data);
            })
    }, []);

    const renderCourseDetail = () => {
        return (
            courseDetail ? (
                <div className="lg:container px-12">
                    <h2 className='text-center m-0'>{courseDetail.tenKhoaHoc}</h2>
                    <div className="grid grid-cols-2  gap-3">
                        <div className="col-span-1 self-center">
                            <img className='w-full ' src={courseDetail.hinhAnh} alt=""/>
                        </div>
                        <div className="col-span-1">
                            <h4 className='text-justify'>{courseDetail.moTa}</h4>
                        </div>

                    </div>
                    <div className="">
                        <p className='italic text-right mr-5 text-gray-600'>Lượt xem: {courseDetail.luotXem}</p>
                    </div>
                </div>) : null
        )
    };
    return (
        <div className='mt-20'>
            {renderCourseDetail()}
        </div>
    );
}

export default Layout(CourseDetail);