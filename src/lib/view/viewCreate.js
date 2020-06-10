import { showMenu } from './viewMenu.js';

export const viewCreate = () => {
  const divCreate = document.createElement('div');
  divCreate.innerHTML = `

            <div class="containerCreateBody" id="containerCreateBody">
                <div class="title">
                  <div class = "divClosePost">
                    <a href="#/feed" id="btnClosePost" class="btnClosePost"> <i class="fas fa-times"></i> </a> 
                    <p class="share">Crear publicación</p>
                  </div>
                    <button class="share">Compartir</button>
                     
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
  const footer = divCreate.querySelector('#footerMenu');
    footer.appendChild(showMenu());
  return divCreate;
};