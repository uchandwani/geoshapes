// js/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// ✅ Your project credentials
const firebaseConfig = {
  apiKey: "AIzaSyD9iKzQKtP1Yqsd_4vwluzrfPGGvuJythY",
  authDomain: "geoshapes-b267a.firebaseapp.com",
  projectId: "geoshapes-b267a",
  storageBucket: "geoshapes-b267a.firebasestorage.app",
  messagingSenderId: "673840792734",
  appId: "1:673840792734:web:f4fb4c86eef7d3020a678f",
  measurementId: "G-QDHW764JP4"
};

// ✅ Initialize
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// ✅ Export everything needed
export { firebaseApp, db, auth, provider };
