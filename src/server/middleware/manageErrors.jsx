import React from 'react';
import { Snackbar } from '@material-ui/core';
//Own components
import { Messages } from '../../client/helpers/messages';
import { MySnackBar } from '../../client/components/feedback';

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

export const dispatchError = error => {
  const err = error.response;
  const type = "error";

  if (err !== undefined) {
    return {
      message: Messages.login.errors[err.data.type],
      type
    }
  }else {
    return {
      message: Messages.general.errors.internalServer,
      type
    }
  }
};
