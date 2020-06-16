import {
    registerUser, logInGoogle, addingUserData
} from '../firebase/firebaseAuth.js';
import {
    validateloginUser
} from '../index.js'
//import { authState } from '../index.js';


export const viewRegister = () => {
    const divRegister = document.createElement('div');
    divRegister.innerHTML = `
    <div class="containerForm">
        <a href='#/home' class="arrowBack">
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
                <p id = "errorMssg"></p>
                <button id="btnSignUp" class="btns">Registrarse</button>
                <p>o ingresa con</p>
                <div id="logoG">
                <button href='#/feed' id="google"><img src="http://imgfz.com/i/Cvlu08A.png"></button>
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
        let errorM = divRegister.querySelector('#errorMssg');

        /*if (userName === null || userName === '') {
            errorM.innerHTML ='Favor ingrese su nombre';
        } */
        if (email === '' || password === '' || email === null || password === null || password.length <= 6) {
            errorM.innerHTML = validateloginUser(email, password, userName);
        } else {
            registerUser(email, password);
            addingUserData(userName,email);
        }
    });

    const btnG = divRegister.querySelector('#google');
    btnG.addEventListener('click', () =>{
        logInGoogle();
    });

    return divRegister;
};









//window.onload = showRegister();