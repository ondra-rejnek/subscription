import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
  wrapper: {
    textAlign: 'center',
    width: 200,
    padding: 15,
  },
  button: {
    marginTop: 15,
  },
}));

const SubTypeTile = ({name, handleClick, selected}) => {

  const classes = useStyles();

  return(
    <Paper elevation={6} className={classes.wrapper}>
      <Typography 
        variant='h5' color='primary'>{name}</Typography>
      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei</Typography>
      <Button 
        className={classes.button} 
        variant="contained" 
        color={selected ? 'secondary' : 'primary'}
        value={name} 
        onClick={handleClick}
      >
        {selected ? 'SELECTED' : 'SELECT'}
      </Button>
    </Paper>
  )
}

export default SubTypeTile;