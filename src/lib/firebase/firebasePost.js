import { db, getCurrentUser } from '../firebase/firebaseAuth.js';

//CREANDO COLECCIÓN DOCUMENTOS EN LOS POST
const datePost = new Date();
const actualUser = getCurrentUser();
  
export const createPost = (contentText) => {
    
    db.collection('post').add({
       //name: userName,
        //uid: actualUser.uid,
        //authorName: actualUser.name,
        //photo: actualUser.photoURL,
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