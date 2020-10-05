import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import LandingIcon from './LandingIcon';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto',
    padding: 20,
  },
  body: {
    maxWidth: 400,
    margin: 'auto',
    padding: 20,
  },
  icon: {
    width: 200,
    height: 200,
    padding: 20,
  }
}));

const LandingPage = () => {

  const classes = useStyles();

  const history = useHistory();
  const handleClick = () => {
    history.push('/form')
  };

  return (
    <div className={classes.wrapper}>
      <LandingIcon className={classes.icon}/>
      <Typography variant='h3' color='primary'>
        Welcome to Nice Software!
      </Typography>
      <Typography className={classes.body}>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. 
        Dictum at tempor commodo ullamcorper a lacus 
        vestibulum sed. Aliquam eleifend mi in nulla posuere 
        sollicitudin aliquam ultrices sagittis. Amet cursus 
        sit amet dictum sit amet. Tempus iaculis urna id 
        volutpat lacus laoreet non curabitur. Eget aliquet nibh 
        praesent tristique magna.
      </Typography>
      <Button  
        variant="contained" 
        color="primary" 
        size='large'
        onClick={handleClick}
      >
        SUBSCRIBE
      </Button>
    </div>
  )
}

export default LandingPage;