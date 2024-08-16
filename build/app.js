import { onAuthStateChanged ,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";


const loginBtn=document.querySelector('#login-btn')
const registerBtn=document.querySelector('#register-btn')
const loginRegisterDiv=document.querySelector('#login-register-cont')
const logoutDiv=document.querySelector('#logout-div')
const logoutBtn=document.querySelector('#logout-btn')


loginBtn.addEventListener(('click'),()=>window.location='login.html')
registerBtn.addEventListener(('click'),()=>window.location='register.html')


        // on auth state change

onAuthStateChanged(auth, (user) => {
    if (user) {

      loginRegisterDiv.style.display = 'none'     
    logoutDiv.style.display = 'block'
    } 
    else {
      loginRegisterDiv.style.display = 'block'
      logoutDiv.style.display = 'none';

    }
  })
  

// logout
 
  logoutBtn.addEventListener('click', () => {
    signOut(auth)
      .then(() => {
console.log('logout successfully');

      })
      .catch((error) => {
        console.log(error);
        
      });
  });