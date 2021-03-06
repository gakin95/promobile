import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CircularProgress from '@material-ui/core/CircularProgress';
//import Naira from 'react-naira'

import AppContainer from '../../../component/Dashboard';
import CustomButton from '../../../component/button'


const useStyles = makeStyles(theme => ({
    root : {
        width:'95%',
        margin:'2% auto',
        '& h6': {
            color: theme.palette.primary.main,
            padding:'0px 12px'
          },
          '& div': {
            color: theme.palette.primary.main,
            padding:12
          },
          '& p': {
            color: theme.palette.primary.main,
            padding:12
          },
    },
    margin: theme.spacing(1),
    textField: {
        width: 400,
        [theme.breakpoints.down('xs')]: {
            width: 200,
          },
      },
      Circular : {
        margin: '0px 50%',
      },
}))

const LoanCalculator = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        duration : 1,
        principal : '',
        interest:0,
    })
    const [loading, setLoading] = React.useState(false);
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
        props.history.push('/applyloan')
        }, 1000);
    }
    const addition = () => {
        if ( state.duration >=6) return
         console.log(state);
        setState(prevState => ({
            ...prevState,
            duration : prevState.duration + 1,
            interest : Calculator(prevState.principal,prevState.duration)
        }));
    };
    const substraction = () => {
        if (state.duration <= 1 ) return
        setState(prevState => ({
            ...prevState,
            duration : prevState.duration - 1,
            interest : Calculator(prevState.principal,prevState.duration)
        }));
    };
    const handleChange = (e) => {
        const userInput = +(e.target.value);
        if (isNaN(userInput)) return 
        setState((prevState )=> ({
            ...prevState,
            principal:userInput,
            interest : Calculator(prevState.principal,prevState.duration)
        }))
        console.log('------handleChange starts----------');
        console.log(state.principal);
        console.log('------handleChange ends----------');
    }
   function Calculator(principal, duration){
    const firstMonthRate = 13.5;
        const secondMonthRate  = 16.7;
        const thirdMonthRate  = 19.96;
        const fourthMonthRate = 23.28;
        const fifthMonthRate  = 26.66;
        const sixthMonthRate  = 30;
        let interest = 0;
       switch (duration) {
           case 1: interest = (principal * (1 + (firstMonthRate / 100))) / duration;  
               return interest
           case 2: interest = ((principal * ((secondMonthRate /100)+ 1))/duration);  
               return interest
           case 3: interest = ((principal * ((thirdMonthRate /100)+ 1))/duration);  
               return interest
           case 4: interest = ((principal * ((fourthMonthRate /100)+ 1))/duration);  
               return interest
           case 5: interest = ((principal * ((fifthMonthRate /100)+ 1))/duration);  
               return interest
           case 6: interest = ((principal * ((sixthMonthRate /100)+ 1))/duration);  
               return interest
           return interest
       }
   }
   //Calculator(100000,3);
  return (
    <AppContainer>
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
            <Paper>
            <Typography variant='h6'>LOAN CALCULATOR </Typography>
            </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <div>
                    <TextField
                        label="Loan Amount (min:N100,000 , max:N3,000,000)"
                        id="standard-start-adornment"
                        value={state.principal}
                        onChange={handleChange}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">N</InputAdornment>,
                        }}
                    />
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div>
                    <TextField
                        label="Repayment Duration"
                        id="standard-start-adornment"
                        value={state.duration}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start"><RemoveCircleIcon onClick={substraction}/></InputAdornment>,
                        endAdornment:<InputAdornment position="end"><AddCircleOutlineIcon onClick={addition}/></InputAdornment>
                        }}
                    />
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div>
                    <TextField
                        label="Monthly Repayment"
                        id="standard-start-adornment"
                        value={Calculator(state.principal,state.duration)}
                        onChange={handleChange}
                        disabled
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">N</InputAdornment>,
                        }}
                    />
                    </div>
                    <Typography component='p'>Please note that the interest rate is fixed per month on the principal amount.</Typography>
                    <div className={classes.Circular}>
                        {loading && <CircularProgress disableShrink />}
                    </div>
                    <CustomButton color='primary' name='Proceed To Application' Click={handleClick}/>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
        </Grid>
    </AppContainer>
  )
}

export default LoanCalculator
