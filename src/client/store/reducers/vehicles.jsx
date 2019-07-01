import * as actionTypes from '../actions/actionTypes';

/**
 * Inicia la obtención de la lista de los vehículos
 * [30/06/2019] / acuxin
**/
const fetchVehiclesStart = state => {
  return {...state}
};

/**
* Se ejecuta cuando falla la obtención de los vehículos 
* [30/06/2019] / acuxin
**/
const fetchVehiclesFail = state => {
  return {...state}
};

/**
* Se ejecuta cuando es exitosa la petición
* [30/06/2019] / acuxin
**/
const fetchVehiclesSuccess = state => {
  return {...state};
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VEHICLES_START: return fetchVehiclesStart(state);
    case actionTypes.FETCH_VEHICLES_FAIL: return fetchVehiclesFail(state);
    case actionTypes.FETCH_VEHICLES_SUCCESS: return fetchVehiclesSuccess(state)
    default: return state;
  }
};

export default reducer;