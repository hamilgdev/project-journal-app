import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAJYXtBR-Am611QPZD2tZTpfWxNOy1oEk",
  authDomain: "practice-react-journal-app.firebaseapp.com",
  projectId: "practice-react-journal-app",
  storageBucket: "practice-react-journal-app.appspot.com",
  messagingSenderId: "46372009536",
  appId: "1:46372009536:web:01135d016d772d05ae51a5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  googleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
};
