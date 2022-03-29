import React from 'react';
import Layout from "../../Layouts";
import HomeCarousel from "./HomeCarousel";
import CourseList from "./CourseList";

function HomePage() {
    return (
        <div className='mt-20'>
            <HomeCarousel/>
            <CourseList/>
        </div>
    );
}

export default Layout(HomePage);