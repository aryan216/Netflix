import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute top-1/2  right-1/3   ">
        <div className="flex items-center">
          <input placeholder="Search for movies " className=" px-3 w-80 py-4" />
          <button className="px-10 py-4 bg-red-700 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
