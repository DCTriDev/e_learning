import React from 'react';
import {Card} from 'antd';
import {NavLink} from "react-router-dom";

const {Meta} = Card;

function ItemHomePageCourse({data}) {
    let substringByLength = (string, length) => {
        if (string.length > length) {
            return string.substring(0, length) + '...';
        }
        return string;
    };

    return (
        <Card
            className='rounded-lg overflow-hidden hover:scale-105 duration-300 transition-all cursor-default'
            hoverable
            style={{width: '100%', height: 'auto', padding: '0', margin: '0'}}
            cover={<img className='w-full h-48 object-cover' alt="example" src={data.hinhAnh}/>}
            actions={[<NavLink
                className='text-center text-white text-lg py-2 px-4 rounded-lg bg-green-600 hover:bg-green-700'
                to={`/course/${data.maKhoaHoc}`}>
                <div className=''>
                    Xem chi tiết
                </div>
            </NavLink>]}
        >
            <div className='h-28 flex flex-col space-y-1'>
                <h3 className='text-xl text-center uppercase whitespace-nowrap font-semibold'>{substringByLength(data.tenKhoaHoc, 20)}</h3>
                <Meta description={substringByLength(data.moTa, 80)}/>
            </div>
        </Card>);
}

export default ItemHomePageCourse;