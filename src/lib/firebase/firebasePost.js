import { db } from '../firebase/firebaseAuth.js';

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
            </div>
            <div class = 'contentIconsPost'>
            <div class ='contentLike'>
            <button class = 'iconLike'><i class="icon-like fas fa-spa"></i></button>
            <h6 class='date'>${doc.data().date}</h6>
            </div>
            <div class ='editAndDelete'>
            <button class = 'iconEdit'><i class="icon-edit fas fa-pen"></i></button>
            <button class = 'iconDelete'><i class="icon-delete fas fa-trash-alt"></i></button>
            </div>
            
            </div>
                        
            
            </div>
            `;
        console.log(doc.data().date);

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