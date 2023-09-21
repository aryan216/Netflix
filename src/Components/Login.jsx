import React from "react";
import Header from "./Header";
import banner from "../assets/banner.jpg" 
import { validateForm } from "../Utils/validate";
import { useState,useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  
  const handleFormValidation=()=>{
    const message=validateForm(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message)return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+errorMessage);
    // ..
  });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+errorMessage);
  });

    }
    
  }
   
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute h-full ">
        <img className='object-contain 'src={banner} alt="" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black/75 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg ">
        <h1 className="font-bold p-4 text-3xl">{isSignInForm?"Sign In":"Sign Up"}</h1>

        {!isSignInForm &&(<input type="text" placeholder="Full Name" className="p-4 m-2 w-full rounded-lg bg-neutral-700"/>)}
        <input ref={email} type="text" placeholder="Email" className="p-4 m-2 w-full rounded-lg bg-neutral-700"/>
        <input ref={password} type="password" placeholder="Password" className="p-4 m-2 w-full rounded-lg bg-neutral-700" />
        <p className="p-2 m-1 text-red-600 ">{errorMessage}</p>
        <button className="p-4 m-2 w-full bg-red-600 rounded-lg " onClick={handleFormValidation}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="p-4 m-2" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered?  Sign In"}</p>
      </form>
    </div>
  );
};
 
export default Login;
