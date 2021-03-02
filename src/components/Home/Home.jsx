import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import carpentryBackdrop from '../../assets/carpentryBackdrop.jpg';
import { homeText } from '../../lib/constants';

const useStyles = makeStyles(() => ({
  mainImage: {
    position: 'absolute',
    zIndex: -1,
    top: 140,
    left: '10%',
    height: 450,
    width: '80%',
    opacity: 0,
    transition: 'opacity 0.5s',
  },
  bgVisible: {
    opacity: 0.3,
  },
  infoContainer: {
    position: 'relative',
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 250,
    minHeight: 300,
  },
  text: {
    padding: '30px 30px',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);

  return (
    <React.Fragment>
      <img
        src={carpentryBackdrop}
        alt='bg'
        className={`${classes.mainImage} ${loaded ? classes.bgVisible : null}`}
        onLoad={() => setLoaded(true)}
      />
      <div className={classes.mainImage} />
      <Paper elevation={3} className={classes.infoContainer}>
        <Typography variant='h3'>Professional Custom Carpentry</Typography>
        <Typography variant='body1' className={classes.text}>
          {homeText}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default Home;
