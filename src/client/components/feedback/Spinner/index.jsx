import React, { Fragment } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
//Own components
import './styles.css';


const Spinner = () => {
  const theme = useTheme();
  const widthSM = useMediaQuery(theme.breakpoints.down('sm'));
  const sizeCube = (!widthSM) ? '120px' : '80px';

  const cube = {
    width: sizeCube,
    height: sizeCube
  };

  return (
    <Fragment>
      <div className={clsx("sk-folding-cube")} style={cube}>
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </Fragment>
  )
};

export default Spinner;