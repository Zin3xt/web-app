// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV1bGOQ4WhJYObVUb-i_PAoC3H_lUN_0A",
  authDomain: "snms-100e5.firebaseapp.com",
  databaseURL:
    "https://snms-100e5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "snms-100e5",
  storageBucket: "snms-100e5.appspot.com",
  messagingSenderId: "21296914981",
  appId: "1:21296914981:web:1503eb1a69256812e015cc",
  measurementId: "G-KVMF07NZEZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
