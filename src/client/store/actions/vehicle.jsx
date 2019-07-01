import * as actionTypes from './actionTypes';

/**
 * Acción que arranca para obtener la lista de los vehiculos
 * [30/06/2019] / acuxin 
**/
export const fetchVehiclesStart = {
    type: actionTypes.FETCH_VEHICLES_START
};

/**
 * Acción que se ejecuta cuando falla la obtención de los vehiculos 
 * [30/06/2019] / acuxin 
**/
export const fetchVehiclesFail = {
  type: actionTypes.FETCH_VEHICLES_FAIL
};

/**
 * Acción que se ejecuta cuando es exitosa la petición
 * [30/06/2019] / acuxin 
**/
export const fetchVehiclesSuccess = {
  type: actionTypes.FETCH_VEHICLES_SUCCESS
};