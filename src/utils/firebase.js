// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB66u7P-2sQeZJZVaZxVL07G-gku4eVYWs",
  authDomain: "netflixgpt-bc50a.firebaseapp.com",
  projectId: "netflixgpt-bc50a",
  storageBucket: "netflixgpt-bc50a.appspot.com",
  messagingSenderId: "99484825503",
  appId: "1:99484825503:web:cb280cf6be970a83452faa",
  measurementId: "G-QHHSLX86XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);