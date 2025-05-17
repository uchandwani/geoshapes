// Replace with your Firebase project's credentials
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD9iKzQKtP1Yqsd_4vwluzrfPGGvuJythY",
    authDomain: "geoshapes-b267a.firebaseapp.com",
    projectId: "geoshapes-b267a",
    storageBucket: "geoshapes-b267a.firebasestorage.app",
    messagingSenderId: "673840792734",
    appId: "1:673840792734:web:f4fb4c86eef7d3020a678f",
    measurementId: "G-QDHW764JP4"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp); // ✅ Add this line
