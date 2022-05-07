import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {
    DesktopOutlined, PieChartOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
import CourseManagement from "../../Pages/CourseManagement";

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
            case '2': return <div>Quản lý người dùng</div>
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
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={[renderKey]} mode="inline" items={items} onClick={handleMenuClick}/>
        </Sider>
        <Layout className="site-layout">
            <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                }}
            />
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