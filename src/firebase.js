// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw-NkgrCSmFzmaDbgVKXveEZV3dZ0xtxk",
  authDomain: "odyssey-20fd9.firebaseapp.com",
  projectId: "odyssey-20fd9",
  storageBucket: "odyssey-20fd9.appspot.com",
  messagingSenderId: "307434080010",
  appId: "1:307434080010:web:1dceb6b47adb4ee98cdcf3",
  measurementId: "G-7CCCDYHEVK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
