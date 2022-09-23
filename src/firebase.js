// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_LPORZau2y3dV4L9MisVyx67rGCs27Ck",
  authDomain: "react-chatapp-62e4e.firebaseapp.com",
  projectId: "react-chatapp-62e4e",
  storageBucket: "react-chatapp-62e4e.appspot.com",
  messagingSenderId: "247512068361",
  appId: "1:247512068361:web:947633ae1ab154009223d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
