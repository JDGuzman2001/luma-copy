import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa7GPZZWWteHrA4GWeW7p30U-62k4UBqc",
  authDomain: "luma-copy.firebaseapp.com",
  projectId: "luma-copy",
  storageBucket: "luma-copy.appspot.com",
  messagingSenderId: "944892873791",
  appId: "1:944892873791:web:e3ee1bdfde4f7ddd60bc8a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)