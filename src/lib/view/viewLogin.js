import { loginUser, authState, logInGoogle } from '../firebase/firebaseAuth.js';
import { validateloginUser } from '../index.js';

export const viewLogin = () => {
    const divLogin = document.createElement('div');
    divLogin.innerHTML = `
    <div class="containerForm">
        <a href='#/home' class="arrowBack">
            <i class="fas fa-chevron-left">
            </i>
        </a>
            <div id="logo2">
                <img src="http://imgfz.com/i/i2tPzH4.png">
            </div>
            <div id="form">
                <input type="email" id="email2" class="textInput" autocomplete= "off" placeholder="Email">
                <input type="password" id="password2" class="textInput" placeholder="Contraseña">
                <p id = "errorMssg"></p>
                <button href="#/loginMenu" id="btnLogin" class="btns">Iniciar sesión</button>
                <p>o ingresa con</p>
                <div id="logoG">
                <button href='#/feed' id="google"><img src="http://imgfz.com/i/Cvlu08A.png"></button>
                </div>
                <p class="question">¿No tienes una cuenta? 
                <a href="#/register"><span>Regístrate</span></a>
                </p>
            </div>
    </div>
    `;
    divLogin.setAttribute('id', 'containerLogin');

    const btnLogIn = divLogin.querySelector("#btnLogin");
    btnLogIn.addEventListener("click", () => {
        event.preventDefault();
        let email = divLogin.querySelector("#email2").value;
        let password = divLogin.querySelector("#password2").value;
        let errorM = divLogin.querySelector('#errorMssg');

        if (email === '' || password === '' || email === null || password === null || password.length <= 6) {
            errorM.innerHTML = validateloginUser(email, password);
            // alert('Favor ingrese su email registrado');
        }
        /* else if (password === null || password === '' ) {
                alert('Favor ingrese su password')
            } */
        else {
            loginUser(email, password);
            authState();
            //addingData(userName,email);
        }
    });

    const btnGoogle = divLogin.querySelector('#google');
    btnGoogle.addEventListener('click', () =>{
        logInGoogle();
    });

    return divLogin;
};

