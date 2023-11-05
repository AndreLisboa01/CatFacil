import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYUl4sx-gwE9tvaUDLlITy7c-YIqvuBPY",
  authDomain: "auth-2426b.firebaseapp.com",
  projectId: "auth-2426b",
  storageBucket: "auth-2426b.appspot.com",
  messagingSenderId: "1000630534203",
  appId: "1:1000630534203:web:a882547ce9bd7bc2e29c1e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);