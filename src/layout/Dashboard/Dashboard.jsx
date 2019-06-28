import React from 'react';
import clsx from 'clsx';
// Material components
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
// Own Components
import styles from './styles';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';


const Dashboard = (props) => {
  const classes = styles();
  const [isOpenDrawer, setStatusDrawer] = React.useState(true);

  function handleDrawerOpen() {
    setStatusDrawer(true);
  }

  function handleDrawerClose() {
    setStatusDrawer(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar 
        handleDrawerOpen={() => handleDrawerOpen} 
        handleDrawerClose={() => handleDrawerClose} 
        isOpenDrawer={isOpenDrawer}
        title={props.title} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpenDrawer}
        classes={{
          paper: classes.drawerPaper,
        }} >
        <SideBar />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isOpenDrawer,
        })} >
        <div className={classes.drawerHeader} />
        {props.children}
        <Footer />
      </main>
    </div>
  );
}

export default Dashboard;