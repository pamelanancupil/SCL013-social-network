export const viewCreate = () => {
  const divCreate = document.createElement('div');
  divCreate.innerHTML = `

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

  divCreate.setAttribute('id', 'containerCreate');
  return divCreate;
};