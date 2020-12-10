import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Grid, Button,
  Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <AppBar position='sticky'>
      <Toolbar className={classes.toolbar}>
        <Grid container direction='row' justify='space-evenly'>
          <Grid item xs={4}>
            <RouterLink to='/'>
              <img
                src={logo}
                alt='logo'
                className={classes.siteLogo}
              />
            </RouterLink>
          </Grid>
          <Grid container item xs={5} direction='row' justify='space-evenly'>
            <Button color='primary' component={RouterLink} to='/services'>
              <Typography variant='h6' className={classes.tab}>Services</Typography>
            </Button>
            <Button color='primary' component={RouterLink} to='/gallery'>
              <Typography variant='h6' className={classes.tab}>Gallery</Typography>
            </Button>
            <Button color='primary' component={RouterLink} to='/contact'>
              <Typography variant='h6' className={classes.tab}>Contact</Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;