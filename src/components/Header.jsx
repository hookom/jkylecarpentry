import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Grid, Button, Typography,
  IconButton, Menu } from '@material-ui/core';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logo from '../assets/logo.png';

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: 'rgb(230,230,230)',
    minHeight: '90px',
    paddingTop: 'auto',
    paddingBottom: 'auto',
  },
  siteLogo: {
    width: '4em',
    cursor: 'pointer',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  tab: {
    color: '#000',
    '&:hover': {
      borderBottom: '1px solid #000'
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  const isSmol = useMediaQuery('(max-width:600px)');
  const [menuEl, setMenuEl] = useState(null);

  return (
    <AppBar position='sticky'>
      <Toolbar className={classes.toolbar}>
        <Grid container direction='row' justify='space-evenly' alignItems='center'>
          <Grid item xs={4}>
            <RouterLink to='/'>
              <img
                src={logo}
                alt='logo'
                className={classes.siteLogo}
              />
            </RouterLink>
          </Grid>
          { isSmol ?
            <Grid item xs={1}>
              <IconButton onClick={event => setMenuEl(event.currentTarget)}>
                <MenuOpenIcon fontSize='large' />
              </IconButton>
              <Menu
                anchorEl={menuEl}
                keepMounted
                open={Boolean(menuEl)}
                onClose={() => setMenuEl(null)}
              >
                  <PageLinks direction='column' closeMenu={() => setMenuEl(null)} />
              </Menu>
            </Grid> : <PageLinks direction='row' /> }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const PageLinks = ({direction, closeMenu}) => {
  const classes = useStyles();
  return (
    <Grid container item xs={5} direction={direction} justify='space-evenly'>
      <Button color='primary' component={RouterLink} to='/' onClick={closeMenu}>
        <Typography variant='h6' className={classes.tab}>Home</Typography>
      </Button>
      <Button color='primary' component={RouterLink} to='/services' onClick={closeMenu}>
        <Typography variant='h6' className={classes.tab}>Services</Typography>
      </Button>
      <Button color='primary' component={RouterLink} to='/gallery' onClick={closeMenu}>
        <Typography variant='h6' className={classes.tab}>Gallery</Typography>
      </Button>
      <Button color='primary' component={RouterLink} to='/contact' onClick={closeMenu}>
        <Typography variant='h6' className={classes.tab}>Contact</Typography>
      </Button>
    </Grid>
  );
};


export default Header;