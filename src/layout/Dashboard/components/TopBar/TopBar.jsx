import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles';

const TopBar = (props) => {
  const classes = styles();

  return (
    <AppBar position="fixed" className={ clsx(classes.appBar, {[classes.appBarShift]: props.isOpenDrawer}) }>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open"
          onClick={props.handleDrawerOpen()}
          edge="start"
          className={clsx(classes.menuButton, props.isOpenDrawer && classes.hide)}>
            <MenuIcon />
        </IconButton>
        <IconButton 
          color="inherit"
          onClick={props.handleDrawerClose()} 
          className={clsx(classes.menuButton, !props.isOpenDrawer && classes.hide)}>
            <i className={'material-icons'}>clear</i>
        </IconButton>

        <Typography variant="h5" noWrap>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;