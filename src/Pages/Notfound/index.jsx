import React from "react";
import HomeBtn from "../../Components/HomeButton";

function Notfound() {
  const textGradient = {
    display: "inline-block",
    background:
      "linear-gradient(120deg, #1C99FE 20.69%, #7644FF 50.19%, #FD4766 79.69%)",
    filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="#FD4766", endColorstr="#1C99FE", GradientType=1)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "72px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 0,
  };
  return (
    <div className="w-screen h-screen text-center flex items-center justify-center">
      <HomeBtn />
      <h1 style={textGradient}>
        OOPS!!!
        <p className="text-3xl italic">Không tìm thấy trang</p>
        <p className="text-3xl italic">Vui lòng thử lại!!!</p>
      </h1>
    </div>
  );
}

export default Notfound;
