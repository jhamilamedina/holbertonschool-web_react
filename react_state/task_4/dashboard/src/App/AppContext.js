import React from 'react';

// Definir el objeto de usuario por defecto
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Definir la función logOut por defecto
const defaultLogOut = () => {
  console.log('User logged out');
};

// Crear el contexto de React
const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;
