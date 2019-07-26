import React from 'react';
import { FormattedMessage } from "react-intl";

export const Messages = {
  general: {
    validations: {
      required: <FormattedMessage id="validation.required" defaultMessage="El campo es requerido" />,
      onlyNumbers: <FormattedMessage id="validation.onlyNumbers" defaultMessage="El campo solo puede contener números" />,
      notNull: <FormattedMessage id="validation.notNull" defaultMessage="El campo no puede ser nulo" />,
      length: <FormattedMessage id="validation.length" defaultMessage="El campo debe tener una longitud entre {minLength} y {maxLength}" values={{}} />,
      email: <FormattedMessage id="validation.email" defaultMessage="El correo no es válido" />,
    },
    errors: {
      internalServer: <FormattedMessage id="error.general.internalServer" defaultMessage="No se pudo conectar al servidor. Por favor, intente de nuevo más tarde." />,
    }
  },
  login: {
    errors: {
      badRequest: <FormattedMessage id="error.login.badRequest" defaultMessage="Usuario o contraseña incorrectos" />,
    },
  },
};