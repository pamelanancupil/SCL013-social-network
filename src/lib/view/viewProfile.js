import { showMenu } from './viewMenu.js';
import { logOut, getCurrentUser } from '../firebase/firebaseAuth.js';
import { db } from '../firebase/firebaseAuth.js';


export const viewProfile = () => {
    const divProfile = document.createElement('div');
    let user = getCurrentUser();
    
    if(user) {
       db.collection('users').doc(user.uid).onSnapshot((doc) => {
          divProfile.innerHTML = `
    <header id="headerProfile" class="headerFCP">
        <div id="logoImgProfile">
        <img src="http://imgfz.com/i/TKBv2dp.png" width="50px">
        </div>
        <div id="logOutProfile">
        <button href="#/home" id="logOut">Cerrar sesión</button>
        </div>
    </header> 
    <div class= "containerProfileBody" id="containerProfileBody">
        <div class="imageProfile">
            <img src='${user.photoURL ? user.photoURL : "https://i.ibb.co/4J9JFF0/perfil.png" }' width='180px'>
        </div>
        <div class="infoProfile" id="infoProfile">
            <h3 id = 'displayName${user.uid}'>${user.displayName}</h3>
            <input class = 'userNameClass' type="text" id="userNameInput${user.uid}" autocomplete= "off" placeholder="Nombre de usuario" style = 'display:none'>
            <h5>${user.email}</h5>
                <div class="description">
                    <div class = 'containerDescription'>
                      <h4>Descripción</h4>
                      <button class = 'iconEdit' id ='editBtnDescription${user.uid}'><i class="icon-edit fas fa-pen"></i></button>
                    </div>
                    <div class ='containerP-Descrition'>
                      <p class = 'userDescriptionProfile' id ='userDescription${user.uid}'>${doc.data().description}</p>
                      <textarea id='editDescription${user.uid}' class = 'editDescription' style = 'display:none'></textarea>
                    </div>
                    <div class = containerBtnProfile>
                      <button class = 'iconClose' id='closeBtn${user.uid}' style = 'display:none'><i class="icon-close fas fa-times"></i></button>
                      <button class = 'iconSave' id ='saveBtnDescription${user.uid}' style = 'display:none'><i class="icon-save fas fa-check"></i></button>
                    </div>
                    
                </div>       
        </div>
    </div>
            <footer id="footerMenu">
            </footer>
  
        `;

    divProfile.setAttribute('id', 'containerProfile');
    const footer = divProfile.querySelector("#footerMenu");
    footer.appendChild(showMenu());

    const btnLogout = divProfile.querySelector('#logOut');
    btnLogout.addEventListener('click', () =>{
        logOut();
    });

    const editProfile = (user) => {
      let profileRef = db.collection('users').doc(user.uid);
      profileRef.get().then((doc) => {
        const parrafoDescription = document.getElementById('userDescription' + user.uid);
        const textareaDescription = document.getElementById('editDescription' + profileRef.id);
        const btnSaveDescription = document.getElementById('saveBtnDescription' + user.uid);
        const btnCloseDescription = document.getElementById('closeBtn' + user.uid);
        parrafoDescription.style.display = 'none';
        textareaDescription.style.display = 'block';
        btnSaveDescription.style.display = 'block';
        btnCloseDescription.style.display = 'block';
        textareaDescription.innerHTML = doc.data().description;

        btnCloseDescription.addEventListener('click', () => {
          parrafoDescription.style.display = 'block';
          textareaDescription.style.display = 'none';
          btnSaveDescription.style.display = 'none';
          btnCloseDescription.style.display = 'none';
        });

        btnSaveDescription.addEventListener('click', () => {
          let descriptionUser1 = document.getElementById('editDescription' + profileRef.id).value;
          return profileRef.update({
            description: descriptionUser1
          })
          .then(() => {
            parrafoDescription.style.display = 'block';
            textareaDescription.style.display = 'none';
            btnSaveDescription.style.display = 'none';
            btnCloseDescription.style.display = 'none';
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
          
          
        });

      });
    };

    const btnEditProfile = divProfile.querySelector('#editBtnDescription'+ user.uid);
    btnEditProfile.addEventListener('click', (doc) => {
      editProfile(getCurrentUser(doc));
    });







        })



      
      
      //const userInfo = db.collection('users').doc(user.uid)
    } else {
        window.location.hash = '#/home';
    }
    return divProfile;
};


//Profesora de yoga y medicina alternativa en Narayan Estudio Chile