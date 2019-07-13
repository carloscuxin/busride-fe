import * as actionTypes from './actionTypes';
import axios from 'axios';

// ========================================================================================== //
// ACCIONES PARA OBTENER LAS COLUMNAS DE LA TABLA VEHICULOS
// ========================================================================================== //

/**
 * Acción que se ejcuta primero para obtener las columnas de la tabla
 * [04/07/2019] / acuxin 
**/
const fetchColumnsStart = () => ({ type: actionTypes.FETCH_COLUMNS_VEHICLES_START });

/**
 * Acción que se ejecuta cuando falla la obtención de las columnas 
 * [04/07/2019] / acuxin 
**/
const fetchColumnsFail = error => ({
  type: actionTypes.FETCH_COLUMNS_VEHICLES_FAIL,
  error
});

/**
 * Acción que se ejecuta cuando es exitosa la petición
 * [04/07/2019] / acuxin 
**/
const fetchColumnsSuccess = columns => ({
  type: actionTypes.FETCH_COLUMNS_VEHICLES_SUCCESS,
  columns
});

/**
 * Acción que inicia la petición de las columnas de la tabla
 * [04/07/2019] / acuxin 
**/
export const fetchColumns = () => {
  const url = 'http://localhost:9000/vehicles/columnsTable';
  fetchColumnsStart();
  return axios.get(url).then(res => fetchColumnsSuccess(res.data)).catch(error => fetchColumnsFail(error.response));
};


// ========================================================================================== //
// ACCIONES PARA OBTENER LOS VEHICULOS
// ========================================================================================== //

/**
 * Acción que se ejcuta primero para obtener la lista de los vehiculos
 * [30/06/2019] / acuxin 
**/
const fetchVehiclesStart = () => ({ type: actionTypes.FETCH_VEHICLES_START });

/**
 * Acción que se ejecuta cuando falla la obtención de los vehiculos 
 * [30/06/2019] / acuxin 
**/
const fetchVehiclesFail = error => ({
  type: actionTypes.FETCH_VEHICLES_FAIL,
  error
});

/**
 * Acción que se ejecuta cuando es exitosa la petición
 * [30/06/2019] / acuxin 
**/
const fetchVehiclesSuccess = vehicles => ({
  type: actionTypes.FETCH_VEHICLES_SUCCESS,
  vehicles
});

/**
 * Acción que inicia la petición de los vehiculos
 * [04/07/2019] / acuxin 
**/
export const fetchVehicles = () => {
  const url = 'http://localhost:9000/vehicles';
  fetchVehiclesStart();
  return axios.get(url).then(res => fetchVehiclesSuccess(res.data)).catch(error => fetchVehiclesFail(error.response));
};

// ========================================================================================== //
// ACCIONES PARA EDITAR VEHICULOS
// ========================================================================================== //

// ========================================================================================== //
// ACCIONES PARA ACTUALIZAR VEHICULOS
// ========================================================================================== //

// ========================================================================================== //
// ACCIONES PARA ELIMINAR VEHICULOS
// ========================================================================================== //