// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ_MinXhTfxTPHdAiJ44RnvgydnKc9Yk4",
  authDomain: "rent-app-f1510.firebaseapp.com",
  projectId: "rent-app-f1510",
  storageBucket: "rent-app-f1510.appspot.com",
  messagingSenderId: "1098909475887",
  appId: "1:1098909475887:web:5a4b6ea94368fc625312da",
  measurementId: "G-G7K3T6QY59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
