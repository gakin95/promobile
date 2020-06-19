import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import AddressForm from './ownAccount/TransferForm';
import Review from '././ownAccount/Review';

import AppContainer from '../../component/Dashboard';



const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['First step', 'Verify your details'];


const TransferToOtherBanks = (props) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [activeStep, setActiveStep] = React.useState(0);
  const [val, setVal] = useState(2);
 const [state, setState] = useState({
   amount: '',
   description: '',
   sourceAccount:'',
   destinationAccount:'',
 })
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClick = () => {
    props.history.push('/quicklinks')
  }
 const handleChange = input => e => {
   setState({...state, [input] : e.target.value});
   console.log(state)
 }
 const { amount, description, sourceAccount, destinationAccount } = state;
 const values = { amount, description , sourceAccount, destinationAccount };
 const transfer = [
  { name: 'From Account', accountNum:sourceAccount, price: 'N19,000' },
  { name: 'To Account', accountNum:destinationAccount, price: amount },
  { name: 'Amount',  accountNum:'', price: 'N6,000' },
  { name: 'Narration', accountNum:'', price: description  },
];
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
        <AddressForm 
          handleChange={handleChange}
          values={values}
        />
        );
      case 1:
        return (
        <Review
          handleChange={handleChange}
          values={values}
          transfer={transfer}
        />)
        ;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <AppContainer >
      <CssBaseline />
          <Typography variant="h6" color="inherit" noWrap>
            Transfer funds between Accounts
          </Typography>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
          Transfer funds between Accounts
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                   Transfer Sucessful!!!
                </Typography>
                <div>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Please give us a rating</Typography>
                    <Rating
                      name="simple-controlled"
                      value={val}
                      onChange={(event, newValue) => {
                        setVal(newValue);
                      }}
                    />
                  </Box>
                  <Button 
                  onClick={handleClick}
                  color="primary" 
                  className={classes.button}
                  variant="contained">
                    Ok
                  </Button>
              </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </AppContainer>
  )
}

export default TransferToOtherBanks
