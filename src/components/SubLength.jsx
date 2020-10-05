import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SubLengthTile from './SubLengthTile';

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
    [theme.breakpoints.up('sm')]: {
      maxWidth: 600,   
  },
  },
}));

const SubLength = ({ setStep, setFormData, formData }) => {
  const[isSelected, setIsSelected] = useState(formData.length);

  const{ type } = formData;

  const classes = useStyles();

  const handleClick = (e) => {
    const{ value } = e.currentTarget
    setFormData({
      ...formData,
      'length': value,
    });
    setStep(3);
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

  const calculatePrice = (id) => {
    let initialPrice = 0;
    if(type === 'Personal') {
      initialPrice = 60;
    }
    else if(type === 'Pro') {
      initialPrice = 100;
    }
    else {
      initialPrice = 200;
    }
    switch (id) {
      case 1: return initialPrice;
      case 2: return initialPrice*3;
      case 3: return initialPrice*6;
      case 4: return initialPrice*12;
      default: return null;
    }
  }
  
  return (
    <div className={classes.wrapper}>
      <Typography color='primary' variant='h4'>Select subscription length:</Typography>
      <div className={classes.container}>
        <SubLengthTile 
          handleClick={handleClick}
          name={'1 month'}
          price={calculatePrice(1)}
          selected={selected('1 month')}
          discount={0}
        />
        <SubLengthTile 
          handleClick={handleClick}
          name={'3 months'}
          price={calculatePrice(2)}
          selected={selected('3 months')}
          discount={0.05}
        />
        <SubLengthTile 
          handleClick={handleClick}
          name={'6 months'}
          price={calculatePrice(3)}
          selected={selected('6 months')}
          discount={0.1}
        />
        <SubLengthTile 
          handleClick={handleClick}
          name={'1 year'}
          price={calculatePrice(4)}
          selected={selected('1 year')}
          discount={0.15}
        />
      </div>
    </div>
  )
}

export default SubLength;