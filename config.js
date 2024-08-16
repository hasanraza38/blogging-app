import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDw8kwcIsWFb-uGLsFUdGoo1P7aagP-3WI",
    authDomain: "bloggingapp1.firebaseapp.com",
    projectId: "bloggingapp1",
    storageBucket: "bloggingapp1.appspot.com",
    messagingSenderId: "571081796976",
    appId: "1:571081796976:web:dee917044aa6abac79b3b5",
    measurementId: "G-CQDBJZ1ZLN"
  };

export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const db = getFirestore(app);
