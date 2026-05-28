// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDWwHRxCRaiGDAcU6gfzL8-538URxxu0Y",
    authDomain: "cyrptocurrencytracker.firebaseapp.com",
    projectId: "cyrptocurrencytracker",
    storageBucket: "cyrptocurrencytracker.firebasestorage.app",
    messagingSenderId: "877372162274",
    appId: "1:877372162274:web:5b481ceda638fbeaff1ebb",
    measurementId: "G-6W1K7GSGTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
