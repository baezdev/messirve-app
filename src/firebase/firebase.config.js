// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8VYYe0EyxmUNN-KVPdwYANdprsZN_va0",
  authDomain: "messirve-app.firebaseapp.com",
  projectId: "messirve-app",
  storageBucket: "messirve-app.appspot.com",
  messagingSenderId: "241849809804",
  appId: "1:241849809804:web:e9bb2b079bfa6446d6f4a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore();

export { app, googleProvider, auth };
