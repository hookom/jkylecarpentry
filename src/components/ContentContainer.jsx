import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  content: {
    backgroundColor: '#808080',
    height: '100vh',
  },
}));

const SentinelContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Route exact path='/'>
        <div>home</div>
      </Route>

      <Route exact path='/info'>
        <div>info</div>
      </Route>

      <Route exact path='/contact'>
        <div>contact</div>
      </Route>
    </div>
  );
};

export default SentinelContainer;
