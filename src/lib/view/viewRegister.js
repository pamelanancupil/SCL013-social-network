
export const viewRegister = () => {
    const divRegister = document.createElement('div');
    const containerRegister = `
        <div id="containerform">
            <div id="logo2">
                <img src="http://imgfz.com/i/i2tPzH4.png">
            </div>
            <div id="form">
                <input type="text" id="name" placeholder="Nombre de usuario">
                <input type="email" id="email" placeholder="Email">
                <input type="password" id="password" placeholder="Contraseña">
                <div id="btnRegister" class="btns">Registrarse</div>
                <p>o ingresa con con</p>
                <div id="logoG">
                <img src="http://imgfz.com/i/Cvlu08A.png">
                </div>
                <p id="question">¿Ya tienes una cuenta? <strong>Iniciar sesión</strong></p>
            </div>
        </div>
        `;
    divRegister.innerHTML = containerRegister;
    return divRegister;
};


//window.onload = showRegister();

/*const signInBtn = document.getElementById("signIn");
signInBtn.addEventListener ("click",() => {
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    
  });*/