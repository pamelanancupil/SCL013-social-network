// Este es el punto de entrada de tu aplicacion

import {
  signInUser 
} from './lib/index.js';

/*const signInBtn = document.getElementById("signIn");
signInBtn.addEventListener ("click",() => {
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    
  });*/
  
const root = document.getElementById('root');

  const showRoot = () => {
    root.innerHTML = `
        <div id= "containerSignIn">
          <div id="signIn">
            <div id="textYug">
              <div id="logo">
              <img src="http://imgfz.com/i/lRAYp47.png">
              </div>
              <p>Únete al mundo del yoga. Descubre y comparte contenido y trae a tu vida todos sus beneficios.</p>
            </div>
            <div id="containerBtn">
            <button id="btn1" class="btns">Iniciar sesión</button>
            <button id="btn2" class="btns">Registrarse</button>
            </div>
          </div>
        </div>
        
        
        <!--<div id="form">
              <input type="text" id="name" placeholder="Nombre de usuario">
              <input type="email" id="email" placeholder="Email">
              <input type="password" id="password" placeholder="Contraseña">
              <button id="signIn">Registrarse</button>
              </div>-->
    `;
  };
  window.onload = showRoot();
  console.log(showRoot);