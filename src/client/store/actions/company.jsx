import axios from 'axios';
//Own components
import * as routes from '../../../server/routes';
import * as actionTypes from './actionTypes';

const apisUrl = routes.companies;


// ========================================================================================== //
// ACCIONES PARA OBTENER LAS COLUMNAS DE LA TABLA COMPAÑIAS
// ========================================================================================== //

/**
 * Acción que se ejecuta primero para obtener las columnas de la tabla
 * [05/07/2019] / acuxin 
**/
const fetchColumnsStart = () => ({ type: actionTypes.FETCH_COLUMNS_COMPANIES_START });

/**
 * Acción que se ejecuta cuando falla la obtención de las columnas 
 * [05/07/2019] / acuxin 
**/
const fetchColumnsFail = error => ({
  type: actionTypes.FETCH_COLUMNS_COMPANIES_FAIL,
  error
});

/**
 * Acción que se ejecuta cuando es exitosa la petición
 * [05/07/2019] / acuxin 
**/
const fetchColumnsSuccess = columns => ({
  type: actionTypes.FETCH_COLUMNS_COMPANIES_SUCCESS,
  columns
});

/**
 * Acción que inicia la petición de las columnas de la tabla
 * [05/07/2019] / acuxin 
**/
export const fetchColumns = async () => {
  const url = apisUrl.getColumns.api;
  fetchColumnsStart();
  try {
    const res = await axios.get(url);
    return fetchColumnsSuccess(res.data);
  }
  catch(error) { return fetchColumnsFail(error.response); }
};


// ========================================================================================== //
// ACCIONES PARA OBTENER LAS COMPAÑIAS
// ========================================================================================== //

/**
 * Acción que se ejecuta primero para obtener la lista de las compañias
 * [05/07/2019] / acuxin 
**/
const fetchCompaniesStart = () => ({ type: actionTypes.FETCH_COMPANIES_START });

/**
 * Acción que se ejecuta cuando falla la obtención de las compañias 
 * [05/07/2019] / acuxin 
**/
const fetchCompaniesFail = error => ({
  type: actionTypes.FETCH_COMPANIES_FAIL,
  error
});

/**
 * Acción que se ejecuta cuando es exitosa la petición
 * [05/07/2019] / acuxin 
**/
const fetchCompaniesSuccess = companies => ({
  type: actionTypes.FETCH_COMPANIES_SUCCESS,
  companies
});

/**
 * Acción que inicia la petición de las compañias
 * [05/07/2019] / acuxin 
**/
export const fetchCompanies = async () => {
  const url = apisUrl.getAll.api;
  fetchCompaniesStart();
  try {
    const res = await axios.get(url);
    return fetchCompaniesSuccess(res.data);
  }
  catch(error) { return fetchCompaniesFail(error.response); }
};


// ========================================================================================== //
// ACCIONES PARA INSERTAR UNA COMPAÑIA
// ========================================================================================== //

/**
 * Acción que se ejecuta primero para insertar una compañia
 * [11/07/2019] / acuxin 
**/
const setCompanyStart = () => ({ type: actionTypes.SET_COMPANY_START });

/**
 * Acción que se ejecuta cuando falla la insercción de una compañia
 * [11/07/2019] / acuxin 
**/
const setCompanyFail = error => ({
  type: actionTypes.SET_COMPANY_FAIL,
  error
});

/**
 * Acción que se ejecuta cuando es exitosa la petición
 * [11/07/2019] / acuxin 
**/
const setCompanySuccess = company => ({
  type: actionTypes.SET_COMPANY_SUCCESS,
  company
});

/**
 * Acción que inicia la insercción de la compañia
 * [11/07/2019] / acuxin 
**/
export const insertCompany = async data => {
  const url = apisUrl.insert.api
  setCompanyStart();
  try {
    const res = await axios.post(url, data);
    return setCompanySuccess(res.data);
  }
  catch(error) { return setCompanyFail(error.response); }
};


// ========================================================================================== //
// ACCIONES PARA ACTUALIZAR VEHICULOS
// ========================================================================================== //

// ========================================================================================== //
// ACCIONES PARA ELIMINAR VEHICULOS
// ========================================================================================== //