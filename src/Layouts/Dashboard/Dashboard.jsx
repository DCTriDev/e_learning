import React, {useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import logoBig from '../../Assets/Images/logo_big.png';
import logoSmall from '../../Assets/Images/logo_small.png';
import {
    PieChartOutlined, UserOutlined, PlusSquareOutlined
} from '@ant-design/icons';
import './Dashboard.css';
import CourseManagement from "../../Pages/CourseManagement";
import UserManagement from "../../Pages/userManagement";
import UserNav from "../../Components/Navbar/UserNav";
import AddCourse from "../../Pages/CourseManagement/AddCourse";
import EditCourse from "../../Pages/CourseManagement/EditCourse";
import {setEditCourseData} from "../../Redux/Slice/courseSlice";
import {useDispatch} from "react-redux";
import localServices from "../../Services/localServices";
import UserRestrict from "./UserRestrict";

const {Header, Content, Sider} = Layout;

function getItem(label, key, icon, items, disabled = false) {
    return {
        key, icon, items, label, disabled
    };
}

const items = [
    getItem('Khóa Học', '1', <PieChartOutlined/>,[
        getItem('Quản Lý Khóa Học', '1-1', <PieChartOutlined/> ),
        getItem('Thêm Khóa Học', '1-2', <PlusSquareOutlined />),
    ]),
    getItem('Quản Lý Người Dùng', '2', <UserOutlined />),
];

function Dashboard(props) {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };
    const dispatch = useDispatch();
    const [renderKey, updateRenderKey] = useState('1-1');
    const handleRenderContent = key =>{
        switch (key) {
            case '1-1': return <CourseManagement handleClickEdit={handleClickEdit}/>
            case '1-2': return <AddCourse/>
            case '1-3': return <EditCourse handleMenuClick={handleMenuClick}/>
            case '2': return <UserManagement/>
            case '3': return <UserRestrict/>
        }
    }
    const handleMenuClick = menu => {
        updateRenderKey(menu.key)
    }
    const handleClickEdit = (data) => {
        updateRenderKey('1-3')
        dispatch(setEditCourseData(data))
    }
    useEffect(() => {
       if (localServices.getUserInfo()===undefined || localServices.getUserInfo()?.maLoaiNguoiDung !== "GV") {
           updateRenderKey('3')
       }
    }, [renderKey]);

    return (<Layout
        style={{
            minHeight: '100vh',
        }}
    >
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
            <div className='bg-emerald-50 w-full rounded-3xl'>
                <a href="/">
                    <img src={!collapsed?logoBig:logoSmall} className='w-full h-auto mx-auto' alt="logo"/>
                </a>
            </div>
            <Menu theme="dark" defaultSelectedKeys={[renderKey]} mode="inline" items={items} onClick={handleMenuClick}/>
        </Sider>
        <Layout className="site-layout">
            <Header
                className="site-layout-background flex justify-between flex-row-reverse px-12"
                style={{
                    padding: 0,
                }}
            >
                <div className=''>
                    <UserNav/>
                </div>
            </Header>
            <Content
                style={{
                    margin: '0 16px',
                }}
            >
                {handleRenderContent(renderKey)}
            </Content>
        </Layout>
    </Layout>);
}

export default Dashboard;