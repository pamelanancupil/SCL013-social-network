import {
    registerUser,
    db,
    
} from '../firebase/firebase.js';
//import { authState } from '../index.js';

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
                <p>o ingresa con</p>
                <div id="logoG">
                <img src="http://imgfz.com/i/Cvlu08A.png">
                </div>
                <p class="question">¿Ya tienes una cuenta? 
                <a href="#/login"><span>Iniciar sesión</span>
                </a>
                </p>
            </div>
    </div>
    `;
    divRegister.setAttribute('id', 'containerRegister');

    const btnSignUp = divRegister.querySelector("#btnSignUp");
    btnSignUp.addEventListener("click", () => {
        event.preventDefault();
        let userName = divRegister.querySelector("#name").value;
        let email = divRegister.querySelector("#email").value;
        let password = divRegister.querySelector("#password").value;

        if (userName === null || userName === '') {
            alert('Favor ingrese su nombre');
        } else {
            registerUser(email, password);
            //addingData(userName,email);
        }
    });

    return divRegister;
};









//window.onload = showRegister();