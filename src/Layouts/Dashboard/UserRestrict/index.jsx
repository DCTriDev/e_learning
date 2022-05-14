import React from 'react';

function UserRestrict(props) {
    return (
        <div className='w-full h-full flex items-center justify-center flex-col'>
            <h1 className='text-red-600 text-7xl italic'>Cảnh báo!!!!</h1>
            <p className='text-3xl text-gray-600'>
                Bạn không có quyền truy cập vào trang này!!!
            </p>
        </div>
    );
}

export default UserRestrict;