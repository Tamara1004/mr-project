// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export const environment = {
  production: false,
  // other environment variables
};
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLV-IGO6C_xECGHElUnom2RW1ySAkR8M0",
  authDomain: "mr-project-25ccf.firebaseapp.com",
  projectId: "mr-project-25ccf",
  storageBucket: "mr-project-25ccf.appspot.com",
  messagingSenderId: "983377561825",
  appId: "1:983377561825:web:4a93fadea067bacd894fa0",
  measurementId: "G-CG9WN4TE9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);