import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { netflix_logo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //*Hygene practice 
    return ()=>unsubscribe();
  }, []);

  return (
    <div className="px-12 w-screen py-3 absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={netflix_logo}
        alt="logo"
      ></img>
      {user && (
        <div className="flex justify-between text-center">
          <img
            className="w-10 h-10 my-auto mx-2 rounded-3xl"
            src={user?.photoURL}
            alt="User-profile"
          ></img>
          <button
            onClick={handleSignOut}
            className="font-bold text-[#d9232e] text-xl"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
