export const db = firebase.firestore();
export const auth = firebase.auth();

//registrarse con correo y contraseña
export const registerUser = (email, password)=> {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.log(errorCode);
    console.log(errorMessage);
  });
};

