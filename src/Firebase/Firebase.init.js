// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxTV7_geZpZoSV2qrlo2uGCOdlTz54bho",
    authDomain: "simple-firebase-auth-76a2f.firebaseapp.com",
    projectId: "simple-firebase-auth-76a2f",
    storageBucket: "simple-firebase-auth-76a2f.firebasestorage.app",
    messagingSenderId: "641558606916",
    appId: "1:641558606916:web:9368695a11b5daacfcf811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 