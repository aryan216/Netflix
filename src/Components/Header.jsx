import React from "react";
import "./banner.css";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="">
      <div className=" w-full banner h-screen  flex bg-red bg-red-500 justify-between  ">
        <div className="flex w-full justify-between  ">
          <div>
            <img className="w-64" src={logo} alt="netflix-logo" />
          </div>
          <div className="flex ">
            <div className="w-52 mr-10 mt-5">
              <select
                id="countries"
                className="bg-transparent border border-gray-300 text-black/70 text-sm rounded-md block w-full p-2.5"
              >
                <option selected>English</option>
                <option value="US">Hindi</option>
              </select>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
