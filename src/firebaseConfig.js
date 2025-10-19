import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAdqj5EXx_cuvIj8HSm0lmxJFQ0PVhnSo",
  authDomain: "eduportal-90a85.firebaseapp.com",
  projectId: "eduportal-90a85",
  storageBucket: "eduportal-90a85.firebasestorage.app",
  messagingSenderId: "885941709311",
  appId: "1:885941709311:web:f86f9eb938133b8bad9fca",
  measurementId: "G-Y9W73EJPQF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
