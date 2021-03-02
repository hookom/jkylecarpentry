import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const useStyles = makeStyles(() => ({
  container: {
    width: '70%',
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Gallery = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <InstagramFeed token={process.env.REACT_APP_IG_TOKEN} counter='20' />
    </div>
  );
}

export default Gallery;
