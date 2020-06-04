import { registerUser } from '../firebase/firebase.js';
import { authState } from '../firebase/firebase.js'

export const viewRegister = () => {
    const divRegister = document.createElement('div');
    divRegister.innerHTML = `
    <div id="containerForm">
        <a href='#/home' id="arrowBack">
            <i class="fas fa-chevron-left">
            </i>
        </a>
            <div id="logo2">
                <img src="http://imgfz.com/i/i2tPzH4.png">
            </div>
            <div id="form">
                <input type="text" id="name" class="textInput" autocomplete= "off" placeholder="Nombre de usuario">
                <input type="email" id="email" class="textInput" autocomplete= "off" placeholder="Email">
                <input type="password" id="password" class="textInput" placeholder="Contraseña">
                <button id="btnSignUp" class="btns">Registrarse</button>
                <p>o ingresa con con</p>
                <div id="logoG">
                <img src="http://imgfz.com/i/Cvlu08A.png">
                </div>
                <p class="question">¿Ya tienes una cuenta? <span>Iniciar sesión</span></p>
            </div>
    </div>
    `;
    divRegister.setAttribute('id', 'containerRegister');  

    const btnSignUp = divRegister.querySelector("#btnSignUp");
    btnSignUp.addEventListener("click",() => {
    console.log('holi');
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    registerUser(email, password);
    authState();
});

    return divRegister;
};









//window.onload = showRegister();

