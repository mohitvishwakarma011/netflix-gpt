import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
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
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/103398590?v=4"
          }).then(() => {
            // Profile updated!
            
            const {uid,email,displayName,photoURL} = auth.currentUser;

            dispatch(addUser({uid,email,displayName,photoURL}));
          }).catch((error) => {
            // An error occurred
            // ...  
          });

          navigate('/browse');
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // console.log(errorCode, errorMessage);
        });
    } else {
      // Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          //*update User to store name 

          const {uid,email,displayName,photoURL} = userCredential.user;

            dispatch(addUser({uid,email,displayName,photoURL}));
          

          navigate('/browse');
        
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
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="netflix-banner"
          className="absolute"
        ></img>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black w-3/12 p-12 mx-auto right-0 left-0 top-20 rounded bg-opacity-80"
        >
          <h2 className="text-white font-bold text-3xl mb-7">
            {isSignInForm ? "Sing In" : "Sing Up"}
          </h2>

          {!isSignInForm && (
            <input
              ref={name}
              text="text"
              placeholder="Full Name"
              className="p-2 m-2  w-full bg-gray-800 text-gray-300 rounded"
            ></input>
          )}

          <input
            ref={email}
            text="text"
            placeholder="Email Address"
            className="p-2 m-2 w-full bg-gray-800 text-gray-300 rounded"
          ></input>
          <input
            ref={password}
            text="password"
            placeholder="Password"
            className="p-2 m-2 w-full bg-gray-800 text-gray-300 rounded"
          ></input>

          <p className="text-red-600 p-2">{errorMessage}</p>

          <button
            onClick={handleButtonClick}
            className="p-2 mx-2 my-3 text-white bg-red-600 w-full rounded"
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
