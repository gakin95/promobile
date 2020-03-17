import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Naira from 'react-naira'

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
            padding:'2%'
          },
          '& p': {
            color: theme.palette.primary.main,
            //padding:12
          },
    },
    divider: {
        backgroundColor:theme.palette.primary.main,
        width:150,
        height:5
    },
    divider2: {
        backgroundColor:theme.palette.primary.border,
        marginTop : 12
    },
    formControl: {
        width:'100%',
        minWidth: 120,
      },
    margin: theme.spacing(1),
    textField: {
        width: 400,
      },
      Circular : {
        margin: '0px 50%',
      },
      flex : {
          display: 'flex',
          alignItem:'center',
          justifyContent:'space-between'
      },
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
}));

const banks = [
    { title: 'Access Bank' },
    { title: 'UBA'},
    { title: 'First Bank'},
    { title: 'GTB' },
    { title: 'Oceanic Bank'},
    { title: 'Wema Bank'},
    { title: 'Keystone Bank'},
    
  ];
  

const ApplyLoan = (props) => {
    const classes = useStyles();
    const defaultProps = {
        options: banks,
        getOptionLabel: option => option.title,
      };
    const [state, setState] = React.useState({
        duration : 1,
        total:''
    })
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handlePrevious = () => {
        props.history.push('/invcalculator')
    }
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        setOpen(true);
        setTimeout(() => {
            props.history.push('/quicklinks')
        }, 2000);
        }, 1000);
    };
    
    const handleChange = (e) => {
        
    }
  return (
    <AppContainer>
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
            <Paper>
            <Typography variant='h6'>APPLY INVESTMENT APPLICATION FORM </Typography>
            </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p>Loan Details</p>
                        <Divider className={classes.divider}/>
                        <Divider className={classes.divider2}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div>
                    <TextField
                        label=" Amount"
                        id="standard-start-adornment"
                        value={state.total}
                        onChange={handleChange}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">N</InputAdornment>,
                        }}
                    />
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div>
                    <TextField
                        label="Investment Tenor"
                        id="standard-start-adornment-tenor"
                        value={state.duration}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start"><RemoveCircleIcon /></InputAdornment>,
                        endAdornment:<InputAdornment position="end"><AddCircleOutlineIcon /></InputAdornment>
                        }}
                    />
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div>
                    <TextField
                        label="Account Number"
                        id="standard-start-adornment-account"
                        value={state.total}
                        disabled
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">N</InputAdornment>,
                        }}
                    />
                    </div>
                    </Grid>
                    <Grid item xs={12} >
                        <FormControl className={classes.formControl}>
                            <Autocomplete
                            {...defaultProps}
                            id="debug"
                            debug
                            renderInput={params => <TextField {...params} 
                            className={clsx(classes.margin, classes.textField)} 
                            label="Select a bank" margin="normal"  />}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                    id="filled-multiline-static"
                    label="Investment Purpose *"
                    multiline
                    rows="4"
                    //defaultValue="Default Value"
                    variant="filled"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    {/* <Backdrop className={classes.backdrop} open={open} >
                    {loading && <CircularProgress disableShrink />}
                    </Backdrop> */}
                    <div className={classes.Circular}>
                        {loading && <CircularProgress disableShrink />}
                    </div>
                    <Snackbar open={open} autoHideDuration={6000} onClick>
                        <MuiAlert  severity="success">
                        Your Application is Sucessful, We will get back to you shortly!
                        </MuiAlert>
                    </Snackbar>
                    </Grid>
                    <Grid item xs={12}  className={classes.flex}>
                    <CustomButton name='Previous' Click={handlePrevious}/>
                    <CustomButton name='Submit' Click={handleClick}/>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
        </Grid>
    </AppContainer>
  )
}

export default ApplyLoan
