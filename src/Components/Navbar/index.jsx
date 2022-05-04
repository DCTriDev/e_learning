import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import UserNav from "./UserNav";
import { Dropdown, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCatalog } from "../../Redux/Slice/courseSlice";
import SearchBox from "./SearchBox";
import { BarsOutlined } from "@ant-design/icons";

const changeNavbarScollHeight = () => {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar-height");
    if (window.scrollY > 100) {
      nav.style.height = "80px";
    } else {
      nav.style.height = "70px";
    }
  });
};

function Navbar() {
  let [widthWindow, setWidth] = useState(window.innerWidth);
  let smallNavEl = document.getElementById("small-nav");
  let btnNavEl = document.querySelector(".btn-nav");
  const courseCatalog = useSelector((state) => state.courseSlice.courseCatalog);
  const dispatch = useDispatch();
  const menu = (
    <Menu className="rounded-xl p-2 -translate-x-1/4 duration-300 transition-all ease-in-out">
      {courseCatalog?.map((item, index) => {
        return (
          <Menu.Item
            key={index}
            className="hover:bg-blue-500 rounded-lg  duration-300 transition-all ease-in-out"
          >
            <a
              className="text-lg duration-300 transition-all hover:text-white hover:text-white ease-in-out"
              href={`/course-catalog/${item.maDanhMuc}`}
            >
              {item.tenDanhMuc}
            </a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  useEffect(() => {
    changeNavbarScollHeight();
    dispatch(fetchCourseCatalog());
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
  }, []);
  return widthWindow > 900 ? (
    <div className="bg-navbar transition-all duration-300 navbar-height">
      <div className="container flex justify-between items-center mx-auto max-w-full h-full ">
        <NavLink to={"/"}>
          <h2 className="mb-0 text-3xl">E-Learning</h2>
        </NavLink>
        <SearchBox />
        <div>
          <div className="flex justify-between space-x-3">
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              className="text-center"
            >
              <a
                className="ant-dropdown-link text-xl"
                href=""
                onClick={(e) => e.preventDefault()}
              >
                DANH MỤC
              </a>
            </Dropdown>
            <NavLink to={"/"}>About</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
          </div>
        </div>
        <UserNav />
      </div>
    </div>
  ) : (
    <div className="flex justify-between items-start">
      <NavLink to={"/"}>
        <h2 className="mb-0 text-3xl">E-Learning</h2>
      </NavLink>
      <div className=" flex  items-start space-x-5">
        <UserNav />

        <div className="relative ">
          <button
            className="btn-nav w-14 h-14"
            onClick={() => {
              console.log(btnNavEl.classList);
              smallNavEl.classList.toggle("hidden");
              btnNavEl.classList.toggle("bg-yellow-500");
            }}
          >
            <BarsOutlined />
          </button>
          <div
            id="small-nav"
            className=" hidden bottom-0 absolute right-0  translate-y-full z-20  bg-gray-100 shadow-2xl p-3 border-gray-300 border-solid border-[1px]"
          >
            <SearchBox />
            <div className="flex flex-col items-start space-y-3">
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                className="text-center"
              >
                <a
                  className="ant-dropdown-link text-xl"
                  href=""
                  onClick={(e) => e.preventDefault()}
                >
                  DANH MỤC
                </a>
              </Dropdown>
              <NavLink to={"/"}>About</NavLink>
              <NavLink to={"/"}>Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
