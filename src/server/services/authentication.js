import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { DispatchMessage } from '../middleware/manageErrors';
import * as routes from '../routes';
const apisUrl = routes.login;

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();

  /**
   * Función para logear al usuario y permitir el acceso a la aplicación
   * [22/07/2019] /acuxin
   * @param data
  **/
  const login = async (data) => {
    const url = apisUrl.login.api;
    
    try {
      const res = await axios.post(url, data);
      console.log(res.data);
    }
    catch(error) {
      const err = error.response;
      if([400].indexOf(err.status) !== -1){
        const a = <DispatchMessage isOpen={true} />
        return a;
      }
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
        login: (...P) => login(...P),
        logout: (...P) => logout(...P),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}