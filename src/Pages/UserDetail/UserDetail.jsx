import { Tabs } from "antd";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserDetail } from "../../Redux/Slice/userSlice";
import localServices from "../../Services/localServices";
import CourseList from "./Course/CourseList";

import Profile from "./Profile/Profile";

export default function UserDetail() {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();
  useEffect(() => {
    const dataLocal = localServices.getUserInfo();
    console.log(dataLocal);
    dispatch(fetchUserDetail({ taiKhoan: "anh123", matKhau: "anh123" }));
  }, []);

  return (
    <div className=" md:w-5/6 md:min-height-[600px]  mx-auto border-2  xl:h-screen lg:container lg:h-screen ">
      <Tabs type="card " className="">
        <TabPane
          tab={
            <div>
              <p className=" lg:text-xs">Thông tin cá nhân</p>
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
              <p className="lg:text-xs">Khoá học của tôi</p>
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
