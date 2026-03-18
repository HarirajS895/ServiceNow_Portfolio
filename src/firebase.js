import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database"; // ✅ ADD THIS

const firebaseConfig = {
  apiKey: "AIzaSyDyETdDzYC66hcU8uuli44sjQyUxn81w8c",
  authDomain: "myportfolio-3d85f.firebaseapp.com",
  projectId: "myportfolio-3d85f",
  storageBucket: "myportfolio-3d85f.firebasestorage.app",
  messagingSenderId: "535868141891",
  appId: "1:535868141891:web:4c99b409f391924b517ff6",
  measurementId: "G-H04HGSLMP0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app); // ✅ FIXED