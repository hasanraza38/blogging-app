import { collection, addDoc ,getDocs } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 
import { db } from "./config.js";


const blogTitle = document.querySelector('#blog-title')
const blogText = document.querySelector('#blog-text')
const form = document.querySelector('#form')
const blogCard = document.querySelector('#blogs-card-cont')
let arr=[];


 function  render() {
    blogCard.innerHTML=``
    
    
        
         for (let i = 0; i < arr.length; i++) {    
     blogCard.  innerHTML+=`
            <div class=" p-5 rounded-2xl w-[50vw] shadow-2xl mt-5">
            <div class="flex gap-2">
                <div class="avatar">
                    <div class="w-14 rounded">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Tailwind-CSS-Avatar-component" />
                    </div>
                  </div>
                  <div>
                    <h1 class="font-sans text-md text-black font-semibold">${blogTitle.value}</h1>
                    <p class="text-gray-400 font-medium">Hasan raza-August 16</p>
                  </div>  
            </div>
            <div class="mt-3">
                <p class="text-gray-500 font-medium">${blogText.value} </p>
            </div>
            <div class="mt-5 flex gap-4">
                <button class="border-none text-blue-500">Delete</button>
                <button class="border-none text-blue-500">Edit</button>
            </div>
            </div>
            
            `
        
        }

   



    
 }


form.addEventListener(('submit'),async(event)=>{
event.preventDefault();

          //  add data in firestore

    try {
    const docRef = await addDoc(collection(db, "blog's"), {
     title:blogTitle.value,
     blog: blogText.value,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  
 blogTitle.value=''
blogText.value=''

const querySnapshot = await getDocs(collection(db, "blog's"));
querySnapshot.forEach((doc) => {
  arr.push({
          title:blogTitle.value,
          blog:blogText.value,});          
});

render();       
});




