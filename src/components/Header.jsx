import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography,
  Grid, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../assets/logo.png';

const useStyles = makeStyles(() => ({
  siteLogo: {
    width: '4em',
    cursor: 'pointer',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  headerItem: {
    marginTop: 'auto',
    marginBottom: 'auto',
  }
}));

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const [appMenuEl, setAppMenuEl] = useState(null);

  const linkClicked = (newRoute) => {
    setAppMenuEl(null);
    history.push(newRoute);
  };

  return (
    <AppBar position='sticky' color='primary'>
      <Toolbar>
        <Grid container direction='row' justify='space-between' alignItems='baseline'>
          <img
            src={logo}
            alt='logo'
            onClick={() => linkClicked('/')}
            className={`${classes.siteLogo} ${classes.headerItem}`} />
          <Typography variant='h4' className={classes.headerItem}>
            JKyle Carpentry
          </Typography>
          <IconButton
            onClick={event => setAppMenuEl(event.currentTarget)}
            color='inherit'
            aria-label='menu'
            className={classes.headerItem}>
            <MenuIcon />
          </IconButton>
        </Grid>
        <Menu id='appMenu'
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
          anchorEl={appMenuEl}
          keepMounted
          open={Boolean(appMenuEl)}
          onClose={() => setAppMenuEl(null)}
        >
          <MenuItem onClick={() => linkClicked('/')} >Home</MenuItem>
          <MenuItem onClick={() => linkClicked('/info')} >Info</MenuItem>
          <MenuItem onClick={() => linkClicked('/contact')} >Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;