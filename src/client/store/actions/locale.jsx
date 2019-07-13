import * as actionTypes from './actionTypes';

// ========================================================================================== //
// ACCIONES ASIGNAR EL LENGUAJE LOCAL
// ========================================================================================== //

/**
 * Acción que se ejecuta para asignar el leguaje
 * [09/07/2019] / acuxin 
**/
const setLanguageLocale = lang => ({
  type: actionTypes.SET_LANGUAGE_LOCALE,
  lang
});

/**
 * Acción que inicia la asignación del lenguaje
 * [09/07/2019] / acuxin 
**/
export const setLanguage = lang => {
  localStorage.language = lang;
  return setLanguageLocale(lang);
};