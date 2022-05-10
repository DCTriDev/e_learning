import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import logoBig from '../../Assets/Images/logo_big.png';
import logoSmall from '../../Assets/Images/logo_small.png';
import {
    DesktopOutlined, PieChartOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
import CourseManagement from "../../Pages/CourseManagement";
import UserManagement from "../../Pages/userManagement";
import UserNav from "../../Components/Navbar/UserNav";

const {Header, Content, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key, icon, children, label,
    };
}

const items = [
    getItem('Quản Lý Khóa Học', '1', <PieChartOutlined/>),
    getItem('Quản Lý Người Dùng', '2', <DesktopOutlined/>),
];

function Dashboard(props) {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };
    const [renderKey, updateRenderKey] = useState('1');
    const handleRenderContent = key =>{
        switch (key) {
            case '1': return <CourseManagement/>
            case '2': return <UserManagement/>
        }
    }
    const handleMenuClick = menu => {
        updateRenderKey(menu.key)
    }
    return (<Layout
        style={{
            minHeight: '100vh',
        }}
    >
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
            <div className='bg-emerald-50 w-full rounded-3xl'>
                <a href="/">
                    <img src={logoBig} className='w-full h-auto mx-auto' alt="logo"/>
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