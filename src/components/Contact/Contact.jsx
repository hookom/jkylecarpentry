import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { openLink } from '../../lib/utils';
import CopyToClipboard from '../Common/CopyToClipboard';

const facebookUrl = 'https://www.facebook.com/jkylecarpentry';
const instagramUrl = 'https://www.instagram.com/jkyle_carpentry';
const linkedInUrl = 'https://www.linkedin.com/in/jesse-kyle/';
const email = 'jkylecarpentry@gmail.com';

const useStyles = makeStyles(() => ({
  content: {
    height: '50%',
  },
  link: {
    cursor: 'pointer',
  },
  email: {
    marginLeft: 10,
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justify='space-evenly'
      className={classes.content}
    >
      <FacebookIcon
        fontSize='large'
        className={classes.link}
        onClick={() => openLink(facebookUrl)}
        style={{ color: '#3b5998' }}
      />
      <InstagramIcon
        fontSize='large'
        className={classes.link}
        onClick={() => openLink(instagramUrl)}
        style={{ color: '#e4405f' }}
      />
      <LinkedInIcon
        fontSize='large'
        className={classes.link}
        onClick={() => openLink(linkedInUrl)}
        style={{ color: '#0077B5' }}
      />
      <Grid item container direction='row' justify='center'>
        <AlternateEmailIcon />
        <div className={classes.email}>{email}</div>
        <CopyToClipboard target={email} />
      </Grid>
    </Grid>
  );
}

export default Contact;
