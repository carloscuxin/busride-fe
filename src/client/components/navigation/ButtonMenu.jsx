import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
//Own components

const ButtonMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const labels = {
    tooltip: props.data.tooltip,
    titleButton: props.data.title,
  }
  const menus = props.data.menus;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <Tooltip title={labels.tooltip}>
        <IconButton color="inherit" aria-haspopup="true" onClick={handleClick}>
          {labels.titleButton}
        </IconButton>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menus.map((menu, index) => {
          return <MenuItem 
            key={index}
            onClick={() => {props.action(menu.action); handleClose(); }}>
              {menu.label}
          </MenuItem>
        })}
      </Menu>
    </div>
  );
};

export default ButtonMenu;