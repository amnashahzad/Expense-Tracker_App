// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArCXr3Hz9uP0Y6U1nhtaIh58KJPE0FMEM",
  authDomain: "expense-tracker-app-edfea.firebaseapp.com",
  databaseURL: "https://expense-tracker-app-edfea-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-app-edfea",
  storageBucket: "expense-tracker-app-edfea.appspot.com",
  messagingSenderId: "928626988873",
  appId: "1:928626988873:web:b82a4042947d11dad22c98",
  measurementId: "G-PSDB3WTZRM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
