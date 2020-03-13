import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import img from '../../../src/promobile.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';

import Aux from '../hoc/Aux'
import AccountNumber from './components/acountNumber';
import Username from './components/username';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        INSTIQ
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
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
  center: {
    textAlign:'center',
    color: theme.palette.primary.main
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  Circular : {
    margin: '0px 50%'
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

const steps = ['Account Number','Username'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AccountNumber />;
    case 1:
      return <Username />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState(false)

  const handleNext = () => {
    if (activeStep===steps.length-2){
      console.log('account is verified');
    }
    setActiveStep(activeStep + 1);
    // setTimeout(() => {
    //   setActiveStep(activeStep + 1);
    // }, 3000);
    if (activeStep===(steps.length) - 1){
      setTimeout(() => {
        setLoading(true);
      }, 4000);
      setTimeout(() => {
        props.history.push('/login')
      }, 5000);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
 

  return (
    <Aux >
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Promobile
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout} >
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Sign Up
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
                <div className={classes.center}> 
                <Typography variant="h5" gutterBottom> 
                  Welcome to 
                </Typography>
                <Typography variant="h5" gutterBottom>
                <span><img src={img} style={{width:'50px',height:'50px'}}/> </span>
                mobile
                </Typography>
                <Typography variant="subtitle1">
                  Your account has been created sucessfully
                </Typography>
                <Typography component="h1" variant="h5" className={classes.Circular}>
                 {loading && <CircularProgress disableShrink />}
                 </Typography>
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
        <Copyright />
      </main>
    </Aux>
  );
}