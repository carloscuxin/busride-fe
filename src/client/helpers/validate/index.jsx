import React from 'react';
import { FormattedMessage } from "react-intl";
import * as typesValidate from './typesValidate';
import * as models from '../../../server/models';
import { Messages } from '../messages';

const messagesErrors = {
  required: Messages.general.validations.required,
  onlyNumbers: Messages.general.validations.onlyNumbers,
  notNull: Messages.general.validations.notNull,
  email: Messages.general.validations.email
}

/**
 * Valida la información de un formulario
 * @param model
 * @param data
**/
const validateForm = (model, data) => {
  const dataModel = models[model];
  const error = [];
  // eslint-disable-next-line
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  
  for (const key in dataModel) {
    //Parametros generales
    const required = dataModel[key].required;
    const type = dataModel[key].type;
    const notNull = dataModel[key].notNull;
    const minLength = dataModel[key].minLength;
    const maxLength = dataModel[key].maxLength;
    const value = data[key];

    //Validamos si el campo es requerido en el modelo
    if(required) {
      //Validamos que campo existe en el objeto
      const dataExist = validateExist(data, key);
      if (typeof dataExist === 'object') { error.push(dataExist); continue; }

      //Validamos cuando es tipo número
      if (type === 'number') {
        const isNumber = validateNumber(value, key);
        if (typeof isNumber === 'object') { error.push(isNumber); continue; }
      }

      //Validamos cuando es tipo Email
      if (type === 'email') {
        const emailVaild = validateEmail(expression, value, key);
        if (typeof emailVaild === 'object') { error.push(emailVaild); continue; }
      }

      //Validamos si el campo es nulo cuando no es permitido ser nulo
      if (notNull) {
        const isNull = validateNullable(value, key);
        if (typeof isNull === 'object') { error.push(isNull); continue; }
      }

      //Validamos la longitud permitida
      const lengthData = validateLength(minLength, maxLength, value, key);
      if(typeof lengthData === 'object') { error.push(lengthData); continue; }
    }else {
      //Validamos que campo existe en el objeto
      const dataExist = validateExist(data, key);
      if (typeof dataExist === 'object') continue;

      //Validamos cuando es tipo número
      if (type === 'number') {
        const isNumber = validateNumber(value, key);
        if (typeof isNumber === 'object') { error.push(isNumber); continue; }
      }
    };
  };

  return error;
};

/**
 * Funcion que valida que el dato exista
**/
const validateExist = (data, key) => {
  if (!data.hasOwnProperty(key))
    return {input: key, visibility: true, args: 'required', message: messagesErrors.required };
  return;
};

/**
 * Funcion que valida si es número
**/
const validateNumber = (data, key) => {
  if (isNaN(data))
    return {input: key, visibility: true, args: 'number', message: messagesErrors.onlyNumbers };
  return;
};

/**
 * Funcion que valida si es nulo
**/
const validateNullable = (data, key) => {
  if (data.length === 0)
    return {input: key, visibility: true, args: 'notNull', message: messagesErrors.notNull };
  return;
};

/**
 * Funcion que valida la longitud
**/
const validateLength = (minLength, maxLength, data, key) => {
   const messageLength = <FormattedMessage id="validation.length" defaultMessage="El campo debe tener una longitud entre {minLength} y {maxLength}" values={{ minLength, maxLength }} />
  if (data.length < minLength || data.length > maxLength) 
    return {input: key, visibility: true, args: 'length', message: messageLength };
  return;
};

/**
 * Funcion que valida tipo Email
**/
const validateEmail = (expression, email, key) => {
  if (!expression.test(String(email).toLowerCase()))
  return {input: key, visibility: true, args: 'emailInvalid', message: messagesErrors.email };
  return;
};

const Validate = (validate, data) => {
  switch (validate.type) {
    case typesValidate.VALIDATE_FORM: return validateForm(validate.model, data);
    default: return true;
  };
};

export default Validate;