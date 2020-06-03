// Este es el punto de entrada de tu aplicacion
//import { firebaseConfig } from './lib/firebase/firebaseConfig.js';
import { viewHome } from './lib/view/viewHome.js';
//import { viewRegister } from './lib/view/viewRegister.js';
import { changeRoute } from './lib/router.js';
import { registerUser } from './lib/index.js';

//inicializa app
const init = () => {
  document.getElementById('root').innerHTML = viewHome();
    //window. cuando cargue la pantalla
    window.addEventListener('hashchange', () => {
      console.log(window.location.hash)
      changeRoute(window.location.hash)

      
  })
}
//cuando la pantalla se cargue va ejecutar init
window.addEventListener('load', init);

//evento btn Register
/*const btnSignUp = document.getElementById("btnSignUp");
btnSignUp.addEventListener("click",() => {
    console.log('holi');
   let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    registerUser(email, password);
});*/






//document.getElementById('root').innerHTML= '';
//document.getElementById('root').appendChild(viewRegister());
//document.getElementById('root').appendChild(viewHome());


//document.getElementById('root').innerHTML= showHome();



  /*const functions = () => {
    showHome();
  };
  window.onload = functions();*/