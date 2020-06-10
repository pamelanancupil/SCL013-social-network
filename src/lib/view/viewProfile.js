import { showMenu } from './viewMenu.js';
import {logoutGoogle} from '../firebase/firebase.js';

export const viewProfile = () => {
    const divProfile = document.createElement('div');
    divProfile.innerHTML = `
  
    <header id="headerProfile">
        <img src="http://imgfz.com/i/TKBv2dp.png" width="50px">
        <button href="#/home" id="logOut">Cerrar sesión</button>
    </header> 
    <div class="imageProfile">
        <img src="http://imgfz.com/i/TKBv2dp.png" width="180px">
    </div>
    <div class="infoProfile" id="infoProfile">
        <h3>Nombre de usuario</h3>
        <h4>Correo electrónico</h4>
            <div class="description">
                <h4>Descripción</h4>
                <p>Profesora de yoga y medicina alternativa en Narayan Estudio Chile</p>
            </div>       
    </div>
            <footer id="footerMenu">
            </footer>
  
        `;

    divProfile.setAttribute('id', 'containerProfile');
    const footer = divProfile.querySelector("#footerMenu");
    footer.appendChild(showMenu());

    const btnLogout = divProfile.querySelector('#logOut');
    btnLogout.addEventListener('click', () =>{
        logoutGoogle()
    });

    return divProfile;
};