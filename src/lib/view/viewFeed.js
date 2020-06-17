import {
  showMenu
} from './viewMenu.js';
import {
  db,
  getCurrentUser
} from '../firebase/firebaseAuth.js';

export const viewFeed = () => {
  const divFeed = document.createElement('div');
  let user = getCurrentUser();
  if (user) {


    divFeed.innerHTML = `
    
        <header id="headerFeed" class="headerFCP">
            <img src="http://imgfz.com/i/TKBv2dp.png" width="50px">
        </header>          
        
        <div class="containerFeedBody" id="containerFeedBody">
        <div class="containerPost"></div>
                    
        </div>
        <footer id="footerMenu">
        </footer>
  
        `;

    divFeed.setAttribute('id', 'containerFeed');
    const footer = divFeed.querySelector("#footerMenu");
    footer.appendChild(showMenu());

    const showingPost = divFeed.querySelector('.containerPost');
    db.collection("post").orderBy('date', 'desc').onSnapshot((querySnapshot) => {
      showingPost.innerHTML = '';
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().content}`);
        showingPost.innerHTML += `
            <div class = 'postFeed'>
            
            <div class = 'authorPost'>
            <img src='${doc.data().photoURL}' width='40px'>
            <h2 class='namePost'>${doc.data().name}</h2>            
            </div>
            <div class = 'contentDiv'>
            <p class='contentPost'>${doc.data().content}</p>
            </div>
            <div class = 'contentIconsPost'>
            <div class ='contentLike'>
            <button class = 'iconLike'><i class="icon-like fas fa-spa"></i></button>
            <h6 class='date'>${doc.data().date}</h6>
            </div>
            <div class ='editAndDelete'>
            <button class = 'iconEdit'><i class="icon-edit fas fa-pen"></i></button>
            <button class = 'iconDelete'><i class="icon-delete fas fa-trash-alt"></i></button>
            </div>
            
            </div>
                        
            
            </div>
            `;
        console.log(doc.data().date);

      });
    });
    //return divFeed;
  } else {
    window.location.hash = '#/home';
  }
  return divFeed;
};