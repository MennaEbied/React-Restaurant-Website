/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrt33vKqOyxWI1rFwQj5Mjti6tE1EUOQ0",
  authDomain: "restaurant-4b976.firebaseapp.com",
  projectId: "restaurant-4b976",
  storageBucket: "restaurant-4b976.firebasestorage.app",
  messagingSenderId: "611122802944",
  appId: "1:611122802944:web:8850a91c6f87206bcec3e5",
  measurementId: "G-1V8VWE4905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);