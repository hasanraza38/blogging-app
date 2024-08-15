import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth , db} from "./config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 

const loginBtn=document.querySelector('#login-btn')
const form=document.querySelector('#form')
const registerBtn=document.querySelector('#register')
const password=document.querySelector('#password')
const email=document.querySelector('#email')
const firstName=document.querySelector('#first-name')
const lastName=document.querySelector('#last-name')
let userUid =''


// register and add user info in firestore


  form.addEventListener('submit',async(event)=>{
    event.preventDefault();
   
    try {
        //    register user

        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        userUid = user.uid;
        
        
        // add user info in fire store 
      const docRef = await addDoc(collection(db, "user's"), {
        firstName:firstName.value ,
        lastName: lastName.value ,
        email:email.value ,
        uid:userUid,    
      });
    //   console.log(docRef.id);
    window.location='login.html'
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    }
});


// navbar login button

loginBtn.addEventListener(('click'),()=> window.location='login.html')