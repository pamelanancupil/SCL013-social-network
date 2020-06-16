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
        <div class="containerPost"></div>
                    
        </div>
        <footer id="footerMenu">
        </footer>
  
        `;
  
    divFeed.setAttribute('id', 'containerFeed');
    const footer = divFeed.querySelector("#footerMenu");
    footer.appendChild(showMenu());

    const showingPost = divFeed.querySelector('.containerPost');
    db.collection("post").orderBy('date','desc').onSnapshot((querySnapshot) => {
        showingPost.innerHTML = '';
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().content}`);
            showingPost.innerHTML += `
            <div class = 'postFeed'>
            <h2 class='namePost'>${user.name}</h2>
            <p class='contentPost'>${doc.data().content}</p>
            <h6 class='date'>${doc.data().date}</h6>
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