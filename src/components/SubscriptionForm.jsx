import React, {useState} from 'react';
import SubType from './SubType';
import SubLength from './SubLength';
import PersonalInfo from './PersonalInfo';
import Summary from './Summary';
import StepperBar from './StepperBar';
import FormControls from './FormControls';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
    maxWidth: 800,
    margin: '0 auto',
    paddingBottom: 30,
  },
}));

const SubscriptionForm = () => {
  const[step, setStep] = useState(1);
  const[formData, setFormData] = useState({
    type: '',
    length: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const[formError, setFormError] = useState(false);
  const[wrongMail, setWrongMail] = useState(false)
  
  const props = { setStep, setFormData, formData };

  const classes = useStyles();

  const renderSwitch = () => {
    switch (step) {
      case 1:
        return(
          <SubType {...props}/>
        )
      case 2:
        return(
          <SubLength {...props}/>
        ) 
      case 3:
        return(
          <PersonalInfo {...props} error={formError} wrongMail={wrongMail}/>
        )
      case 4:
        return(
          <Summary {...props}/>
        ) 
      default:
        return null;
    }
  }

  return(
    <div className={classes.wrapper}>
      <StepperBar step={step} />
      {renderSwitch()}
      <FormControls 
        step={step}
        setStep={setStep}
        formData={formData}
        setFormError={setFormError}
        formError={formError}
        wrongMail={wrongMail}
        setWrongMail={setWrongMail}
      />
    </div>
  )
}

export default SubscriptionForm;