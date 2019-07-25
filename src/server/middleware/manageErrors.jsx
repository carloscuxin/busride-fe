import React from 'react';
import { Messages } from '../../client/helpers/messages';
import { Snackbar } from '@material-ui/core';
//Own components
import { MySnackBar } from '../../client/components/feedback';

export const DispatchMessage = ({isOpen}) => {
  const [open, setOpen] = React.useState();
  
  const openSnackBar = () => {
    isOpen = false;
    setOpen(true);
  };
  
  const closeSnackBar = () => {
    console.log('ENtra')
    setOpen(false);
  };
  
  
  
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      
    >
      <MySnackBar
        onClose={closeSnackBar}
        variant="success"
        message="This is an error message!"
      />
    </Snackbar>
  )
};
