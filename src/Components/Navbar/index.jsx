import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import './index.css';
import UserNav from "./UserNav";
import {Dropdown, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseCatalog} from "../../Redux/Slice/courseSlice";

const changeNavbarScollHeight = () => {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar-height');
        if (window.scrollY > 100) {
            nav.style.height = '80px';
        } else {
            nav.style.height = '70px';
        }
    });
}

function Navbar() {
    const courseCatalog = useSelector(state => state.courseSlice.courseCatalog);
    const dispatch = useDispatch();

    const menu = (
        <Menu className='rounded-xl p-2 -translate-x-1/4 duration-300 transition-all ease-in-out'>
            {courseCatalog?.map((item, index) => {
                return (
                    <Menu.Item key={index} className='hover:bg-blue-500 rounded-lg  duration-300 transition-all ease-in-out'>
                        <a className='text-lg duration-300 transition-all hover:text-white hover:text-white ease-in-out' href={`/course-catalog/${item.maDanhMuc}`}>{item.tenDanhMuc}</a>
                    </Menu.Item>
                )
            })}
        </Menu>
    );

    useEffect(() => {
        changeNavbarScollHeight();
        dispatch(fetchCourseCatalog());
    }, []);

    return (
        <div className='bg-navbar transition-all duration-300 navbar-height'>
            <div className='container flex justify-between items-center mx-auto max-w-full h-full '>
                <NavLink to={'/'}>
                    <h2 className='mb-0 text-3xl'>E-Learning</h2>
                </NavLink>
                <div>
                    <div className='flex justify-between space-x-3'>
                        <Dropdown overlay={menu} trigger={['click']} className='text-center'>
                            <a className="ant-dropdown-link text-xl" href='' onClick={e => e.preventDefault()}>
                                DANH MỤC
                            </a>
                        </Dropdown>
                        <NavLink to={'/'}>
                            About
                        </NavLink>
                        <NavLink to={'/'}>
                            Contact
                        </NavLink>
                    </div>
                </div>
                <UserNav/>
            </div>
        </div>
    );
}

export default Navbar;