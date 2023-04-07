import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCioKRcaQCMkW2o5VAoY15AcBaLddZM3E",
  authDomain: "netflix-clone-58182.firebaseapp.com",
  projectId: "netflix-clone-58182",
  storageBucket: "netflix-clone-58182.appspot.com",
  messagingSenderId: "230951175789",
  appId: "1:230951175789:web:198d4d92e95f0edcd8e164",
  measurementId: "G-7MKGXVLGV4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
