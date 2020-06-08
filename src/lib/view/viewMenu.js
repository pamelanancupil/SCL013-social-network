export const showMenu = () => {
  const divMenu = document.createElement('div');
  divMenu.innerHTML = `

             
            <div id="menu">
              <a href="#/feed" id="start" >
                <img src="http://imgfz.com/i/GPUk4f1.png" width="60%">
              </a>
              <a href="#/create" id="create">
                <img src="http://imgfz.com/i/x6904W7.png" width="60%">   
              <a/>
              <a href="#/profile" id="profile" >
                <img src="http://imgfz.com/i/druAwJ2.png" width="60%">
              </a>
            </div>

      `;

  divMenu.setAttribute('id', 'containerMenu');
  return divMenu;
};
