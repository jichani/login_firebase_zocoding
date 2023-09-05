// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

document.getElementById('signUpButton').addEventListener('click', (event) => {
  event.preventDefault();

  const singUpEmail = document.getElementById('singUpEmail').value
  const singUpPassword = document.getElementById('singUpPassword').value

  createUserWithEmailAndPassword(auth, singUpEmail, singUpPassword)
    .then((userCredential) => {
      console.log(userCredential)
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log("error")
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})

document.getElementById('signInButton').addEventListener('click', (event) => {
  event.preventDefault();

  const singInEmail = document.getElementById('singInEmail').value
  const singInPassword = document.getElementById('singInPassword').value

  signInWithEmailAndPassword(auth, singInEmail, singInPassword)
    .then((userCredential) => {
      console.log(userCredential);
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log('로그인 실패');
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})



