// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDauTYkeOs6K7MNneUodlvoboCCKoi_6-Q",
  authDomain: "react-25087.firebaseapp.com",
  projectId: "react-25087",
  storageBucket: "react-25087.appspot.com",
  messagingSenderId: "581412211438",
  appId: "1:581412211438:web:441b3e56f9ffdef5fe81ff",
  measurementId: "G-F53E6D5X5H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
