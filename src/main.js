// Este es el punto de entrada de tu aplicacion
import { viewHome } from './lib/view/viewHome.js';
//import { viewRegister } from './lib/view/viewRegister.js';
import { changeRoute } from './lib/router.js';

//inicializa app
const init = () => {
  document.getElementById('root').appendChild(viewHome());
    //window. cuando cargue la pantalla
    window.addEventListener('hashchange', () => {
      console.log(window.location.hash)
      changeRoute(window.location.hash)

      
  })
}
//cuando la pantalla se cargue va ejecutar init
window.addEventListener('load', init);








//document.getElementById('root').innerHTML= '';
//document.getElementById('root').appendChild(viewRegister());
//document.getElementById('root').appendChild(viewHome());


//document.getElementById('root').innerHTML= showHome();



  /*const functions = () => {
    showHome();
  };
  window.onload = functions();*/