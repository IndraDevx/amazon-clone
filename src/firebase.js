import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB2xVU59vcAb7FWQEbBIok_DKXzqjdwfk",
  authDomain: "clone-b28c9.firebaseapp.com",
  projectId: "clone-b28c9",
  storageBucket: "clone-b28c9.appspot.com",
  messagingSenderId: "830990859938",
  appId: "1:830990859938:web:9a5b5c8f5fb97646eba1fb",
  measurementId: "G-DLNR04CK7G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
