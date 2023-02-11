import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN52TzYl7mX7cQzR525gKQUrTXCt8u0y4",
  authDomain: "todo-firebase-saylani.firebaseapp.com",
  projectId: "todo-firebase-saylani",
  storageBucket: "todo-firebase-saylani.appspot.com",
  messagingSenderId: "1063105316136",
  appId: "1:1063105316136:web:765cbd8f170ae23a063c1d",
  measurementId: "G-WRMT051ZHW",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
