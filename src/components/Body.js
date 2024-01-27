import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import {auth} from "../utils/firebase"

const Body = () => {
  const dispatch = useDispatch();


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}));
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  },[])

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
