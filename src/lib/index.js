// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  //console.log('Hola mundo!');
};


export const signInUser= (email, password)=> {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    console.log(errorCode);
    console.log(errorMessage);
  });
  
};
