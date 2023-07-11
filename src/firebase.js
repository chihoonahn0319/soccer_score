// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdeDG5qttSZMWvnQF6mDq6itAzbpqhOCo",
  authDomain: "soccer-c882a.firebaseapp.com",
  projectId: "soccer-c882a",
  storageBucket: "soccer-c882a.appspot.com",
  messagingSenderId: "217611952885",
  appId: "1:217611952885:web:a50f12a1d509e721af1bbc",
  measurementId: "G-F1LGT3ZFX7",
};

// Firebase 앱 초기화
export const app = initializeApp(firebaseConfig);

// Firestore 인스턴스 생성
export const db = getFirestore(app);
