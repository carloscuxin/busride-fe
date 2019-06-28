import React from 'react';
import { Link } from 'react-router-dom';
// Material components
import { Avatar, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@material-ui/core';
// Own components
import styles from './styles';


const SideBar = () => {
  const classes = styles();

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
          User name
        </Typography>
        <Typography className={classes.bioText} variant="caption">
          Job
        </Typography>
      </div>
      <Divider className={classes.profileDivider} />

      <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><i className={'material-icons'}>info</i></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      <Divider className={classes.listDivider} />
      <List
        component="div"
        disablePadding
        subheader={
          <ListSubheader className={classes.listSubheader}>
            Support
          </ListSubheader>
        } >
        <ListItem
          className={classes.listItem}
          component="a"
          href="https://devias.io/contact-us"
          target="_blank" >
          <ListItemIcon className={classes.listItemIcon}>
            <i className={'material-icons'}>info</i>
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Customer support" />
        </ListItem>
      </List>
      {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
    </nav>
  )
};

export default SideBar;