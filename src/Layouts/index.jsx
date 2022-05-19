import { ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";

function Layout(Component) {
  return (props) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <Footer />
        <a className=" bg-red-500 rounded-full  fixed z-[99999999999999999999999999999999999999] bottom-0 right-0 text-white text-4xl shadow-2xl" href="#home">
          <ArrowUpOutlined  />
        </a> 
      </div>
    );
  };
}

export default Layout;
