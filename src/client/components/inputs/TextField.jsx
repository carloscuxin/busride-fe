import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = makeStyles({
  root: {
    '& label.Mui-focused': { color: '#4D92C8', },
    '& .MuiInput-underline:after': { borderBottomColor: '#4D92C8', },
    '& .MuiInput-underline:hover': { borderBottomColor: 'blue', }, 
  },
});

const InputTextField = (props) => {
  const classes = styles();

  return (
    <TextField
      className={classes.root}
      onChange={(props.onChange !== undefined) ? (e) => props.onChange(e) : null }
      type={props.type}
      label={props.label}
      name={props.name}
      variant={props.variant}
      margin={props.margin}
      id={props.id}
      fullWidth={props.fullWidth}
      autoFocus={props.autoFocus}
    />
  );
}

export default InputTextField;