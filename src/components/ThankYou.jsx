import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto',
    padding: 20,
  },
  body: {
    maxWidth: 350,
    margin: 'auto',
    padding: 20,
  },
}));

const ThankYou = () => {

  const classes = useStyles();

  const history = useHistory();
  const handleClick = () => {
    history.push('/')
  };

  return(
    <div className={classes.wrapper}>
      <Typography variant='h3' color='primary'>
        Thank you for your purchase!
      </Typography>
      <Typography className={classes.body}>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. 
        Dictum at tempor commodo ullamcorper a lacus 
        vestibulum sed.
      </Typography>
      <Button  
        variant="contained" 
        color="primary" 
        size='large'
        onClick={handleClick}
      >
        RETURN
      </Button>
    </div>
  )
}

export default ThankYou;