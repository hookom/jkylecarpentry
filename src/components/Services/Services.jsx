import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  content: {
    width: '60%',
    marginLeft: '20%',
    marginTop: '20%',
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify='center'
      className={classes.content}
    >
      <div>
        Please <RouterLink to='/contact'>contact us</RouterLink> for more information on services we offer.
      </div>
    </Grid>
  );
}

export default Services;
