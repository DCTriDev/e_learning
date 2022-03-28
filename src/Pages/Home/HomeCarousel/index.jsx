import React from 'react';
import {Carousel} from 'antd';

const textGradient = {
    display:'inline-block',
    background: 'linear-gradient(120deg, #1C99FE 20.69%, #7644FF 50.19%, #FD4766 79.69%)',
    filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="#FD4766", endColorstr="#1C99FE", GradientType=1)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
}

function HomeCarousel() {
    return (
        <Carousel autoplay className='' style={{background: '#232323'}}>
            <div className='grid space-x-5 sm:grid-cols-1 md:grid-cols-2  sm:h-72 md:h-90'>
                <div className="col-span-1">
                    <div className='bg-red-400 relative w-full h-full'>
                        <img className='w-full h-full object-cover '
                             src="https://blog.vinahost.vn/wp-content/uploads/2021/11/huong-dan-tao-moi-mot-nodejs-app-tren-shared-hosting.png"
                             alt=""/>
                    </div>
                </div>
                <div className="col-span-1 text-center">
                    <h1 style={textGradient}>NodeJS</h1>
                </div>
            </div>
            <div className='grid space-x-5 sm:grid-cols-1 md:grid-cols-2  sm:h-72 md:h-90'>
                <div className="col-span-1">
                    <div className='bg-red-400 relative w-full h-full'>
                        <img className='w-full h-full object-cover '
                             src="https://blog.vinahost.vn/wp-content/uploads/2021/11/huong-dan-tao-moi-mot-nodejs-app-tren-shared-hosting.png"
                             alt=""/>
                    </div>
                </div>
                <div className="col-span-1 text-center">
                    <h1 style={textGradient}>NodeJS</h1>
                </div>
            </div>
            <div className='grid space-x-5 sm:grid-cols-1 md:grid-cols-2  sm:h-72 md:h-90'>
                <div className="col-span-1">
                    <div className='bg-red-400 relative w-full h-full'>
                        <img className='w-full h-full object-cover'
                             src="https://antrandigital.com/wp-content/uploads/2021/03/chia-se-khoa-hoc-reactjs-day-du-mien-phi-antrandigital.jpg"
                             alt=""/>
                    </div>
                </div>
                <div className="col-span-1 text-center">
                    <h1 style={textGradient}>ReactJS</h1>
                </div>
            </div>
        </Carousel>
    );
}

export default HomeCarousel;