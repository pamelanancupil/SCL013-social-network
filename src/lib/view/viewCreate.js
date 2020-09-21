import { showMenu } from './viewMenu.js';
import { createPost } from '../firebase/firebasePost.js';
import { getCurrentUser } from '../firebase/firebaseAuth.js';

export const viewCreate = () => {
  const divCreate = document.createElement('div');
  let user = getCurrentUser();
  if (user) {
    divCreate.innerHTML = `
              <header id="headerCreate" class="headerFCP">
                <a href="#/feed" id="btnClosePost" class="btnClosePost"> <i class="fas fa-times"></i> </a> 
                <p class="share" id="shareP">Crear publicación</p>
                <button id="share" class="share">Compartir</button>
              </header>
              <div class="containerCreateBody" id="containerCreateBody">
                  <div class="text">
                      <textarea id="writeText" placeholder="Escribe tu publicación"></textarea>
                      <button id="btnImage" class="btnImage"> <i class="far fa-images"></i> </button>
                      
                      <img id="fotoPublicacion">
                      <input type="file" id="inputImg">
                      <button id="btnPublicar" style="display: block" > Publicar</button>

                      </div>
                      
                  
              </div>
              
              <footer id="footerMenu">
              </footer>
        `;



    divCreate.setAttribute('id', 'containerCreate');
    const footer = divCreate.querySelector('#footerMenu');
    footer.appendChild(showMenu());
    //guarda e imprime post
    const btnShare = divCreate.querySelector('#share');
    btnShare.addEventListener('click', () => {
      event.preventDefault();
      const contentText = divCreate.querySelector('#writeText').value;
      //const showingPost= divCreate.querySelector('#showingPost');
      createPost(contentText, getCurrentUser());
      divCreate.querySelector('#writeText').value = '';
      
    });
  } else {
    window.location.hash = '#/home';
  }
  return divCreate;

};