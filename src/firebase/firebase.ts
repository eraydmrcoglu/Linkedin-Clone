import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9aJc2OJrOMzrUjN1TDr9szrj5Uvwfsc0",
  authDomain: "linkedin-clone-73948.firebaseapp.com",
  projectId: "linkedin-clone-73948",
  storageBucket: "linkedin-clone-73948.appspot.com",
  messagingSenderId: "197277079415",
  appId: "1:197277079415:web:18985a5944f44915fa3372"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
