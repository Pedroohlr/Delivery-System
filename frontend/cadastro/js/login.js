import { signInWithPopup,GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { provider, auth} from "../../src/js/firebase.js"; 

const login = () => signInWithPopup(auth, provider).then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  localStorage.setItem("userName", user.displayName);
  localStorage.setItem("userPhoto", user.photoURL);
  localStorage.setItem("userEmail", user.email);
  localStorage.setItem("userToken", token);
  console.log("teste")
  window.location.href="../../src/html/index.html";
}).catch((error) => {
    console.log(error)
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.customData.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
  
});

document.querySelector(".login-google").addEventListener("click", login);