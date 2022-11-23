import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrGbdyTozCYskqpLkVR2qTUQvpN_Z82SM",
  authDomain: "clone-779c1.firebaseapp.com",
  projectId: "clone-779c1",
  storageBucket: "clone-779c1.appspot.com",
  messagingSenderId: "5213953667",
  appId: "1:5213953667:web:01d81266fdd6f8959185b6",
  measurementId: "G-NMRHXYR00B"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

