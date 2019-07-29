import React, { useContext } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
//Own components
import { Labels } from '../../../../helpers/messages';
import Context from '../../../../store/Context';
import styles from './styles';
import MenuButton from '../../../../components/navigation/ButtonMenu';
import * as actions from '../../../../store/actions';

const TopBar = (props) => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(Context);
  const classes = styles();
  const dataLanguageButton = {
    title: <i className="material-icons">language</i>,
    tooltip: Labels.topbar.menuLanguage.tooltip,
    menus: [
      {label: Labels.topbar.menuLanguage.labelSpanish, action: "es"},
      {label: Labels.topbar.menuLanguage.labelEnglish, action: "en"},
      {label: Labels.topbar.menuLanguage.labelGerman, action: "de"}
    ]
  }

  /**
   * Cambia de lenguaje la aplicación
   * [09/07/2019] / acuxin 
  **/
  const changeLanguage = lang => {
    dispatch(actions.setLanguage(lang));
  };

  return (
    <AppBar position="fixed" className={ clsx(classes.appBar, {[classes.appBarShift]: props.isOpenDrawer})} id="appBar">
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
        <MenuButton 
          className={clsx(classes.menuButton, classes.menuLanguage)}
          data={dataLanguageButton} 
          action={changeLanguage}/>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;