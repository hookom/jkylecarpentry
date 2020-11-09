import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Home';
import Contact from './Contact';

const useStyles = makeStyles(() => ({
  content: {
    height: 'calc(100vh - 90px)',
    fontFamily: 'PlayfairRegular',
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
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default SentinelContainer;
