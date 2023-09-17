import React from "react";
import "./banner.css";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 w-full z-10 bg-gradient-to-b from-black">
      <img className="w-44 " src={logo} alt="" />
    </div>
  );
};

export default Header;
