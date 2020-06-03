// Este es el punto de entrada de tu aplicacion
//import { firebaseConfig } from './lib/firebase/firebaseConfig.js';
import { viewHome } from './lib/view/viewHome.js';
import { viewRegister } from './lib/view/viewRegister.js';
import { changeRoute } from './lib/router.js';


document.getElementById('root').innerHTML = viewHome();

//inicializa app
const init = () => {
    //window. cuando cargue la pantalla
    window.addEventListener('hashchange', () => {
      console.log(window.location.hash)
      changeRoute(window.location.hash)
      document.getElementById('root').appendChild(viewRegister());
  })
}
//cuando la pantalla se cargue va ejecutar init
window.addEventListener('load', init)








//document.getElementById('root').innerHTML= showHome();



  /*const functions = () => {
    showHome();
  };
  window.onload = functions();*/