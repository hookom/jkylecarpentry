import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import carpentryBackdrop from '../assets/carpentryBackdrop.jpg';

const useStyles = makeStyles(() => ({
  mainImage: {
    height: '450px',
    backgroundImage: `url('${carpentryBackdrop}')`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.mainImage} />
    </React.Fragment>
  );
}

export default Home;
