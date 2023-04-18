// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjmpDR1Jh0cSm0FU4sZIaXUqjfsh3OyIo",
  authDomain: "issuelogger-ff0aa.firebaseapp.com",
  projectId: "issuelogger-ff0aa",
  storageBucket: "issuelogger-ff0aa.appspot.com",
  messagingSenderId: "931327250115",
  appId: "1:931327250115:web:31131bed9e6ea1e3f41c76",
  measurementId: "G-LGHQHXR1M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
