import { Tabs } from "antd";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail } from "../../Redux/Slice/userSlice";
import httpService from "../../Services/http.service";
import CourseList from "./Course/CourseList";

import Profile from "./Profile/Profile";

export default function UserDetail() {
  const { TabPane } = Tabs;
  function callback(className) {
    // console.log(className);
  }
  const dispatch = useDispatch();
  // let data = { taiKhoan: "anh123", matKhau: "anh123" };
  useEffect(() => {
    httpService
      .getUserDetail({ taiKhoan: "anh123", matKhau: "anh123" })
      .then((res) => {
        dispatch(setUserDetail(res.data));
      })
      .catch((err) => console.log(err));
  }, []);
  // const { userDetail } = useSelector((state) => state.userSlice);

  return (
    <div className=" container mx-auto ">
      <Tabs onChange={callback} type="card">
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
