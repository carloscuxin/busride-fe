import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
//Own components
import { Messages } from '../../client/helpers/messages';
import { dispatchMessage, dispatchError } from '../middleware/manageErrors';
import * as routes from '../routes';
const apisUrl = routes.login;

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({children, intl}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  

  useEffect(() => {
    const initAuth = async () => {
      const url = apisUrl.isAuthenticated.api;
      const user = localStorage.user;

      const res = await axios.get(url, {headers: {user}});
      const isAuthenticated = res.data;
      setIsAuthenticated(isAuthenticated);
      
      if (isAuthenticated) {
        setUser(JSON.parse(user));
      }

    }

    initAuth();
  }, []);
  
  /**
   * Función para logear al usuario y permitir el acceso a la aplicación
   * [22/07/2019] /acuxin
   * @param data
  **/
  const login = async (data, closeSnackBar) => {
    const url = apisUrl.login.api;

    try {
      const res = await axios.post(url, data);
      if (res.status === 200) {
        const user = res.request.responseText;
        localStorage.user = user
        setUser(user);
        setIsAuthenticated(true);
      }
    }
    catch(error) {
      console.log(error.response);
      const err = dispatchError(error);
      return dispatchMessage(err.message, err.type, closeSnackBar);
    }
  };

  /**
   * Función para deslogear al usuario y salir de la aplicación
   * [22/07/2019] /acuxin
  **/
  const logout = () => {
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        initLogin: (...P) => login(...P),
        logout: (...P) => logout(...P),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}