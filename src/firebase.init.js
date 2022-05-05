import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPt-6a17oTjAwxyZFwBalczbWvnziIF7Q",
  authDomain: "home-furniture-279d6.firebaseapp.com",
  projectId: "home-furniture-279d6",
  storageBucket: "home-furniture-279d6.appspot.com",
  messagingSenderId: "661689095372",
  appId: "1:661689095372:web:8b65ec527bd013d3d75e69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
