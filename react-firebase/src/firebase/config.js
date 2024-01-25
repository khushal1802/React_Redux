// /Import the functions you need from the SDKs you need
import { getSelectionRange } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8WfRyFlrnujeKgzzYWxyvA0WavabYGE0",
  authDomain: "react-firebase-7dc9f.firebaseapp.com",
  projectId: "react-firebase-7dc9f",
  storageBucket: "react-firebase-7dc9f.appspot.com",
  messagingSenderId: "897854844707",
  appId: "1:897854844707:web:2aaead300d22775514a696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getSelectionRange(app);

export { app, firestore, storage };


// https://react-firebase-7dc9f-default-rtdb.firebaseio.com
