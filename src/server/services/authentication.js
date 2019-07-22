import axios from 'axios';
import * as routes from '../routes';
const apisUrl = routes.login;

/**
 * Función para logear al usuario y permitir el acceso a la aplicación
 * [22/07/2019] /acuxin
 * @param user 
 * @param password 
**/
const login = async data => {
	const url = apisUrl.login.api;
	try {
		const res = await axios.post(url, data);
    return res.data;
	}
	catch(error) { return error.response; }
};

/**
 * Función para deslogear al usuario y salir de la aplicación
 * [22/07/2019] /acuxin
**/
const logout = () => {
	localStorage.removeItem('user');
};

export const authentication = {
	login,
	logout
};