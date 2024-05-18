// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentify-36535.firebaseapp.com",
  projectId: "rentify-36535",
  storageBucket: "rentify-36535.appspot.com",
  messagingSenderId: "1062536762774",
  appId: "1:1062536762774:web:41d94fbf78f5c4e8c939b7",
  measurementId: "G-0Z0T6X74MN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);