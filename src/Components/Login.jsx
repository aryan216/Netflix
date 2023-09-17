import React from "react";
import Header from "./Header";
import banner from "../assets/banner.jpg" 
import { useState } from "react";
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={banner} alt="" />
      </div>
      <form className="absolute p-12 bg-black/75 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg ">
        <h1 className="font-bold p-4 text-3xl">{isSignInForm?"Sign In":"Sign Up"}</h1>

        {!isSignInForm &&(<input type="text" placeholder="Full Name" className="p-4 m-2 w-full rounded-lg bg-neutral-700"/>)}
        <input type="text" placeholder="Email" className="p-4 m-2 w-full rounded-lg bg-neutral-700"/>
        <input type="password" placeholder="Password" className="p-4 m-2 w-full rounded-lg bg-neutral-700" />
        <button className="p-4 m-2 w-full bg-red-600 rounded-lg ">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="p-4 m-2" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered?  Sign In"}</p>
      </form>
    </div>
  );
};
 
export default Login;
