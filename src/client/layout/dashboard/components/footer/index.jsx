import React from 'react';
// Material components
import { Divider, Typography } from '@material-ui/core';
// Own components
import styles from './styles';

const Footer = () => {
  const classes = styles();
  return (
    <div className={classes.root} id="footer">
      <Divider />
      <Typography
        className={classes.company}
        variant="body1"
      >
        &copy; Cuxca 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
    </div>
  );
};

export default Footer;