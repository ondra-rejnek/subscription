import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  item: {
    display: 'flex',
  },
  container: {
    padding: 10,
    margin: '15px auto',
    maxWidth: 450,
  },
}));

const Summary = ({ setStep, formData }) => {
  const{ type, length, firstName, lastName, email } = formData;

  const classes = useStyles();

  const handleEdit = (e) => {
    const{ name } = e.currentTarget;
    if(name === 'type') {
      setStep(1);
    }
    else if(name === 'length') {
      setStep(2);
    }
    else {
      setStep(3);
    }
  }

  return (
    <div className={classes.wrapper}>
      <Typography color='primary' variant='h4'>Summary:</Typography>
        <Paper elevation={6} className={classes.container}>
          <div className={classes.row}>
            <Typography variant='h6'>Subscription type:</Typography>
            <div className={classes.item}>
              <Typography variant='h6'>{type}</Typography>
              <IconButton name='type' size='small' onClick={handleEdit}>
                <EditIcon color='primary'/>
              </IconButton>
            </div>
          </div>
          <div className={classes.row}>
            <Typography variant='h6'>Subscription length:</Typography>
            <div className={classes.item}>
              <Typography variant='h6'>{length}</Typography>
              <IconButton name='length' size='small' onClick={handleEdit}>
                <EditIcon color='primary'/>
              </IconButton>
            </div>
          </div>
          <div className={classes.row}>
            <Typography style={{fontWeight: '500'}} variant='h6'>First name:</Typography>
            <div className={classes.item}>
              <Typography variant='h6'>{firstName}</Typography>
              <IconButton size='small' onClick={handleEdit}>
                <EditIcon color='primary'/>
              </IconButton>
            </div>
          </div>
          <div className={classes.row}>
            <Typography variant='h6'>Last name:</Typography>
            <div className={classes.item}>
              <Typography variant='h6'>{lastName}</Typography>
              <IconButton size='small' onClick={handleEdit}>
                <EditIcon color='primary'/>
              </IconButton>
            </div>
          </div>
          <div className={classes.row}>
            <Typography variant='h6'>Email:</Typography>
            <div className={classes.item}>
              <Typography variant='h6'>{email}</Typography>
              <IconButton size='small' onClick={handleEdit}>
                <EditIcon color='primary'/>
              </IconButton>
            </div>
          </div>
        </Paper>
    </div>
  )
}

export default Summary;