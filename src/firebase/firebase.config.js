// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoWq6Md-f80QgTfDJtgOMBZq9IW0AnlRM",
  authDomain: "fir-fighter-sr262.firebaseapp.com",
  projectId: "fir-fighter-sr262",
  storageBucket: "fir-fighter-sr262.firebasestorage.app",
  messagingSenderId: "527307195837",
  appId: "1:527307195837:web:c8ff9066b955d3e06bfed4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);