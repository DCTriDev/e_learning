import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import "./Dashboard.css";
import CourseManagement from "../../Pages/CourseManagement";
import UserManagement from "../../Pages/userManagement";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, items) {
  return {
    key,
    icon,
    items,
    label,
  };
}

const items = [
  getItem("Quản Lý Khóa Học", "1", <PieChartOutlined />),
  getItem("Quản Lý Người Dùng", "2", <DesktopOutlined />),
];

function Dashboard(props) {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const [renderKey, updateRenderKey] = useState("1");
  const handleRenderContent = (key) => {
    switch (key) {
      case "1":
        return <CourseManagement />;
      case "2":
        return <UserManagement />;
    }
  };
  const handleMenuClick = (menu) => {
    updateRenderKey(menu.key);
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[renderKey]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
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
            margin: "0 16px",
          }}
        >
          {handleRenderContent(renderKey)}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
