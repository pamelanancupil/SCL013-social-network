export const db = firebase.firestore();

//registrarse con correo y contraseña
export const registerUser = (email, password)=> {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then (() => {
    verificationEmail();
    alert ('¡Éxito! verifica tu cuenta en tu bandeja de entrada')
    console.log('email verificación')
  })

  .catch ((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert ('Error')
    
    console.log(errorCode);
    console.log(errorMessage);
  });
};

//observador auth
export const authState = () => {
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('usuario registrado')
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
        console.log('usuario no registrado')
      // User is signed out.
      // ...
    }
  });
};

//enviar correo de verificación
const verificationEmail = () => {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification()
    .then(function() {
    // Email sent.
    })
    .catch(function(error) {
    // An error happened.
    });
    console.log('email verificacion')

};