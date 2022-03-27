import React from 'react';
import {Dropdown, Menu} from 'antd';
import {NavLink} from "react-router-dom";

const menu = (
    <Menu className='rounded-xl p-2 translate-x-1/4'>
        <Menu.Item key="0" className='hover:bg-blue-500 rounded-lg'>
            <NavLink to="/profile" className='hover:text-white duration-300 transition-all ease-in-out'>
                <span className='flex items-center space-x-2'>
                    <ion-icon className='self-center' name="person-outline"/>
                    <span>Profile</span>
                </span>
            </NavLink>
        </Menu.Item>
        <Menu.Item key="1" className='hover:bg-blue-500 rounded-lg'>
            <NavLink to="/profile" className='hover:text-white duration-300 transition-all ease-in-out'>
                <span className='flex items-center space-x-2'>
                    <ion-icon name="settings-outline"/>
                    <span>Settings</span>
                </span>
            </NavLink>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="2" className='hover:bg-blue-500 rounded-lg'>
            <NavLink to="/profile" className='hover:text-white duration-300 transition-all ease-in-out'>
               <span className='flex items-center space-x-2'>
                    <ion-icon name="log-out-outline"/>
                    <span>Logout</span>
                </span>
            </NavLink>
        </Menu.Item>
    </Menu>
);

function UserNav() {
    let userName = 'Hello'
    return (
        userName ?
            <div className='flex items-center justify-center space-x-2'>
                <div>{userName}</div>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <img className='w-12 h-12 object-cover rounded-full' src="https://picsum.photos/200/200"
                             alt=""/>
                    </a>
                </Dropdown>
            </div> :
            <NavLink to='/login' className='bg-green-500 px-3 py-2 hover:scale-105 hover:bg-green-700 text-white duration-300 transition-all rounded-xl'>
                Login
            </NavLink>
    );
}

export default UserNav;