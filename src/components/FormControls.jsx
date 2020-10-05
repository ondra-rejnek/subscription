import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Joi from 'joi';

const newCustomerSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'cz', 'sk', 'org', 'io', 'eu'] } }).required()
});

const useStyles = makeStyles(() => ({
  wrapper: {
    textAlign: 'center',
  },
  button: {
    margin: 5,
  },
}));

const FormControls = ({ setStep, step, formData, setFormError, wrongMail, setWrongMail }) => {
  const[error, setError] = useState(false);

  const { type, length, firstName, lastName, email } = formData;

  const classes = useStyles();

  const errorMessage = () => {
    switch (step) {
      case 1: return 'Please select subscription type.'
      case 2: return 'Please select subscription length.'
      case 3: {
        if(wrongMail) {
          return 'Please enter valid email.'
        }
        else {
          return 'Please complete the form.'
        }
      }
      default: return null
    }
  }

  const validateEmail = () => {
    const newCustomer = {
        email: email
    };
    const { error } = newCustomerSchema.validate(newCustomer);
    // console.log('Validation results: ', error, ', with this payload: ', value,)
    if (error && (error.toString().includes('"email" must be a valid email') || error.toString().includes('"email" is not allowed'))) {
      return false
    }
    // control log console.log(outc, ' ', email, ' ', name);
    if (!error) {
      setWrongMail(false);
      return true
    };
  };

  const backButtonBody = () => {
    if(step === 1) {
      return 'CANCEL'
    }
    else {
      return 'BACK'
    }
  }

  const nextButtonBody = () => {
    if(step === 4) {
      return 'SUMBIT'
    }
    else {
      return 'NEXT'
    }
  }

  const canProcced = () => {
    switch(step) {
      case 1: {
        if(!type) return false
        else return true
      }
      case 2: {
        if(!length) return false
        else return true
      }
      case 3: {
        if(!firstName || !lastName || !email) {
          setFormError(true)
          setWrongMail(false)
          return false
        }
        else if(!validateEmail()) {
          setFormError(true)
          setWrongMail(true)
          return false
        }
        else return true
      }
      default: return true
    }
  }

  const history = useHistory();
  const handleClick = (e) => {
    if(e.currentTarget.value === 'back') {
      if(step === 1) {
        history.push('/')
      }
      else {
        setStep(step - 1);
      }
    }
    else if(e.currentTarget.value === 'next' && canProcced()) {
      if(step === 4) {
        history.push('/thanks')
      }
      else {
        setStep(step + 1);
        setFormError(false);
        setWrongMail(false);
      }
    }
    else {
      setError(true);
    }
  }

  useEffect( () => {
    setError(false)
  }, [step])

  return(
    <div className={classes.wrapper}>
      <Typography color='error' hidden={!error}>{errorMessage()}</Typography>
      <div>
        <Button
          className={classes.button}
          onClick={handleClick}
          value='back'
        >
          {backButtonBody()}
        </Button>
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          onClick={handleClick}
          value='next'
        >
          {nextButtonBody()}
        </Button>
      </div>
    </div>
  )
}

export default FormControls;