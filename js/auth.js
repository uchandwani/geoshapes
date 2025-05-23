import { firebaseApp } from "./firebase-init.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";  // ✅ CORRECT


const db = getFirestore(firebaseApp);

async function updateSubmissionCount(uid) {
  const countEl = document.getElementById("submission-count");
  if (!countEl) return;

  try {
    const q = query(
      collection(db, "progress"),
      where("uid", "==", uid),
      where("status", "==", "submitted")
    );

    const snapshot = await getDocs(q);
    const count = snapshot.size;
    countEl.textContent = `✅ Submitted: ${count}`;
  } catch (err) {
    console.error("❌ Failed to fetch submission count:", err);
    countEl.textContent = "";
  }
}


const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const userInfo = document.getElementById("user-info");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

let loginInProgress = false;

// 👤 Show icon and tooltip after login
function setUserInfoDisplay(nameOrEmail) {
  if (!userInfo) return;
  userInfo.innerHTML = `
    <div title="Logged in as ${nameOrEmail}" style="display: inline-flex; align-items: center; gap: 8px;">
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
           alt="User Icon"
           style="width: 22px; height: 22px; border-radius: 50%; cursor: pointer;">
    </div>
  `;
  window.currentUserName = nameOrEmail;
}

// 🔐 Login with Google
function loginWithGoogle() {
  if (loginInProgress) return;
  loginInProgress = true;

  signInWithPopup(auth, googleProvider)
  .then(async (result) => {
    loginInProgress = false;
    const user = result.user;

    // ✅ Store in localStorage
    localStorage.setItem("uid", user.uid);
    localStorage.setItem("userName", user.displayName || user.email);

    // ✅ Store in Firestore "users" collection
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: user.displayName || user.email,
      email: user.email,
      lastLogin: new Date().toISOString()
    }, { merge: true });

    setUserInfoDisplay(user.displayName || user.email);
    toggleButtons(true);
  })

    .catch((error) => {
      loginInProgress = false;
      console.error("Google login error:", error);
    });
}

// ✉️ Email login fallback (optional)
function loginWithEmail() {
  const email = prompt("Enter email:");
  const password = prompt("Enter password:");

  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("uid", user.uid);
      setUserInfoDisplay(user.email);
      toggleButtons(true);
    })
    .catch(async (error) => {
      if (error.code === "auth/user-not-found") {
        if (confirm("User not found. Would you like to register?")) {
          try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;
            localStorage.setItem("uid", user.uid);
            setUserInfoDisplay(user.email);
            toggleButtons(true);
          } catch (err) {
            alert("Registration failed: " + err.message);
          }
        }
      } else {
        alert("Login failed: " + error.message);
      }
    });
}

// 🚪 Logout logic
function logout() {
  signOut(auth).then(() => {
    if (userInfo) userInfo.innerText = "Not logged in";
    localStorage.removeItem("uid");
    setLoggedOutDisplay();  // 👈 Add this
    window.currentUserName = "";
    toggleButtons(false);
  });
}

// 🔁 Auth state listener (handles reloads, page switches)
onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem("uid", user.uid);
    localStorage.setItem("userName", user.displayName || user.email);
    setUserInfoDisplay(user.displayName || user.email);
    toggleButtons(true);
    updateSubmissionCount(user.uid);  // 👈 Add this
  } else {
    if (userInfo) userInfo.innerText = "Not logged in";
    localStorage.removeItem("uid");
    setLoggedOutDisplay();  // 👈 Add this
    window.currentUserName = "";
    toggleButtons(false);
  }
});

// 🔁 Toggle Login / Logout buttons
function toggleButtons(isLoggedIn) {
  if (loginBtn) loginBtn.style.display = isLoggedIn ? "none" : "inline-flex";
  if (logoutBtn) logoutBtn.style.display = isLoggedIn ? "inline-flex" : "none";
}

function setLoggedOutDisplay() {
  if (!userInfo) return;

  userInfo.innerHTML = `
    <div title="Not logged in" style="display: inline-flex; align-items: center; gap: 6px;">
          <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" title="Not logged in">
        <!-- User circle -->
        <circle cx="13" cy="13" r="12" fill="#d9d9d9" stroke="#999" stroke-width="1.5"/>
        
        <!-- User head -->
        <circle cx="13" cy="10" r="3" fill="#777"/>
        
        <!-- User body -->
        <path d="M8 20c0-3 10-3 10 0" fill="#777"/>
        
        <!-- Red cross -->
        <line x1="8" y1="8" x2="18" y2="18" stroke="red" stroke-width="2" stroke-linecap="round"/>
        <line x1="18" y1="8" x2="8" y2="18" stroke="red" stroke-width="2" stroke-linecap="round"/>
      </svg> 
    </div>
  `;
}


export { loginWithGoogle, loginWithEmail, logout };

