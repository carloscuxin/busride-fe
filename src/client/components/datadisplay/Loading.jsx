import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//Own components
import Spinner from '../feedback/Spinner';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  spinner: {
    padding: theme.spacing(0),
    textAlign: 'center',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  },
}));

const Loading = () => {
  const classes = useStyles();
  const [height, setHeight] = useState();

  useEffect(() => {
    const verifyHeight = () => {
      const header = document.getElementById("appBar");
      const footer = document.getElementById("footer");
      if(!header && !footer) {
        setHeight(window.innerHeight);
        return;
      }

      const finalHeight = window.innerHeight - (header.clientHeight + footer.clientHeight + 32);
      setHeight(finalHeight);
    };
    verifyHeight();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.spinner} style={{height: height}}>
          <Spinner />
        </Grid>
      </Grid>
    </div>
  );
};

export default Loading;