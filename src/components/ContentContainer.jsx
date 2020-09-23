import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Home';

const useStyles = makeStyles(() => ({
  content: {
    height: 'calc(100vh - 90px)',
    backgroundColor: 'rgb(200,200,200)',
  },
}));

const SentinelContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/services'>
          <div>services</div>
        </Route>

        <Route exact path='/gallery'>
          <div>gallery</div>
        </Route>

        <Route exact path='/contact'>
          <div>contact</div>
        </Route>
      </Switch>
    </div>
  );
};

export default SentinelContainer;
