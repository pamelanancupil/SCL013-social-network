import {
  db,
  getCurrentUser
} from '../firebase/firebaseAuth.js';

//CREANDO COLECCIÓN DOCUMENTOS EN LOS POST
const datePost = new Date();

export const createPost = (contentText, user) => {
  console.log(user);
  db.collection('post').add({
      name: user.displayName,
      userId: user.uid,
      photoURL: user.photoURL,
      date: datePost.toLocaleString(),
      content: contentText
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    })

}

//MOSTRAR POST
export const readPost = () => {
  db.collection("post").orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    const showingPost = document.querySelector('.containerPost');
    showingPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().content}`);
      showingPost.innerHTML += `
            <div class = 'postFeed'>
            
            <div class = 'authorPost'>
            <img src='${doc.data().photoURL ? doc.data().photoURL : "https://i.ibb.co/4J9JFF0/perfil.png" }' width='40px'>
            <h2 class='namePost'>${doc.data().name}</h2>            
            </div>
            <div class = 'contentDiv'>
            <p class='contentPost'>${doc.data().content}</p>
            <textarea id='edit${doc.id}' class = 'editContent' style = 'display:none'></textarea>
            </div>
            <div class = 'contentIconsPost'>
            <div class ='contentLike'>
            <button class = 'iconLike'><i class="icon-like fas fa-spa"></i></button>
            <h6 class='date'>${doc.data().date}</h6>
            </div>
            <div class ='editAndDelete'>
            <button class = 'iconSave' style = 'display:none'><i class="icon-save fas fa-check"></i></button>
            <button class = 'iconEdit' id ='${doc.id}'><i class="icon-edit fas fa-pen"></i></button>
            <button class = 'iconDelete'><i class="icon-delete fas fa-trash-alt"></i></button>
            </div>
            
            </div>
                        
            
            </div>
            `;
      console.log(doc.data().date);

    });
    querySnapshot.forEach(doc => {
      eventEditPost(doc, doc.id, getCurrentUser());
    });
  });


};
export const eventEditPost = (doc, docid, user) => {

  if (user) {
        console.log(user.uid, 'userID');
        console.log(doc.data().userId, 'docUSerId');
    if (user.uid === doc.data().userId) {
      const btnEdit = document.getElementById(doc.id);
      btnEdit.addEventListener('click', () => {
        editPost(doc.id);
        
        console.log(docid, 'docID');
      });

    } /*else {
      document.querySelector('#edit').style.display = "none";
    }*/
  }

};

export const editPost = (id) => {
  let contentRef = db.collection("post").doc(id);
  console.log(contentRef.id, 'funcion editpost')

  contentRef.get().then(doc => {

    const textAreaEditPost = document.getElementById('edit' + contentRef.id);
    textAreaEditPost.style.display = 'block';
    textAreaEditPost.innerHTML = doc.data().content;
    document.querySelectorAll('.contentPost').style.display = 'none';
    document.querySelectorAll('.iconEdit').style.display = 'none';
    document.querySelectorAll('.iconDelete').style.display = 'none';
    document.querySelectorAll('.iconSave').style.display = 'block';

    const btnSavePostEdited = document.querySelector('.iconSave');
    btnSavePostEdited.addEventListener('click', () => {
      let contentTextEdited = document.getElementById('edit' + contentRef.id).value;
      // Set the "capital" field of the city 'DC'
      return contentRef.update({
          content: contentTextEdited
        })
        .then(() => {
          console.log("Document successfully updated!");
          textAreaEditPost.style.display = 'none';
          document.querySelectorAll('.contentPost').style.display = 'block';
          document.querySelectorAll('.iconEdit').style.display = 'block';
          document.querySelectorAll('.iconDelete').style.display = 'block';
          document.querySelectorAll('.iconSave').style.display = 'none';
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });



    });
  });

};



/*export const showPost = (viewPost) => {
  db.collection("post").onSnapshot((querySnapshot) => {
    let post = [];
    querySnapshot.forEach((doc) => {
      post.push(doc.data().content);
    });
      //console.log(`${doc.id} => ${doc.data().content}`);
      console.log('contenido: ', post.join(','));
      viewPost(post);
    });
    
    //console.log(post);
  };*/