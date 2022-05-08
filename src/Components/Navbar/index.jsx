import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import UserNav from "./UserNav";
import { Dropdown, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCatalog } from "../../Redux/Slice/courseSlice";
import SearchBox from "./SearchBox";
import { BarsOutlined } from "@ant-design/icons";
import logoBig  from "../../Assets/Images/logo_big.png";
import logoSmall  from "../../Assets/Images/logo_small.png";

const changeNavbarScollHeight = () => {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar-height");
    if (nav) { // if navbar is present then only do the following
      if ( window.scrollY > 100) {
        nav.style.height = "80px";
      } else {
        nav.style.height = "70px";
      }
    }
  });
};

function Navbar() {
  let [widthWindow, setWidth] = useState(window.innerWidth);
  let smallNavEl = document.getElementById("small-nav");
  const courseCatalog = useSelector((state) => state.courseSlice.courseCatalog);
  const dispatch = useDispatch();
  const items = (
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
    dispatch(fetchCourseCatalog());
    changeNavbarScollHeight();
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return widthWindow > 900 ? (
    <div className="bg-navbar transition-all duration-300 navbar-height">
      <div className="container flex justify-between items-center mx-auto max-w-full h-full ">
        <NavLink to={"/"}>
          <img
            src={logoBig}
            alt="logo"
            className="w-48 mr-4"/>
        </NavLink>
        <SearchBox />
        <div>
          <div className="flex justify-between space-x-3">
            <Dropdown
              overlay={items}
              trigger={["click"]}
              className="text-center"
            >
              <a
                className="ant-dropdown-link text-xl text-blue-600 uppercase"
                href=""
                onClick={(e) => e.preventDefault()}
              >
                DANH MỤC
              </a>
            </Dropdown>
            <NavLink className='text-xl text-blue-600 uppercase' to={"/blog"}>Blog</NavLink>
            <NavLink className='text-xl text-blue-600 uppercase' to={"/"}>Contact</NavLink>
          </div>
        </div>
        <UserNav />
      </div>
    </div>
  ) : (
    <div className="bg-navbar transition-all duration-300 navbar-height">
      <div className="container flex justify-between items-center mx-auto max-w-full h-full ">
        <NavLink to={"/"}>
          <img
              src={logoSmall}
              alt="logo"
              className="w-24 mr-4"/>
        </NavLink>
        <div className="relative ">
          <button
              className="btn-nav w-12 h-12 rounded-2xl bg-transparent border-0"
              onClick={() => {
                smallNavEl.classList.toggle("hidden");
                // btnNavEl.classList.toggle("bg-yellow-500");
              }}
          >
            <BarsOutlined />
          </button>
          <div
              id="small-nav"
              className="hidden bottom-0 absolute right-auto rounded-xl -translate-x-1/2 translate-y-full z-20 bg-gray-100 shadow-2xl p-3"
          >
            <SearchBox />
            <div className="flex flex-col items-start space-y-3">
              <Dropdown
                  overlay={items}
                  trigger={["click"]}
                  className="text-center"
              >
                <a
                    className="ant-dropdown-link text-xl mx-auto mt-4"
                    href=""
                    onClick={(e) => e.preventDefault()}
                >
                  DANH MỤC
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-5">
          <UserNav />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
