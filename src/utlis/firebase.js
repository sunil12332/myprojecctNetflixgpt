// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSgYibEBka0Zh6juUnqTGChWP5CpyJGMg",
  authDomain: "mynetflix-5fab3.firebaseapp.com",
  projectId: "mynetflix-5fab3",
  storageBucket: "mynetflix-5fab3.appspot.com",
  messagingSenderId: "930050082935",
  appId: "1:930050082935:web:e4e46ba1e45f1fbf27de72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth=getAuth();