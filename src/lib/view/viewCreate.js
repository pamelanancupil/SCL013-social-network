import { showMenu } from './viewMenu.js';
import { createPost } from '../firebase/firebase.js';
//import { showPost } from '../firebase/firebase.js';
import { db } from '../firebase/firebase.js';


export const viewCreate = () => {
  const divCreate = document.createElement('div');
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
                    </div>
                    <div id="postFeed"></div>
                
            </div>
            
            <footer id="footerMenu">
            </footer>
      `;

  divCreate.setAttribute('id', 'containerCreate');
  const footer = divCreate.querySelector('#footerMenu');
    footer.appendChild(showMenu());
//guarda e imprime post
    const btnShare = divCreate.querySelector('#share');
    btnShare.addEventListener('click', () =>{
      event.preventDefault();
    const contentText = divCreate.querySelector('#writeText').value;
    //const showingPost= divCreate.querySelector('#showingPost');
      createPost(contentText);
      const showingPost = divCreate.querySelector('#postFeed');
      db.collection("post").onSnapshot((querySnapshot) => {
      showingPost.innerHTML = '';
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().content}`);
          showingPost.innerHTML += `<p id='printPost'>${doc.data().content}</p>`; 
          divCreate.querySelector('#writeText').value='';
    });
  });
});
return divCreate;
};
