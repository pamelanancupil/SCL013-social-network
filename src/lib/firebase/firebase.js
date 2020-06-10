export const db = firebase.firestore();

//REGISTRARSE CON CORREO Y CONTRASEÑA -> USUARIO NUEVO
export const registerUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      verificationEmail();
      
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
};

//observador auth de estado de autenticación para obtener datos del usuario, se llama cada vez que cambia el estado de acceso del usuario 
export const authState = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      if (emailVerified === true) {
        alert('Usuario inicio sesión correctamente');
        window.location.hash = '#/feed';
        //como hacemos para pasar a la pagina de publicaciones
      } else {
        alert('Por favor revisa tu correo y verifica tu cuenta');
      }
      // ...
    } else {
      alert('Usuario no esta registrado o no ha iniciado sesión');
      // User is signed out.
    }
  });
};

//ENVIAR CORREO DE VERIFICACIÓN PARA USUARIOS CON CORREO Y CONTRASEÑA
const verificationEmail = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification()
    .then(() => {
      alert('¡Éxito! verifica tu cuenta en la bandeja de entrada de tu correo');
      window.location.hash = '#/login'; // Email sent.
    })
    .catch((error) => {
      // An error happened.
    });
};

//FUNCIÓN DE INICIO DE SESIÓN PARA USUARIOS REGISTRADOS
export const loginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      alert('Ingresa correctamente tus datos ' + errorMessage);
      console.log(errorCode);
    });
};

//CREANDO COLECCIONES Y DOCUMENTOS DE DATA
/*export const addingData = (userName, email) => {
  db.collection('users').add({
      name: userName,
      email: email
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};*/

//FUNCIÓN INGRESAR CON GOOGLE
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location.hash = '#/feed';
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    
  });
};


//FUNCIÍN CERRAR SESIÓN
export const logoutGoogle = () => {
firebase.auth().signOut()
.then(function() {
  // Sign-out successful.
  window.location.hash = '#/home';
})
.catch(function() {
  // An error happened.
});
}