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
      </div>
    );
  };
}

export default Layout;
