// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8kNxusvWV3xY-r0McwCV-KOfBuKOvXaU",
  authDomain: "stayfinder-e6b5d.firebaseapp.com",
  projectId: "stayfinder-e6b5d",
  storageBucket: "stayfinder-e6b5d.appspot.com",
  messagingSenderId: "724522991455",
  appId: "1:724522991455:web:566c81b1481a2eada0c0ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
