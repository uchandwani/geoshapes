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

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const userInfo = document.getElementById("user-info");

let loginInProgress = false;

function loginWithGoogle() {
  if (loginInProgress) return;
  loginInProgress = true;

  signInWithPopup(auth, googleProvider)
    .then((result) => {
      loginInProgress = false;
      const user = result.user;
      localStorage.setItem("uid", user.uid);
      userInfo.innerText = `Logged in as ${user.displayName || user.email}`;
    })
    .catch((error) => {
      loginInProgress = false;
      console.error("Google login error:", error);
    });
}

function loginWithEmail() {
  const email = prompt("Enter email:");
  const password = prompt("Enter password:");

  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("uid", user.uid);
      userInfo.innerText = `Logged in as ${user.email}`;
    })
    .catch(async (error) => {
      if (error.code === "auth/user-not-found") {
        if (confirm("User not found. Would you like to register?")) {
          try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;
            localStorage.setItem("uid", user.uid);
            userInfo.innerText = `Registered and logged in as ${user.email}`;
          } catch (err) {
            alert("Registration failed: " + err.message);
          }
        }
      } else {
        alert("Login failed: " + error.message);
      }
    });
}

function logout() {
  signOut(auth).then(() => {
    userInfo.innerText = "Not logged in";
    localStorage.removeItem("uid");
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    userInfo.innerText = `Logged in as ${user.displayName || user.email}`;
    localStorage.setItem("uid", user.uid);
  } else {
    userInfo.innerText = "Not logged in";
    localStorage.removeItem("uid");
  }
});

window.loginWithGoogle = loginWithGoogle;
window.loginWithEmail = loginWithEmail;
window.logout = logout;
