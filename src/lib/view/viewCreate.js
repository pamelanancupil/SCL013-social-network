import { showMenu } from './viewMenu.js';

export const viewCreate = () => {
  const divCreate = document.createElement('div');
  divCreate.innerHTML = `

            <div class="newPost" id="newPost">
                <div class="title">
                    <a href="#/feed" id="btnClosePost" class="btnClosePost"> <i class="fas fa-times"></i> </a> 
                    <p>Crear publicación</p>
                     
                </div>
                <div class="text">
                    <textarea id="writeText">Escribe tu publicación</textarea>
                    <button id="btnImage" class="btnImage"> <i class="far fa-images"></i> </button>
                </div>
            </div>
            <footer id="footerMenu">
            </footer>
      `;

  divCreate.setAttribute('id', 'containerCreate');
  const footer = divCreate.querySelector("#footerMenu");
    footer.appendChild(showMenu());
  return divCreate;
};