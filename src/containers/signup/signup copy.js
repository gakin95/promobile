import React, { useState, useEffect } from 'react';
import { makeStyles,Container } from '@material-ui/core';
import {Redirect} from 'react-router-dom';
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
import UserDetails from './components/username';
import Image from '../../../src/emailVerify.jpg'

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

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
  EmailPaper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
   // marginTop: 140,
   // height: 400
},

EmailCongrats: {
    marginTop: 50,
    marginBottom: 60
},
Emailimage: {
    width: 150,
    height: 150
},
Emailbutton: {
    color: 'white',
    borderRadius: 5
},

  Emailcenter: {
    textAlign:'center',
    color: theme.palette.primary.main
  },
  error: {
    backgroundColor:theme.palette.error.main,
    color:'#fff',
    paddingTop:10,
    paddingBottom:10,
    textAlign:'center'
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

const steps = ['Account Number','Personal Details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AccountNumber />;
    case 1:
      return <UserDetails />;
    default:
      throw new Error('Unknown step');
  }
}

 const SignUp = (props) => {
  const classes = useStyles();
  let [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
   
  },[activeStep]);
  const handleNext = () => {
    if (activeStep === steps.length - 1 ){
      props.signUpUser(props.firstName,props.lastName,props.middleName,props.phone,props.email,props.address,props.username,props.password,props.accounts)
    };
  setActiveStep(prevstep => prevstep + 1);
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
        { props.errorMsg && <Typography variant="h6" color="inherit" className={classes.error}> 
            {props.errorMsg}
        </Typography> } 
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
            {activeStep === steps.length  ? (
               <Container maxWidth='md'>
              <div>
              <Paper elevation='3' className={classes.EmailPaper}>
                  <div>
                      <img src={Image} className={classes.Emailimage}/>
                  </div>
                  <div>
                      <Typography variant='h4' >
                          Email Verification
                      </Typography>
                  </div>
                  <div>
                      <Typography variant='h6' className={classes.EmailCongrats}>
                          A verification link has been sent the email provided.
                      </Typography>
                  </div>
                  <div style={{ background: "#014086", marginBottom: '12px',}}>
                      <Button color="primary" className={classes.Emailbutton} >
                          Resend Link
                      </Button>
                  </div>
              </Paper>
              </div>
           </Container>
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

const mapStateToProps = state => {
  return {
    firstName: state.signup.gatherUser && state.signup.gatherUser.firstName,
    lastName: state.signup.gatherUser && state.signup.gatherUser.lastName,
    middleName: state.signup.gatherUser && state.signup.gatherUser.middleName,
    phone: state.signup.gatherUser && state.signup.gatherUser.phone,
    email: state.signup.gatherUser && state.signup.gatherUser.email,
    address: state.signup.gatherUser && state.signup.gatherUser.address,
    username: state.signup.gatherUser && state.signup.gatherUser.username,
    password: state.signup.gatherUser && state.signup.gatherUser.password,
    accounts: state.signup.account && state.signup.account.accountNum,
    error: state.signup.account && state.signup.account.msg || state.signup.gatherUser && state.signup.gatherUser.msg,
    errorMsg: state.signup.error 
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (firstName,lastName,middleName,phone,email,address,username,password,accounts) => dispatch(actionCreators.authSignUp(firstName,lastName,middleName,phone,email,address,username,password,accounts))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)