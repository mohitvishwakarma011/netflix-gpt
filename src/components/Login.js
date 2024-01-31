import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, my_photo } from "../utils/constants";

const Login = () => {
  
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = isSignInForm
      ? checkValidate(email.current.value, password.current.value)
      : checkValidate(
          email.current.value,
          password.current.value,
          name.current.value
        );

    setErrorMessage(message);

    if (message) return;

    /** Sign In / Sign Up User **/
    if (!isSignInForm) {
      // Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
          //*update User to store name 
          updateProfile(user, {
            displayName: name.current.value, photoURL: {my_photo}
          }).then(() => {
            // Profile updated!
            
            const {uid,email,displayName,photoURL} = auth.currentUser;

            dispatch(addUser({uid,email,displayName,photoURL}));
          }).catch((error) => {
            // An error occurred
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //* Signed in
          
          //*update User to store name 

          const {uid,email,displayName,photoURL} = userCredential.user;

            dispatch(addUser({uid,email,displayName,photoURL}));
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="">
        <img
          src={BG_URL}
          alt="netflix-banner"
          className="absolute h-screen object-cover w-screen"
        ></img>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute  bg-black md:w-3/12 p-4 md:p-12 mx-auto right-0 left-0 top-20 rounded bg-opacity-80"
        >
          <h2 className="text-white font-bold text-xl md:text-3xl mb-3 md:mb-7">
            {isSignInForm ? "Sing In" : "Sing Up"}
          </h2>

          {!isSignInForm && (
            <input
              ref={name}
              text="text"
              placeholder="Full Name"
              className="p-2 mx-0 my-2  w-full bg-gray-800 text-gray-300 rounded"
            ></input>
          )}

          <input
            ref={email}
            text="text"
            placeholder="Email Address"
            className="p-2 mx-0 my-2 w-full bg-gray-800 text-gray-300 rounded"
          ></input>
          <input
            ref={password}
            text="password"
            placeholder="Password"
            className="p-2 mx-0 my-2 w-full bg-gray-800 text-gray-300 rounded"
          ></input>

          <p className="text-red-600 p-2">{errorMessage}</p>

          <button
            onClick={handleButtonClick}
            className="p-2 mx-0  my-3 text-white bg-red-600 w-full rounded"
          >
            {isSignInForm ? "Sing In" : "Sing Up"}
          </button>
          <p
            onClick={() => setIsSignInForm(!isSignInForm)}
            className="text-white m-2 cursor-pointer"
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now."
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
