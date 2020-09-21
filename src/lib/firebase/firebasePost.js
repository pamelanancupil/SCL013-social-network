import { db, getCurrentUser } from '../firebase/firebaseAuth.js';

//CREANDO COLECCIÓN DE DOCUMENTOS EN LOS POST
const datePost = new Date();

export const createPost = (contentText, user) => {
  //console.log(user);
  if (validatePost(contentText)){
  db.collection('post').add({
      name: user.displayName,
      userId: user.uid,
      photoURL: user.photoURL,
      date: datePost.toLocaleString(),
      content: contentText,
      like: []
    })
    .then((docRef) => {
      window.location.hash = '#/feed';
      //console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      //console.error('Error adding document: ', error);
    })
} else {
  alert('Por favor ingresa un texto de mas de 4 caracteres');
  window.location.hash = '#/create';
}
};

//MOSTRAR POST
export const readPost = () => {
  db.collection("post").orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    const showingPost = document.querySelector('.containerPost');
    showingPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data().content}`);
      showingPost.innerHTML += `
        <div class = 'postFeed'>
          <div class = 'authorPost'>
            <img src='${doc.data().photoURL ? doc.data().photoURL : "https://i.ibb.co/4J9JFF0/perfil.png" }' width='40px'>
            <h2 class='namePost'>${doc.data().name}</h2>            
          </div>
          <div class = 'contentDiv'>
            <p class='contentPost' id = 'postMessagge${doc.id}'>${doc.data().content}</p>
            <textarea id='editArea${doc.id}' class = 'editContent' style = 'display:none'></textarea>
          </div>
            <div class = 'contentIconsPost'>
              <div class ='contentLike'>
                <button class = 'iconLike' id='likesBtn${doc.id}'><i class="icon-like fas fa-spa"></i></button>
                <p class = 'numberLikes' id = 'likesCount${doc.id}'></p>
              </div>
              <div class ='editAndDelete'>
                <button class = 'iconClose' id='closeBtn${doc.id}' style = 'display:none'><i class="icon-close fas fa-times"></i></button>
                <button class = 'iconSave' id ='saveBtn${doc.id}' style = 'display:none'><i class="icon-save fas fa-check"></i></button>
                <button class = 'iconEdit' id ='editBtn${doc.id}'><i class="icon-edit fas fa-pen"></i></button>
                <button class = 'iconDelete' id ='deleteBtn${doc.id}'><i class="icon-delete fas fa-trash-alt"></i></button>
              </div>
            </div>
            <h6 class='date'>${doc.data().date}</h6>
        </div>
            `;
      //console.log(doc.data().date);

    });
    querySnapshot.forEach(doc => {
      //toma como argumentos documento, id del documento y el usuario actual
      eventEditPost(doc, doc.id, getCurrentUser());
      eventDeletePost(doc, doc.id, getCurrentUser());
      eventLikeUnlikePost(doc, doc.id , getCurrentUser());
    });
  });
};

//FUNCIÓN EVENTOS EN POST
//EDITAR
//toma como parametros documento, id del documento y el usuario 
const eventEditPost = (doc, docid, user) => {
  if (user) {
    //console.log(user.uid, 'userID');
    //console.log(doc.data().userId, 'docUSerId');
    if (user.uid === doc.data().userId) {
      const btnEdit = document.getElementById('editBtn' + doc.id);
      btnEdit.addEventListener('click', () => {
        editPost(docid);
        //console.log(docid, 'docID');
      });
    } else {
      document.getElementById('editBtn' + doc.id).style.display = "none";
      document.getElementById('deleteBtn' + doc.id).style.display = 'none';
    }
  }
};

//ELIMINAR
const eventDeletePost = (doc, docid, user) => {
  if (user) {
    if (user.uid === doc.data().userId) {
      const btnDelete = document.getElementById('deleteBtn' + doc.id);
      btnDelete.addEventListener('click', () => {
        deletePost(docid);
      });
    } else {
      document.getElementById('editBtn' + doc.id).style.display = "none";
      document.getElementById('deleteBtn' + doc.id).style.display = 'none';
    }
  }
};

//DAR Y QUITAR LIKE EN POST
const eventLikeUnlikePost = (doc, id, user) => {
  const likesCounter = doc.data().like.length;
  const likeP = document.getElementById('likesCount' + doc.id);
  if(user) {
    db.collection('post').doc(id).get().then((result) => {
      const postUser = result.data();
      likeP.innerHTML = likesCounter + ` Me gusta`;
      /*if(postUser.like == null || postUser.like == '') {
        postUser.like = [];
      }*/
      
      if(postUser.like.includes(user.uid)){
        const btnLikePost = document.getElementById('likesBtn' + doc.id);
        btnLikePost.addEventListener('click', () => {
          unlikePost(doc.id, postUser.like);
          btnLikePost.style.color = '#cfcfcf';
        })      
      } else {
        const btnLikePost = document.getElementById('likesBtn' + doc.id);
        btnLikePost.addEventListener('click', () => {
          likePost(doc.id, postUser.like);

          btnLikePost.style.color = '#f3a674';
        })
      }
    })
    .catch(() => {

    })    
  }
};


//FUNCIÓN EDITAR POST
const editPost = (id) => {
  let contentRef = db.collection("post").doc(id);
  //console.log(contentRef.id, 'funcion editpost')

  contentRef.get().then(doc => {
    const textAreaEditPost = document.getElementById('editArea' + contentRef.id);
    textAreaEditPost.style.display = 'block';
    textAreaEditPost.innerHTML = doc.data().content;
    document.getElementById('postMessagge' + doc.id).style.display = 'none';
    document.getElementById('editBtn' + doc.id).style.display = 'none';
    document.getElementById('deleteBtn' + doc.id).style.display = 'none';
    document.getElementById('saveBtn' + doc.id).style.display = 'block';
    document.getElementById('closeBtn' + doc.id).style.display = 'block';

    const btnSavePostEdited = document.getElementById('saveBtn' + doc.id);
    const btnCloseEdit = document.getElementById('closeBtn' + doc.id);

    btnCloseEdit.addEventListener('click', () => {
      document.getElementById('postMessagge' + doc.id).style.display = 'block';
      document.getElementById('editBtn' + doc.id).style.display = 'block';
      document.getElementById('deleteBtn' + doc.id).style.display = 'block';
      document.getElementById('saveBtn' + doc.id).style.display = 'none';
      document.getElementById('closeBtn' + doc.id).style.display = 'none';
      document.getElementById('editArea' + contentRef.id).style.display = 'none';
    });


    btnSavePostEdited.addEventListener('click', () => {
      let contentTextEdited = document.getElementById('editArea' + contentRef.id).value;
      // Set the "capital" field of the city 'DC'
      return contentRef.update({
          content: contentTextEdited
        })
        .then(() => {
          //console.log("Document successfully updated!");
          textAreaEditPost.style.display = 'none';
          document.getElementById('postMessagge' + doc.id).style.display = 'block';
          document.getElementById('editBtn' + doc.id).style.display = 'block';
          document.getElementById('deleteBtn' + doc.id).style.display = 'block';
          document.getElementById('saveBtn' + doc.id).style.display = 'none';
          document.getElementById('closeBtn' + doc.id).style.display = 'none';
        })
        .catch((error) => {
          // The document probably doesn't exist.
          //console.error("Error updating document: ", error);
        });
    });
  });
};

//FUNCIÓN ELIMINAR POST
const deletePost = (id) => {
  if (confirm("¿Quieres eliminar la publicación?")) {
    db.collection("post").doc(id).delete()
    .then(() => {
      //console.log("Document successfully deleted!");
      readPost();
    }).catch((error) => {
      //console.error("Error removing document: ", error);
    });
  };
};

//FUNCIÓN DAR LIKE
const likePost = (id, like) => {
  firebase.auth().onAuthStateChanged((user) => {
    like.push(user.uid);
    return db.collection('post').doc(id).update({
      like: like
    })
    .then(e => {});
});
};

//FUNCIÓN QUITAR LIKE
const unlikePost = (id, like) => {
  firebase.auth().onAuthStateChanged((user) => {
    let indexOfId = like.indexOf(user.uid);
    like.splice(indexOfId, 1);
    return db.collection('post').doc(id).update({
      like: like
    })
    .then(e => {});
  });
};

//VALIDA SI EL INPUT DEL POST ESTA VACIO
export const validatePost = contentText => {
  if (contentText === "" || contentText.length < 4) {
    //alert('Por favor ingresa un texto de mas de 4 caracteres');
    return false;
  } else {
    return true;
  }
};

// PRUEBA IMG
// export const uploadImagePost = (file, userId) => {
//   const refStorage = firebase.storage().ref(`ColeccionImg/${userId}/${file.name}`);
//   return refStorage.put(file).then(snapshot => snapshot.ref.getDownloadURL());
// };
