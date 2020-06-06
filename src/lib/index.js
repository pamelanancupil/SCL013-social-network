

//registrarse con correo y contraseña
/*export const validateloginUser = (email, password) => {
  const regEx = /\S+@\S+\.\S+/;
  if (password !== '' & email !== '') {
    if (regEx.test(email)) {
      if (password.length >= 6) {
        return {
          condition: true,
          message:  'correcta'
        };
      } else {
        return {
          condition: false,
          message: 'Contraseña debe ser mayor a 6 carácteres'
        };
      }
    } else {
      return {
        condition: false,
        message: 'Ingrese su email correcto'
      };
    }
  } else {
    return {
      condition: false,
      message: 'Ingrese un email y un password'
    };
  };
};*/

