//registrarse con correo y contraseña

export const validateloginUser = (email, password, userName) => {
  const regEx = /\S+@\S+\.\S+/;
  let errorMessage = [];
  if (userName === null || userName === '') {
    errorMessage.push('Favor ingrese su nombre');
  } else if (email === '' & password === '') {
    errorMessage.push('Ingrese un email y un password');
  } else if (email !== '') {
    if (regEx.test(email)) {
      if (password === '') {
        errorMessage.push('Ingrese su contraseña');
      } else if (password.length <= 6) {
        errorMessage.push('Contraseña debe ser mayor a 6 caracteres');
      }
    } else {
      errorMessage.push('Ingrese un email correcto');
    }
  }

  return errorMessage;
};


/*export const validateloginUser = (email, password) => {
  const regEx = /\S+@\S+\.\S+/;
  if (password !== '' & email !== '') {
    if (regEx.test(email)) {
      if (password.length >= 6) {
        return {
          condition: true,
          message: 'correcta'
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