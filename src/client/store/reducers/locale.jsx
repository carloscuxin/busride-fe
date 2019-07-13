import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
  language: 'es',
};

// ========================================================================================== //
// REDUCERS ASIGNAR EL LENGUAJE
// ========================================================================================== //

/**
 * Asigna el leguaje local
 * [09/07/2019] / acuxin
**/
const setLanguageLocale = (state, action) => {
  return updateObject(state, { language: action.lang });
};

// ========================================================================================== //
// REDUCER PRINCIPAL
// ========================================================================================== //

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE_LOCALE: return setLanguageLocale(state, action);
    default: return state;
  }
};

export default reducer;