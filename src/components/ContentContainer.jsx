import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';

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
          <Services />
        </Route>

        <Route exact path='/gallery'>
          <Gallery />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default SentinelContainer;
