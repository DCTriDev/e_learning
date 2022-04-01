import { Tabs } from "antd";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserDetail } from "../../Redux/Slice/userSlice";
import CourseList from "./Course/CourseList";

import Profile from "./Profile/Profile";

export default function UserDetail() {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserDetail({ taiKhoan: "anh123", matKhau: "anh123" }));
  }, []);

  return (
    <div className=" container mx-auto ">
      <Tabs type="card">
        <TabPane
          tab={
            <div>
              <p>Thông tin cá nhân</p>
            </div>
          }
          key="1"
          className=""
        >
          <Profile />
        </TabPane>
        <TabPane
          className=""
          tab={
            <div>
              <p>Khoá học của tôi</p>
            </div>
          }
          key="2"
        >
          <CourseList />
        </TabPane>
      </Tabs>
    </div>
  );
}
