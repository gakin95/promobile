import React,  { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Redirect } from 'react-router-dom';

import img from '../../../src/promobile.jpg'
import image from '../../../src/signup.jpg';
import{ connect }from 'react-redux';
import * as actions from '../../store/actions/index'


function Copyright() {
  return (
    <Typography variant="body2" style={{color:'white'}} align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Promobile
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${image })`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  error: {
    backgroundColor:theme.palette.error.main,
    color:'#fff',
    paddingTop:10,
    paddingBottom:10,
    textAlign:'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  Circular : {
    margin: '0px 50%'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function SignInSide(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    username : 'gakin',
    password : '123456',
    err:'',
    msg:'',
    isLoading:false,
  })
  
  const handleChange =  name => (e) => { 
     setState({
       ...state,
       [name]: e.target.value
     });
  };
  const handleSubmit = async (e) => {
    const { username, password } = state;
    e.preventDefault();
    try {
      setState({
        ...state,
       err: "",
       msg: "",
     });
  
     if (username === "" || username.length < 5) {
       setState({
         ...state,
         err: "username",
         msg: "Username must be more than 5 Characters"
       });
       return 
     }
  
     if (password === "" || password.length < 6) {
       setState({
         ...state,
         err: "password",
         msg: "Password must be more than 6 Characters",
       });
       return 
     }
      props.onAuth(username,password);
    }
    catch (er){
      console.log(er)
    }
  }
  const token = localStorage.getItem('token');
  return (
    <div>
      {token && <Redirect to='/quicklinks'/>}
      {props.error && <Grid container >
       <Grid item xs={12}>
      <Paper className={classes.error}>
        <Typography variant='h5'>{props.error}</Typography>
      </Paper>
      </Grid>
      </Grid>}
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Avatar className={classes.avatar} src={img}/>

          {/* <img src={img} style={{width:'50px',height:'50px'}}/> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={state.username}
              onChange={handleChange("username")}
              autoComplete="username"
              error={state.err === "username"}
              helperText={state.err === "username" && state.msg}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={state.password}
              onChange={handleChange("password")}
              autoComplete="password"
              error={state.err === "password"}
              helperText={state.err === "password" && state.msg}
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Typography component="h1" variant="h5" className={classes.Circular}>
            {props.loading && <CircularProgress disableShrink />}
          </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={state.isLoading}
                onClick={handleSubmit}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading : state.login.loading,
    error : state.login.error,
    isAuth : state.login.token != null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth : (username,password) => dispatch(actions.auth(username,password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInSide)