export const viewFeed = () => {
    const divFeed = document.createElement('div');
    divFeed.innerHTML = `
  
    <header id="headerFeed">
        <img src="http://imgfz.com/i/TKBv2dp.png" width="50px">
    </header>          
    
    <div class="containerPost" id="containerPost">
                  
    </div>
  
        `;
  
    divFeed.setAttribute('id', 'containerFeed');
    return divFeed;
  };