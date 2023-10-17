import React, { useEffect, useState } from "react";
import "./banner.css";
import logo from "../assets/logo.png";
import signin from "../assets/signin.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/Userslice";

const Header = () => {
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user  )
  const navigate=useNavigate();
  const HandleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/"); 
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error");
    });
    
  }
  const [open,setOpen]=useState(false);


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[])

  return (
    <div className="absolute px-8 py-2 w-full z-10 bg-gradient-to-b from-black flex justify-between">
        <div className="">
          <img className="w-44 " src={logo} alt="" />
        </div>

        {user&&(<div className="relative">
          <img onClick={()=>setOpen(!open)} className=" w-12 h-12 m-2" src={signin} alt="" />
          {open&&(<div className="absolute w-44 px-6 py-4 right-2 bg-black/75">
            <ul className="text-left cursor-pointer">
              <li className="w-32 text-white">Account</li>
              <li className="w-32 text-white">Manage Profiles</li>
              <li className="w-32 text-white">Help Centre</li>
              <li onClick={HandleSignOut} className="w-32 text-white">Sign out</li>
            </ul>
          </div>)}
        </div>)}
    </div>

  );
};

export default Header;
