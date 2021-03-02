import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import carpentryBackdrop from '../../assets/carpentryBackdrop.jpg';
import { homeText } from '../../lib/constants';

const useStyles = makeStyles(() => ({
  mainImage: {
    height: 450,
    backgroundImage: `url('${carpentryBackdrop}')`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    opacity: 0.3,
  },
  infoContainer: {
    position: 'relative',
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -250,
    minHeight: 300,
  },
  text: {
    padding: '30px 30px',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
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
