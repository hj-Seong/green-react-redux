// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiYHs09HlAw5gMSnIqfq94ZVyM18eMjCE",
  authDomain: "fir-login-89c25.firebaseapp.com",
  projectId: "fir-login-89c25",
  storageBucket: "fir-login-89c25.appspot.com",
  messagingSenderId: "607427548558",
  appId: "1:607427548558:web:d501c36c167fc5a51180df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);