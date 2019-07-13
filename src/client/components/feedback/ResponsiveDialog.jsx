import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const ResponsiveDialog = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth={props.maxWidth}
      open={props.open}
      onClose={props.handleCloseDialog()}
      aria-labelledby="responsive-dialog"
    >
      <DialogTitle id="responsive-dialog">{props.title}</DialogTitle>
      <DialogContent style={{height: props.maxHeight}}>
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleCloseDialog()} color="primary">{props.cancelButton}</Button>
        <Button onClick={props.actionAgree()} color="primary">{props.agreeButton}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResponsiveDialog;
