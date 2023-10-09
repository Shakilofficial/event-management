// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvzLZwo-VtDjZI8_ms-UYVIPt_9Q0p5L8",
  authDomain: "crispberry-events.firebaseapp.com",
  projectId: "crispberry-events",
  storageBucket: "crispberry-events.appspot.com",
  messagingSenderId: "956008644982",
  appId: "1:956008644982:web:20bd7eaae21de086403a57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;