
export const viewRegister = () => {
    const divRegister = document.createElement('div');
    divRegister.innerHTML = `
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
                <div id="btnSignUp" class="btns">Registrarse</div>
                <p>o ingresa con con</p>
                <div id="logoG">
                <img src="http://imgfz.com/i/Cvlu08A.png">
                </div>
                <p id="question">¿Ya tienes una cuenta? <span>Iniciar sesión</span></p>
            </div>
    `;
    divRegister.setAttribute('id', 'containerForm');  
    return divRegister;
};








//window.onload = showRegister();

