import React from 'react';
import CountUp from "react-countup";
import img1 from '../../../Assets/Images/count_up_1.png';
import img2 from '../../../Assets/Images/count_up_2.png';
import img3 from '../../../Assets/Images/count_up_3.png';
import img4 from '../../../Assets/Images/count_up_4.png';

const DURATION_TIME = 3; // seconds
const imgStyle = {
    width: '4rem',
    height: '4rem',
}
function Counter() {
    return (
       <div className='w-full bg-blue-200 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 px-16 py-6 mt-6'>
           <div className="col-span-1 flex flex-col justify-center items-center gap-3 text-emerald-600">
               <img style={imgStyle} src={img1} alt="img"/>
               <CountUp className='text-5xl bold ' end={9000} duration={DURATION_TIME}/>
               <h4 className='text-3xl bold text-rose-800'>Học viên</h4>
           </div>
           <div className="col-span-1 flex flex-col justify-center items-center gap-3 text-emerald-600">
               <img style={imgStyle} src={img2} alt="img"/>
               <CountUp className='text-5xl bold ' end={1000} duration={DURATION_TIME}/>
               <h4 className='text-3xl bold text-rose-800'>Khóa học</h4>
           </div>
           <div className="col-span-1 flex flex-col justify-center items-center gap-3 text-emerald-600">
               <img style={imgStyle} src={img3} alt="img"/>
               <CountUp className='text-5xl bold ' end={33200} duration={DURATION_TIME}/>
               <h4 className='text-3xl bold text-rose-800'>Giờ học</h4>
           </div>
           <div className="col-span-1 flex flex-col justify-center items-center gap-3 text-emerald-600">
               <img style={imgStyle} src={img4} alt="img"/>
               <CountUp className='text-5xl bold ' end={400} duration={DURATION_TIME}/>
               <h4 className='text-3xl bold text-rose-800'>Giảng viên</h4>
           </div>

           
       </div>
    );
}

export default Counter;