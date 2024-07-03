import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"

const firebaseConfig = {

  apiKey: "AIzaSyDsQ1RgkFXYBDeOzgzEMoRZ9myy4USd5do",

  authDomain: "lanches-e2650.firebaseapp.com",

  projectId: "lanches-e2650",

  storageBucket: "lanches-e2650.appspot.com",

  messagingSenderId: "930244230910",

  appId: "1:930244230910:web:f9dc3b2aa96f5d55f06faf"

};

export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);