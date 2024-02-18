// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoHnGJxvuMbpQM8iXloj254dwQiR8kScU",
  authDomain: "netflixgpt-576c4.firebaseapp.com",
  projectId: "netflixgpt-576c4",
  storageBucket: "netflixgpt-576c4.appspot.com",
  messagingSenderId: "258421417925",
  appId: "1:258421417925:web:6a2db78315c89139c84dac",
  measurementId: "G-DRS365C0HL"
};

// Initialize Firebase
// const app = 
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();