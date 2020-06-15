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
      console.log(user, 'usuario');
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
      } else {
        alert('Por favor revisa tu correo y verifica tu cuenta para iniciar sesión');
      }
      // ...
    } else {
      //console.log('Usuario no esta registrado o no ha iniciado sesión');
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
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      alert('Ingresa correctamente tus datos ' + errorMessage);
      console.log(errorCode);
    });
};

//FUNCIÓN INGRESAR CON GOOGLE
export const logInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/feed';
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};


//FUNCIÓN CERRAR SESIÓN
export const logOut = () => {
  firebase.auth().signOut()
    .then(() => {
      // Sign-out successful.
      window.location.hash = '#/home';
      console.log('cerrando sesión')
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

//CREANDO COLECCIONES Y DOCUMENTOS DE DATA
export const addingUserData = (userName, email, displayName, photoURL, uidUser) => {
  const actualUser = getCurrentUser();
  db.collection('users').add({
      name: userName,
      email: email,
      displayName: actualUser.displayName,
      photoURL: actualUser.photoURL,
      uidUser: actualUser.uid
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

//FUNCIÓN PARA OBETER EL USUARIO ACTUAL
export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};