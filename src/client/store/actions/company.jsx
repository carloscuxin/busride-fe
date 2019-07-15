import * as actionTypes from './actionTypes';
import axios from 'axios';

// ========================================================================================== //
// ACCIONES PARA OBTENER LAS COLUMNAS DE LA TABLA COMPAÑIAS
// ========================================================================================== //

/**
 * Acción que se ejcuta primero para obtener las columnas de la tabla
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
export const fetchColumns = () => {
  const url = 'https://busride.labodegadelfotografo.com/companies/columnsTable';
  fetchColumnsStart();
  return axios.get(url).then(res => fetchColumnsSuccess(res.data)).catch(error => fetchColumnsFail(error.response));
};


// ========================================================================================== //
// ACCIONES PARA OBTENER LAS COMPAÑIAS
// ========================================================================================== //

/**
 * Acción que se ejcuta primero para obtener la lista de las compañias
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
export const fetchCompanies = () => {
  const url = 'https://busride.labodegadelfotografo.com/companies';
  fetchCompaniesStart();
  return axios.get(url).then(res => fetchCompaniesSuccess(res.data)).catch(error => fetchCompaniesFail(error.response));
};


// ========================================================================================== //
// ACCIONES PARA INSERTAR UNA COMPAÑIA
// ========================================================================================== //

/**
 * Acción que se ejcuta primero para insertar una compañia
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
export const insertCompany = data => {
  const url = 'https://busride.labodegadelfotografo.com/companies';
  setCompanyStart();
  return axios.post(url, data).then(res => setCompanySuccess(res.data)).catch(error => setCompanyFail(error.response));
};


// ========================================================================================== //
// ACCIONES PARA ACTUALIZAR VEHICULOS
// ========================================================================================== //

// ========================================================================================== //
// ACCIONES PARA ELIMINAR VEHICULOS
// ========================================================================================== //