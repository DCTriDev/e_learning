import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HomeCarousel from "../Pages/Home/HomeCarousel";

function Layout(Component) {
  return (props) => {
    console.log(props);
    return (
      <div>
        <Navbar />
        <Component {...props} />
      </div>
    );
  };
}

export default Layout;

export const Layout2 = ({ Component, ...restRoute }) => {
  console.log("restRoute", { ...restRoute });
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        console.log(propsRoute);
        return (
          <div className=" ">
            <Navbar />
            <div className="mt-20">
              <HomeCarousel />
              <Component {...propsRoute} />
            </div>
          </div>
        );
      }}
    />
  );
};
export const Layout3 = ({ Component, ...Match }) => {
  return (
    <div className=" ">
      <Navbar />
      <div className="mt-20">
        <HomeCarousel />
        <Component />
      </div>
    </div>
  );
};
