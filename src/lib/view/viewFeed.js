import { showMenu } from './viewMenu.js';

export const viewFeed = () => {
    const divFeed = document.createElement('div');
    divFeed.innerHTML = `
    
        <header id="headerFeed">
            <img src="http://imgfz.com/i/TKBv2dp.png" width="50px">
        </header>          
        
        <div class="containerFeedBody" id="containerFeedBody">
                    
        </div>
        <footer id="footerMenu">
        </footer>
  
        `;
  
    divFeed.setAttribute('id', 'containerFeed');
    const footer = divFeed.querySelector("#footerMenu");
    footer.appendChild(showMenu());
    return divFeed;
    
  };