import { showMenu } from './viewMenu.js';
import { getCurrentUser } from '../firebase/firebaseAuth.js';
import { readPost } from '../firebase/firebasePost.js';

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
    readPost();
  } else {
    window.location.hash = '#/home';
  }
  return divFeed;
};