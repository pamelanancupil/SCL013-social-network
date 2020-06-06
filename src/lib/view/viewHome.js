export const viewHome = () => {
  const divHome = document.createElement('div');
    divHome.innerHTML = `
        <div id="containerHomeFlex">
          <div id="home">
            <div id="containerTextYug">
              <div id="logo">
              <img src="http://imgfz.com/i/i2tPzH4.png">
              </div>
              <div id="textYug">
              <p>Únete al mundo del yoga. Descubre y comparte contenido y trae a tu vida todos sus beneficios.</p>
              </div>
            </div>
            <div id="containerBtn">
            <a href="#/login" id="btnLogin" class="btns">Iniciar sesión</a>
            <a href="#/register" id="btnRegister" class="btns">Registrarse</a>
            </div>
          </div>
        </div>
        
    `;
    divHome.setAttribute('id', 'containerHome');  
    return divHome;
};
