import { Tabs } from "antd";
import Layout from "../../Layouts";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserDetail } from "../../Redux/Slice/userSlice";
import localServices from "../../Services/localServices";
import CourseList from "./Course/CourseList";
import Profile from "./Profile/Profile";
import "./index.css";
import HomeCarousel from "../Home/HomeCarousel";
function UserDetail(match) {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();
  useEffect(() => {
    // const dataLocal = localServices.getUserInfo();
    dispatch(fetchUserDetail({ taiKhoan: "anh123", matKhau: "anh123" }));
  }, []);
  // console.log(styles);
  return (
    <div className=" mt-20">
      <h2 className=" bg-yellow-400 font-semibold font-sans text-white pl-32  text-3xl   lg:leading-[200px]">
        THÔNG TIN CÁ NHÂN
      </h2>
      <div className=" md:w-5/6 md:min-height-[600px]  mx-auto  border-2  xl:h-screen lg:container lg:h-screen  shadow-xl ">
        <Tabs type="card" className="tab_detail">
          <TabPane
            tab={<p className="lg:text-lg">Thông tin cá nhân</p>}
            key="1"
          >
            <Profile />
          </TabPane>
          <TabPane
            className=""
            tab={<p className="lg:text-lg">Khoá học của tôi</p>}
            key="2"
          >
            <CourseList />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
export default Layout(UserDetail);
