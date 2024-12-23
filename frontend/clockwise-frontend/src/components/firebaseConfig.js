// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxaGQU1IFpTU3SkxzV_dtQSNYqN5FOFLY",
  authDomain: "clockwise-3196b.firebaseapp.com",
  projectId: "clockwise-3196b",
  storageBucket: "clockwise-3196b.appspot.com",
  messagingSenderId: "337715407613",
  appId: "1:337715407613:web:fb1dff59fdb0f49896ec94",
  measurementId: "G-VQG5ZV7V15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};