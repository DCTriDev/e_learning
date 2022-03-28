import React from 'react';
import Layouts from "../../Layouts";
import HomeCarousel from "./HomeCarousel";

function HomePage() {
    return (
        <div className='mt-20'>
            <HomeCarousel/>
        </div>
    );
}

export default Layouts(HomePage);