export const viewMenu = () => {
  const divMenu = document.createElement('div');
  divMenu.innerHTML = `

            <header id="headerMenu">
            <img src="http://imgfz.com/i/TKBv2dp.png" width="50px">
            </header>  
            <div id="menu">
              <a href="#/menu" id="start" >
                <img src="http://imgfz.com/i/GPUk4f1.png" width="60%">
              </a>
              <a href="#/create" id="create">
                <img src="http://imgfz.com/i/x6904W7.png" width="60%">   
              <a/>
              <a href="#/profile" id="profile" >
                <img src="http://imgfz.com/i/druAwJ2.png" width="60%">
              </a>
            </div>

            <div class="newPost" id="newPost">
    <div class="title">
      <button id="btnClosePost" class="btnClosePost"> <i class="fas fa-times"></i> </button> 
      <p>Crear publicación</p>
      <button id="share">Compartir</button>
    </div>
    <div class="text">
      <textarea id="writeText">Escribe tu publicación</textarea>
      <button id="btnImage" class="btnImage"> <i class="far fa-images"></i> </button>
    </div>
  </div>

      `;

  divMenu.setAttribute('id', 'containerMenu');
  return divMenu;
};

  /*const modal= document.getElementById("newPost");
  const openModal = document.getElementById("create");
  const closeModal = document.getElementById("btnClosePost");

  openModal.addEventListener("click", ()=>{
    modal.style.display = "block";

  });*/



/*function modalNewPost(contentModal){
  const contentModal= document.getElementById("contentModal");
  const openModal = document.getElementById("create");
  const closeModal = document.getElementById("btnClosePost");

  contentModal.style.display = "none";

  openModal.addEventListener("click", () => {
    contentModal.innerHTML = "";
    contentModal.style.display = "block";

    contentModal.innerHTML =

  `<div class="newPost" id="newPost">
    <div class="title">
      <button id="btnClosePost" class="btnClosePost"> <i class="fas fa-times"></i> </button> 
      <p>Crear publicación</p>
      <button id="share">Compartir</button>
    </div>
    <div class="text">
      <textarea id="writeText">Escribe tu publicación</textarea>
      <button id="btnImage" class="btnImage"> <i class="far fa-images"></i> </button>
    </div>
  </div> `;

    closeModal.addEventListener("click", () => {
      contentModal.style.display = "none";
      contentModal.innerHTML = "";
    });

  });
}*/

