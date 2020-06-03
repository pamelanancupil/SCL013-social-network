
export const viewLogin = () => {
    const divLogin = document.createElement('div');
    divLogin.innerHTML = `
    <div id="containerForm">
        <a href='#/home' id="arrowBack">
            <i class="fas fa-chevron-left">
            </i>
        </a>
            <div id="logo2">
                <img src="http://imgfz.com/i/i2tPzH4.png">
            </div>
            <div id="form">
                <input type="email" id="email2" class="textInput" autocomplete= "off" placeholder="Email">
                <input type="password" id="password2" class="textInput" placeholder="Contraseña">
                <div id="btnLogin" class="btns">Iniciar sesión</div>
                <p>o ingresa con con</p>
                <div id="logoG">
                <img src="http://imgfz.com/i/Cvlu08A.png">
                </div>
                <p class="question">¿No tienes una cuenta? <span>Regístrate</span></p>
            </div>
    </div>
    `;
    divLogin.setAttribute('id', 'containerLogin');  
    return divLogin;
};