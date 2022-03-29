import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import './index.css';
import UserNav from "./UserNav";

const changeNavbarScollHeight =() => {
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
    useEffect(() => {
       changeNavbarScollHeight()
    });

    return (
        <div className='bg-navbar transition-all duration-300 navbar-height'>
            <div className='container flex justify-between items-center mx-auto max-w-full h-full '>
                <NavLink to={'/'}>
                    <h2 className='mb-0 text-3xl'>E-Learning</h2>
                </NavLink>
                <div className='flex justify-between space-x-3'>
                    <div className='flex'>
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
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