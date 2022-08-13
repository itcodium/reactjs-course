// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKQneV-lkiWR1ZRyZIPa4m5Myj6mWI9n8",
  authDomain: "cart-6e3a8.firebaseapp.com",
  projectId: "cart-6e3a8",
  storageBucket: "cart-6e3a8.appspot.com",
  messagingSenderId: "778812493690",
  appId: "1:778812493690:web:47880f5fb19e30aa5010c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);