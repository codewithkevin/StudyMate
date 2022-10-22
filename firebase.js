// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs1j61hvzEFxI4s1lr0-mEiktQNWruB6U",
  authDomain: "roommate-a350c.firebaseapp.com",
  projectId: "roommate-a350c",
  storageBucket: "roommate-a350c.appspot.com",
  messagingSenderId: "1066589209395",
  appId: "1:1066589209395:web:0a4a93a1255aa03ceb3446",
  measurementId: "G-NRDC2FCR46",
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
