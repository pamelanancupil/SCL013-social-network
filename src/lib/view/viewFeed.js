import { showMenu } from './viewMenu.js';
import { db, getCurrentUser } from '../firebase/firebaseAuth.js';

export const viewFeed = () => {
    const divFeed = document.createElement('div');
    let user = getCurrentUser();
    if(user) {

    
    divFeed.innerHTML = `
    
        <header id="headerFeed" class="headerFCP">
            <img src="http://imgfz.com/i/TKBv2dp.png" width="50px">
        </header>          
        
        <div class="containerFeedBody" id="containerFeedBody">
        <div id="postFeed"></div>
                    
        </div>
        <footer id="footerMenu">
        </footer>
  
        `;
  
    divFeed.setAttribute('id', 'containerFeed');
    const footer = divFeed.querySelector("#footerMenu");
    footer.appendChild(showMenu());

    const showingPost = divFeed.querySelector('#postFeed');
    db.collection("post").onSnapshot((querySnapshot) => {
        showingPost.innerHTML = '';
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().content}`);
            showingPost.innerHTML += `
            <p id='printPost'>${doc.data().content}</p>
            <h5 id='date'>${doc.data().date}</h5>`; 
           
      });
    });
    //return divFeed;
    } else {
        window.location.hash = '#/home';
    }
   return divFeed;    
  };