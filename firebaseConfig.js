// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4uD8nn-w2Xu49I6VT1IpeUG3DnK3fOME",
  authDomain: "brainbox-d6bf9.firebaseapp.com",
  projectId: "brainbox-d6bf9",
  storageBucket: "brainbox-d6bf9.firebasestorage.app",
  messagingSenderId: "134952156325",
  appId: "1:134952156325:web:be5d94f2183ac287ae214c",
  measurementId: "G-FL5DHCZDZ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
