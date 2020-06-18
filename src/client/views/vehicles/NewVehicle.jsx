import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//Own components
import { FullScreenDialog } from '../../components';
import * as Input from '../../components/inputs';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}));


const NewVehicle = () => {
  const classes = styles();

  return (
    <FullScreenDialog>
      <form className={classes.container} noValidate autoComplete="off">
        <Input.TextField 
          label="Code"
          name="code"
          id="vehicle.code"
        />
      </form>
    </FullScreenDialog>
  );
}

export default NewVehicle;