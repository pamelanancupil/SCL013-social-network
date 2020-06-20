export const db = firebase.firestore();

//REGISTRARSE CON CORREO Y CONTRASEÑA -> USUARIO NUEVO
export const registerUser = (email, password, userName, onSuccess, onError) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      verificationEmail();
      onSuccess(result);
    })
    .then(() => {
      let user = getCurrentUser();
      return db.collection('users').doc(user.uid).set({
        name: userName,
        email: email,
        userId: user.uid,
        description: ''
      })
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      //console.log(errorMessage);
      //console.log(errorCode);
      onError(error);
    });
};

//FUNCIÓN DE ACTUALIZAR PERFIL
export const updateUserProfile = (userName, descriptionUser, photoURL, onSuccess, onError) => {
  const actualUser = getCurrentUser();
  actualUser.updateProfile({
    displayName: userName,
    description: descriptionUser,
    photoURL: photoURL
  }).then((result) => {
    onSuccess(result)
  }).catch((error) => {
    onError(error);
  });
};

//observador auth de estado de autenticación para obtener datos del usuario, se llama cada vez que cambia el estado de acceso del usuario 
export const authState = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //console.log(user, 'usuario');
      // User is signed in.
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      if (emailVerified === true) {
        //alert('Usuario inicio sesión correctamente');
        window.location.hash = '#/feed';
      } else {
        //alert('Por favor revisa tu correo y verifica tu cuenta para iniciar sesión');
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
      alert('Por favor revisa tu correo y verifica tu cuenta para iniciar sesión');
      //window.location.hash = '#/login'; // Email sent.
    })
    .catch((error) => {
      // An error happened.
    });
};

//FUNCIÓN DE INICIO DE SESIÓN PARA USUARIOS REGISTRADOS CON CORREO Y CONTRASEÑA
export const loginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Ingresa correctamente tus datos');
      //alert('Ingresa correctamente tus datos ' + errorMessage);
      //console.log(errorCode);
    });
};

//FUNCIÓN DE INICIO DE SESIÓN PARA USUARIOS REGISTRADOS CON GOOGLE
export const logInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      let userName = user.displayName;
      db.collection('users').doc(user.uid).get().then((doc) => {
        if(doc.exists) {
          //alert('Iniciaste sesión');
          window.location.hash = '#/feed';
        } else {
          db.collection('users').doc(user.uid).set({
            displayName: userName,
            email: user.email,
            photoURL: user.photoURL,
            userId: user.uid,
          })
          window.location.hash = '#/feed';
        }
      })
      console.log(token);
      console.log(user);
     // ...
    })
    .catch(function (error) {
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
      //console.log('cerrando sesión')
    })
    .catch((error) => {
      // An error happened.
      //console.log(error);
    });
};

//CREANDO COLECCIONES Y DOCUMENTOS DE DATA
export const addingUserData = (userName, email) => {
  const actualUser = getCurrentUser();
  db.collection('users').add({
      name: userName,
      email: email,
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