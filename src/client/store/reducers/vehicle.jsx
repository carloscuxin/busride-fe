import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';
import Labels from '../../helpers/labels/Labels';

const initialState = {
  vehicles: null,
  columns: null,
  error: null,
  titleView: Labels.general.titlesViews.vehicles
};

// ========================================================================================== //
// REDUCERS PARA OBTENER LAS COLUMNAS DE LA TABLA
// ========================================================================================== //

/**
 * Inicia la obtención de las columnas de la tabla
 * [04/07/2019] / acuxin
**/
const fetchColumnsStart = state => { return updateObject(state) };

/**
* Se ejecuta cuando falla la obtención de las columnas 
* [04/07/2019] / acuxin
**/
const fetchColumnsFail = (state, action) => { return updateObject(state, { error: action.error }) };

/**
* Se ejecuta cuando es exitosa la petición
* [04/07/2019] / acuxin
**/
const fetchColumnsSuccess = (state, action) => {
  return updateObject(state, { columns: action.columns });
};


// ========================================================================================== //
// REDUCERS PARA OBTENER LOS VEHICULOS
// ========================================================================================== //

/**
 * Inicia la obtención de la lista de los vehículos
 * [04/07/2019] / acuxin
**/
const fetchVehiclesStart = state => { return updateObject(state) };

/**
* Se ejecuta cuando falla la obtención de los vehículos 
* [04/07/2019] / acuxin
**/
const fetchVehiclesFail = (state, action) => { return updateObject(state, { error: action.error }) };

/**
* Se ejecuta cuando es exitosa la petición
* [04/07/2019] / acuxin
**/
const fetchVehiclesSuccess = (state, action) => { 
  return updateObject(state, { vehicles: action.vehicles }) 
};


// ========================================================================================== //
// REDUCER PARA INSERTAR UN VEHICULO
// ========================================================================================== //


// ========================================================================================== //
// REDUCER PRINCIPAL
// ========================================================================================== //

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VEHICLES_START: return fetchVehiclesStart(state);
    case actionTypes.FETCH_VEHICLES_FAIL: return fetchVehiclesFail(state, action);
    case actionTypes.FETCH_VEHICLES_SUCCESS: return fetchVehiclesSuccess(state, action);
    case actionTypes.FETCH_COLUMNS_VEHICLES_START: return fetchColumnsStart(state);
    case actionTypes.FETCH_COLUMNS_VEHICLES_FAIL: return fetchColumnsFail(state, action);
    case actionTypes.FETCH_COLUMNS_VEHICLES_SUCCESS: return fetchColumnsSuccess(state, action);
    default: return state;
  }
};

export default reducer;