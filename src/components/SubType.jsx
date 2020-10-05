import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SubTypeTile from './SubTypeTile';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center',
    gap: '12px',
    maxWidth: 250,
    [theme.breakpoints.up('md')]: {
      maxWidth: 800,   
  },
  },
}));

const SubType = ({ setStep, setFormData, formData }) => {
  const[isSelected, setIsSelected] = useState(formData.type);

  const classes = useStyles();

  const handleClick = (e) => {
    const{ value } = e.currentTarget
    setFormData({
      ...formData,
      'type': value
    });
    setStep(2);
    setIsSelected(value);
  }

  const selected = (id) => {
    if(id === isSelected) {
      return true
    }
    else {
      return false
    }
  }

  return (
    <div className={classes.wrapper}>
      <Typography color='primary' variant='h4'>Select subscription type:</Typography>
      <div className={classes.container}>
        <SubTypeTile 
          name={'Personal'}
          handleClick={handleClick}
          selected={selected('Personal')}
        />
        <SubTypeTile 
          name={'Pro'}
          handleClick={handleClick}
          selected={selected('Pro')}
        />
        <SubTypeTile 
          name={'Enterprise'}
          handleClick={handleClick}
          selected={selected('Enterprise')}
        />
      </div>
    </div>
  )
}

export default SubType;