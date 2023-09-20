// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm5qryCGy_joZuot_ojtEEI7Sx4RnXj9E",
  authDomain: "kings-attendance-9f41c.firebaseapp.com",
  projectId: "kings-attendance-9f41c",
  storageBucket: "kings-attendance-9f41c.appspot.com",
  messagingSenderId: "1044746815285",
  appId: "1:1044746815285:web:810f445b2743446d3b6e7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
