export const db = firebase.firestore();

//registrarse con correo y contraseña un nuevo usuario
export const registerUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      verificationEmail();
      alert('¡Éxito! verifica tu cuenta en la bandeja de entrada de tu correo')
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

//observador auth de estado de autenticación para obtener datos del usuario, se llama cada vez que cambia el estado de acceso del usuario 
export const authState = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      if (emailVerified === true) {
        alert('Usuario inicio sesión correctamente');
        window.location.hash = '#/menu';
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

//enviar correo de verificación al crear nueva cuenta con correo y usuario
const verificationEmail = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification()
    .then(() => {
      // Email sent.
    })
    .catch((error) => {
      // An error happened.
    });
};

//función para inicio de sesión de usuarios ya registrados
export const loginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      alert('Ingresa correctamente tus datos' + errorMessage);
      console.log(errorCode);
    });
};

//creando colecciones y documentos de data
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