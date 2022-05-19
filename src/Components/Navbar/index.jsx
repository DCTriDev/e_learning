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
    if (nav) { 
      if ( window.scrollY > 100) {
        nav.style.height = "70px";
        document.querySelector('.bg-navbar').style.backgroundColor = "transparent";

      } else {
        nav.style.height = "80px";
        document.querySelector('.bg-navbar').style.backgroundColor = "#FFF";

      }
    }
  });
};

function Navbar() {
  let [widthWindow, setWidth] = useState(window.innerWidth);
  let smallNavEl = document.getElementById("small-nav");
  const courseCatalog = useSelector((state) => state.courseSlice.courseCatalog);
  const dispatch = useDispatch();

  const renderCourseCatalog = () => {
    return courseCatalog?.map((item) => {
      return ({
        label: (<a className='ant-dropdown-link text-lg text-blue-600 px-1.5 py-0.5 uppercase hover:text-white duration-300 transition-all ease-in-out hover:bg-blue-500 rounded-lg' href={`/course-catalog/${item.maDanhMuc}`}>{item.tenDanhMuc}</a>)
      })
    })
  }
  const menu = (
      <Menu className=' z-20' items={renderCourseCatalog()}>
      </Menu>
  );

  useEffect(() => {
    dispatch(fetchCourseCatalog());
    changeNavbarScollHeight();
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return widthWindow > 900 ? (
    //  Default Navbar
    <div className="bg-navbar transition-all duration-300 navbar-height ">
      <div className="container flex justify-between items-center mx-auto max-w-full h-full " id='home' >
        <NavLink to={"/"} >
          <img
            src={logoBig}
            alt="logo"
            className="w-48 md:mr-4"/>
        </NavLink>
        <SearchBox />
        <div>
          <div className="flex justify-between md:space-x-3">
            <Dropdown overlay={menu} overlayClassName='' placement="bottom" arrow={{ pointAtCenter: true }}>
              <span className="text-lg text-blue-600 px-1.5 py-0.5 uppercase hover:text-white duration-300 transition-all ease-in-out hover:bg-blue-500 rounded-lg">DANH MỤC</span>
            </Dropdown>
            <NavLink className='text-lg text-blue-600 px-1.5 py-0.5 uppercase hover:text-white duration-300 transition-all ease-in-out hover:bg-blue-500 rounded-lg' activeClassName='text-red-600' to={"/blog"}>Blog</NavLink>
            <NavLink className='text-xl text-blue-600 px-1.5 py-0.5 uppercase hover:text-white duration-300 transition-all ease-in-out hover:bg-blue-500 rounded-lg' activeClassName='text-red-600' to={"/events"}>Sự kiện</NavLink>
            <NavLink className='text-xl text-blue-600 px-1.5 py-0.5 uppercase hover:text-white duration-300 transition-all ease-in-out hover:bg-blue-500 rounded-lg' activeClassName='text-red-600' to={"/about"}>Thông tin</NavLink>
          </div>
        </div>
        <UserNav />
      </div>
    </div>
  ) : (
    //Small Navbar
    <div className="bg-navbar transition-all duration-300 navbar-height">
      <div className=" flex justify-between  items-center mx-auto max-w-full h-full ">
        <NavLink to={"/"}>
          <img
              src={logoSmall}
              alt="logo"
              className="w-24"/>
        </NavLink>
       
        <div className=" flex items-center" >
        <div className="">
          <UserNav />
        </div>
        <div className="relative  ">
          <button
              className="btn-nav w-12 h-12 rounded-2xl bg-transparent border-0"
              onClick={() => {
                smallNavEl.classList.toggle("hidden");
              }}
          >
            <BarsOutlined className=" text-2xl " />
          </button>
          <div
              id="small-nav"
              className="hidden bottom-0 absolute right-auto rounded-xl -translate-x-1/2  translate-y-full z-20 bg-gray-100 shadow-2xl p-3"
          >
            <SearchBox />
            <div className="flex flex-col items-start space-y-0.5">
              <Dropdown
                  overlay={menu}
                  trigger={["hover"]}
                  className="text-center"
              >
                <a
                    className="ant-dropdown-link text-lg text-blue-600 mx-auto mt-4 px-1.5 py-2.5 uppercase hover:text-white duration-300 transition-all ease-in-out hover:bg-blue-500 rounded-lg"
                    onClick={(e) => e.preventDefault()}
                >
                  DANH MỤC
                </a>
              </Dropdown>
              <NavLink className='text-lg text-blue-600 mx-auto mt-4 px-1.5 py-1.5 uppercase hover:text-white duration-300 transition-all ease-in-out hover:bg-blue-500 rounded-lg' activeClassName='text-red-600' to={"/blog"}>Blog</NavLink>
              <NavLink className='text-lg text-blue-600 mx-auto mt-4 px-1.5 py-1.5 uppercase hover:text-white duration-300 transition-all ease-in-out hover:bg-blue-500 rounded-lg' activeClassName='text-red-600' to={"/events"}>Sự kiện</NavLink>
              <NavLink className='text-lg text-blue-600 mx-auto mt-4 px-1.5 py-1.5 uppercase hover:text-white duration-300 transition-all ease-in-out hover:bg-blue-500 rounded-lg' activeClassName='text-red-600' to={"/about"}>Thông tin</NavLink>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
