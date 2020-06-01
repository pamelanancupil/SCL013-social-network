// Este es el punto de entrada de tu aplicacion

import { myFunction, signInUser } from './lib/index.js';

myFunction();


const signInBtn = document.getElementById("signIn");
signInBtn.addEventListener ("click",() => {
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    
  });
  
