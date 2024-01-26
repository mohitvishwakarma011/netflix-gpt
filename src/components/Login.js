import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const[isSignInForm,setIsSignInForm] = useState(true)
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="netflix-banner" className="absolute"
        ></img>
        <form className="absolute bg-black w-3/12 p-12 mx-auto right-0 left-0 top-20 rounded bg-opacity-80">
            <h2 className="text-white font-bold text-3xl mb-7">{isSignInForm?"Sing In":"Sing Up"}</h2>
            {!isSignInForm&&(<input text="text" placeholder="Name" className="p-2 m-2  w-full bg-gray-800 text-gray-300 rounded"></input>)}
            
            <input text="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-800 text-gray-300 rounded"></input>
            <input text="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-800 text-gray-300 rounded"></input>
            <button className="p-2 mx-2 my-3 text-white bg-red-600 w-full rounded">{isSignInForm?"Sing In":"Sing Up"}</button>
            <p onClick={()=>setIsSignInForm(!isSignInForm)} className="text-white m-2 cursor-pointer">{isSignInForm?"New to Netflix? Sign Up Now.":"Already registered? Sign In Now."}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
