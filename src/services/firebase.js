
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9-3R3jAHU3ckhpNmetsGp74M4_kmrWzc",
  authDomain: "chatty-app-90604.firebaseapp.com",
  projectId: "chatty-app-90604",
  storageBucket: "chatty-app-90604.appspot.com",
  messagingSenderId: "128940339641",
  appId: "1:128940339641:web:a3e489dc25b419de460668"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)



