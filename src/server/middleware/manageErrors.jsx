import React from 'react';
import { Snackbar } from '@material-ui/core';
//Own components
import { Messages } from '../../client/helpers/messages';
import { MySnackBar } from '../../client/components';

export const dispatchMessage = (message, type, closeSnackBar) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={true}
    >
      <MySnackBar
        onClose={closeSnackBar}
        variant={type}
        message={message}
      />
    </Snackbar>
  );
};

export const dispatchError = (error, componente) => {
  const err = error.response;
  const type = "error";
  var component = "general";

  if (err !== undefined) {
    if ([500, 501].indexOf(err.status) === -1)
      component = componente;
    return {
      message: Messages.errors[component][err.data.type],
      type
    }
  }else {
    return {
      message: Messages.errors.general.internalServer,
      type
    }
  }
};
