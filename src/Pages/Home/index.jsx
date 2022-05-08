import React from 'react';
import Layout from "../../Layouts";
import HomeCarousel from "./HomeCarousel";
import CourseList from "./CourseList";
import Counter from "./Counter";

function HomePage() {
    return (
        <div className='mt-20'>
            <HomeCarousel/>
            <CourseList/>
            <Counter/>
        </div>
    );
}

export default Layout(HomePage);