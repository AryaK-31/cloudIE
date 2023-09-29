import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAucuJzHv0uQyG2OWxPtRj79VhtkIv7X4Q",
  authDomain: "cloudie-5a048.firebaseapp.com",
  projectId: "cloudie-5a048",
  storageBucket: "cloudie-5a048.appspot.com",
  messagingSenderId: "469479412755",
  appId: "1:469479412755:web:3317b2ad2ab3c5c0759be6",
  measurementId: "G-K7JMK845RQ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);