import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
//Own components
import { dispatchMessage, dispatchError } from '../middleware/manageErrors';
import * as routes from '../routes';
const apisUrl = routes.login;

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const initAuth = async () => {
      const token = getToken();

      if (!token) {
        logout();
        onRedirectCallback(null, false);
      }
      
      const isAuthenticated = await validateToken(token);
      setIsAuthenticated(isAuthenticated);
      
      if (!isAuthenticated) {
        logout();
        onRedirectCallback(null, false);
      }else setUser(JSON.parse(localStorage.user));

      setLoading(false);
    }
    
    initAuth();
  }, [onRedirectCallback]);
  
  /**
   * Función para logear al usuario y permitir el acceso a la aplicación
   * [22/07/2019] / acuxin
   * @param data
  **/
  const login = async (data, closeSnackBar) => {
    const url = apisUrl.login.api;

    try {
      const res = await axios.post(url, data);
      if (res.status === 200) {
        const user = res.data;
        setUser(user.user);
        setUserLocale(user);
        setIsAuthenticated(true);
      }
    }
    catch(error) {
      const err = dispatchError(error, "login");
      return dispatchMessage(err.message, err.type, closeSnackBar);
    }
  };

  /**
   * Función para deslogear al usuario y salir de la aplicación
   * [22/07/2019] / acuxin
  **/
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser();
    setLoading(true)
    setIsAuthenticated(false);
  };

  /**
   * Función que verifica si el token aun es valido
   * [29/07/2019] / acuxin
  **/
  const validateToken = async token => {
    const url = apisUrl.isAuthenticated.api;
    try {
      const res = await axios.get(url, {headers: {Authorization: token}});
      return res.data;
    }catch (error) {return false;}
  };

  /**
   * Función que asigna al user en en localsorage
   * [27/07/2019] / acuxin
  **/
  const setUserLocale = user => {
    localStorage.user = JSON.stringify(user.user);
    localStorage.token = user.token;
  };

  //Devuelve el token actual
  const getToken = () => localStorage.token;
  //Devuelve usuario actual
  //const getUser = () => localStorage.user;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        onRedirectCallback: (...P) => onRedirectCallback(...P),
        initLogin: (...P) => login(...P),
        logout: (...P) => logout(...P),
        getToken: (...P) => getToken(...P),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}