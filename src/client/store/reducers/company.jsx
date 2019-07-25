import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';
import { Labels } from '../../helpers/messages';

export const initialState = {
  companies: null,
  columns: null,
  error: null,
  titleView: Labels.general.titlesViews.companies
};

// ========================================================================================== //
// REDUCERS PARA OBTENER LAS COLUMNAS DE LA TABLA
// ========================================================================================== //

/**
 * Inicia la obtención de las columnas de la tabla
 * [05/07/2019] / acuxin
**/
const fetchColumnsStart = state => { return updateObject(state) };

/**
 * Se ejecuta cuando falla la obtención de las columnas 
 * [05/07/2019] / acuxin
**/
const fetchColumnsFail = (state, action) => { return updateObject(state, { error: action.error }) };

/**
 * Se ejecuta cuando es exitosa la petición
 * [05/07/2019] / acuxin
**/
const fetchColumnsSuccess = (state, action) => {
  return updateObject(state, { columns: action.columns });
};


// ========================================================================================== //
// REDUCERS PARA OBTENER LAS COMPAÑIAS
// ========================================================================================== //

/**
 * Inicia la obtención de la lista de las compañias
 * [05/07/2019] / acuxin
**/
const fetchCompaniesStart = state => { return updateObject(state) };

/**
 * Se ejecuta cuando falla la obtención de las compañias 
 * [05/07/2019] / acuxin
**/
const fetchCompaniesFail = (state, action) => { return updateObject(state, { error: action.error }) };

/**
 * Se ejecuta cuando es exitosa la petición
 * [05/07/2019] / acuxin
**/
const fetchCompaniesSuccess = (state, action) => { 
  return updateObject(state, { companies: action.companies }) 
};


// ========================================================================================== //
// REDUCER PARA INSERTAR UNA COMPAÑIA
// ========================================================================================== //

/**
 * Inicia la insercción de la compañia
 * [11/07/2019] / acuxin
**/
const setCompanyStart = state => { return updateObject(state) };

/**
 * Se ejecuta cuando falla la insercción de la compañia 
 * [11/07/2019] / acuxin
**/
const setCompanyFail = (state, action) => { return updateObject(state, { error: action.error }) };

/**
 * Se ejecuta cuando es exitosa la petición
 * [05/07/2019] / acuxin
**/
const setCompanySuccess = (state, action) => {
  const companiesProv = state.companies;
  companiesProv.push(action.company);
  return updateObject(state,  {companies: companiesProv}) 
};


// ========================================================================================== //
// REDUCER PRINCIPAL
// ========================================================================================== //

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMPANIES_START: return fetchCompaniesStart(state);
    case actionTypes.FETCH_COMPANIES_FAIL: return fetchCompaniesFail(state, action);
    case actionTypes.FETCH_COMPANIES_SUCCESS: return fetchCompaniesSuccess(state, action);
    case actionTypes.FETCH_COLUMNS_COMPANIES_START: return fetchColumnsStart(state);
    case actionTypes.FETCH_COLUMNS_COMPANIES_FAIL: return fetchColumnsFail(state, action);
    case actionTypes.FETCH_COLUMNS_COMPANIES_SUCCESS: return fetchColumnsSuccess(state, action);
    case actionTypes.SET_COMPANY_START: return setCompanyStart(state);
    case actionTypes.SET_COMPANY_FAIL: return setCompanyFail(state, action);
    case actionTypes.SET_COMPANY_SUCCESS: return setCompanySuccess(state, action);
    default: return state;
  }
};

export default reducer;