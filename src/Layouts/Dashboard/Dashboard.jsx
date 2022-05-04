import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {
    DesktopOutlined, PieChartOutlined,
} from '@ant-design/icons';
import './Dashboard.css';

const {Header, Content, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key, icon, children, label,
    };
}

const items = [getItem('Quản Lý Khóa Học', '1', <PieChartOutlined/>), getItem('Quản Lý Người Dùng', '2',
    <DesktopOutlined/>),];

function Dashboard(Component) {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };
    return (props) => {
        return (<Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
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
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24, minHeight: 360,
                        }}
                    >
                        <Component {...props} />
                    </div>
                </Content>
            </Layout>
        </Layout>);
    }
}

export default Dashboard;