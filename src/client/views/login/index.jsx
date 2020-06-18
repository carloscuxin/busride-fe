import React, { useState } from 'react';
//Own components
import { LoginForm } from '../../components';
import styles from './styles';
import { useAuth } from '../../../server/services/authentication';
import config from '../../../config';

const Login = () => {
  const classes = styles();
  const { initLogin, isAuthenticated, user, loading } = useAuth();
  const [typePassword, setTypePassword] = useState("password");
  const [message, setMessage] = useState();

  if (isAuthenticated && user) {
    if (window.history.back() === undefined){
      console.log('aqui');
      window.location.href = config.PATH_INDEX;
    }else window.history.back();
  }

  // ========================================================================================== //
  // FUNCIONES
  // ========================================================================================== //

  //Cierra el Snackbar
  const closeSnackBar = () => setMessage();

  /**
   * Función que muestra la contraseña
   * [24/07/2019] / acuxin
  **/
  const showPassword = () => {
    const inputPassword = document.getElementById("password");
    setTypePassword((inputPassword.type === "password") ? "text" : "password");
  };

  /**
   * Función para iniciar a loguearse
   * [24/07/2019] / acuxin
  **/
  const init = async e => {
    e.preventDefault();
    const request = {
      user: document.getElementById("user").value,
      password: document.getElementById("password").value,
    };

    const message = await initLogin(request, closeSnackBar);
    setMessage(message);
  };

  // ========================================================================================== //
  // RENDERIZACION DE LOS COMPONENTES
  // ========================================================================================== //

  console.log('load',loading);
    
  return (
    <LoginForm 
      classes={classes}
      init={init}
      typePassword={typePassword}
      showPassword={showPassword}
      message={message}
    />
  );
};

export default Login;