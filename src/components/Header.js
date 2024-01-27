import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="px-12 w-screen py-3 absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      {user && (<div className="flex justify-between text-center">
      <img className="w-10 h-10 my-auto mx-2 rounded-3xl" src={user?.photoURL} alt="User-profile"></img>
      <button onClick={handleSignOut} className="font-bold text-[#d9232e] text-xl">
        Sign Out
      </button>
      </div>)}
    </div>
  ); 
};

export default Header;
