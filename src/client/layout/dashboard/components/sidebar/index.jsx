import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
// Material components
import { Avatar, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@material-ui/core';
// Own components
import { Labels } from '../../../../helpers/messages';
import { useAuth } from '../../../../../server/services/authentication';
import styles from './styles';

const SideBar = () => {
  const { user } = useAuth();
  const classes = styles();
  const menuList = [
    { label: Labels.sidebar.titlesMenu.dashboard, url: '/', icon: 'dashboard' },
    { label: Labels.sidebar.titlesMenu.vehicles, url: '/vehicles', icon: 'directions_bus' },
    { label: Labels.sidebar.titlesMenu.companies, url: '/companies', icon: 'business' },
  ];

  const isLinkActive = (linkUrl) => {
    const url = window.location.pathname;
    return (url === linkUrl) ? true : false;
  };

  return (
    <nav>
      {/* Logo de la aplicación */}
      <div className={classes.logoBusride}>
        <Link className={classes.logoLink} to="/">
          <img
            alt="Busride logo"
            className={classes.logoImage}
            src="/images/logos/busride_logo.png"
          />
        </Link>
      </div>
      <Divider className={classes.logoDivider} />

      {/* Perfil de usuario */}
      <div className={classes.profile}>
        <Link to="/account">
          <Avatar
            alt="Roman Kutepov"
            className={classes.avatar}
            src="/images/profiles/no_profile.png" />
        </Link>
        <Typography className={classes.nameText} variant="h6">
          {user.username}
        </Typography>
        <Typography className={classes.bioText} variant="caption">
          Job
        </Typography>
      </div>
      <Divider className={classes.profileDivider} />

      {/* Lista de menu */}
      <List component="div" disablePadding>
        {menuList.map((menu, index) => (
          <ListItem
            key={index}
            className={clsx(
              isLinkActive(menu.url) ? classes.activeListItem : null,
              classes.listItem
            )}
            component={menu.url && Link}
            to={menu.url} >
            <ListItemIcon className={classes.listItemIcon}>
              <i className={'material-icons'}>{menu.icon}</i>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} primary={menu.label} />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.listDivider} />
      
      {/* Lista de soporte */}
      <List
        component="div"
        disablePadding
        subheader={
          <ListSubheader className={classes.listSubheader}>
            {Labels.sidebar.titleSections.support}
          </ListSubheader>
        } >
        <ListItem
          className={classes.listItem}
          component="a"
          href="https://devias.io/contact-us"
          target="_blank" >
          <ListItemIcon className={classes.listItemIcon}><i className={'material-icons'}>info</i></ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary={Labels.sidebar.titlesMenu.customerSupport} />
        </ListItem>
      </List>
    </nav>
  )
};

export default SideBar;