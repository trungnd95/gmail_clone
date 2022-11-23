import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };

