import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
  },
  container: {
    margin: 'auto',
    marginTop: 15,
    marginBottom: 15,
  },
  field: {
    margin: 10,
  },
}));

const PersonalInfo = ({ setFormData, formData, error, wrongMail }) => {
  const{ firstName, lastName, email } = formData;

  const classes = useStyles();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleError = (id) => {
    if(!id) {
      return true;
    }
    else {
      return false;
    }
  }

  const handleMailError = () => {
    if(error || wrongMail) {
      if(!email) {
        return true
      }
      else if(wrongMail) {
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  return (
    <div className={classes.wrapper}>
      <Typography color='primary' variant='h4'>Personal details:</Typography>
      <div className={classes.container}>
        <FormControl>
          <TextField
            className={classes.field}
            name='firstName'
            label='First Name'
            onChange={handleChange}
            variant="outlined"
            defaultValue={firstName}
            error={error ? handleError(firstName) : false}
            required
            fullWidth
          />
          <TextField
            className={classes.field}
            name='lastName'
            label='Last Name'
            onChange={handleChange}
            variant="outlined"
            defaultValue={lastName}
            error={error ? handleError(lastName) : false}
            required
            fullWidth
          />
          <TextField
            className={classes.field}
            name='email'
            label='Email'
            onChange={handleChange}
            variant="outlined"
            defaultValue={email}
            error={handleMailError()}
            required
            fullWidth
          />
        </FormControl>
      </div>
    </div>
  )
}

export default PersonalInfo;