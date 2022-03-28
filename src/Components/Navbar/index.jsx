import React from 'react';
import {NavLink} from "react-router-dom";
import './index.css';
import UserNav from "./UserNav";

function Navbar() {
    return (
        <div className='bg-navbar'>
            <div className='container flex justify-between items-center mx-auto max-w-full'>
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