export const showMenu = () => {
  const divMenu = document.createElement('div');
  divMenu.innerHTML = `    
            <div id="menu">
              <a href="#/feed" id="start" >
                <i class="fas fa-home" id="iconHome">
              </i>
              </a>
              <a href="#/create" id="create">
                <i class="fas fa-plus-square" id="iconCreate"></i>  
              <a/>
              <a href="#/profile" id="profile" >
                <i class="fas fa-user" id="iconProfile"></i> 
              </a>
            </div>

      `;

  divMenu.setAttribute('id', 'containerMenu');
  return divMenu;
};
