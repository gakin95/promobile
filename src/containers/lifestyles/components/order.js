import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  Paper,
  TextField,
  FormControl
} from '@material-ui/core';

import image from '../../../../src/promobile.jpg';

import { config } from '../../../../src/axios';
import axios from 'axios'

import AppContainer from '../../../component/Dashboard';
import CustomButton from '../../../component/button';
import AlertDialogSlide from './modal'

const useStyles = makeStyles(theme => ({
  root : {
    width :  '90%',
    margin : 'auto',
    backgroundColor : '#F92A42'
  },
  Lifestyle : {
    padding : 20,
    textAlign: 'center',
    color:'#fff'
  },
  paper:{
    borderRadius:10,
    backgroundImage:`url(${image})`,
    backgroundRepeat: 'no-repeat',
    //backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  space:{
    padding:30,
    
  },
  category:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  flex:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  text:{
    color:"#F92A42"
  }
}))
const MovieTicket = (props) => {
  const [open, setOpen] = React.useState(false);
  const [add, setAdd] = React.useState({
    adults:0,
    students:0,
    children:0
  });
  const [state, setstate] = useState()
  useEffect(() => {
    try {
      const id = props.match.params.id;
      axios.get(config.moviesDetails + id)
     .then(res => {
       console.log(res.data)
       const data = res.data.data.movie;
       setstate(data);
     });
    }
    catch (ex){
      console.log(ex)
    }
  },[]);
  const increment =  (name) => {
    console.log('.....top...',add)
    setAdd(prev => ({
      ...prev,
      [name]: prev[name] + 1,
    }))
    console.log(add)
  };
  const decrement = (name) => {
    if (add[name]===0) return
    setAdd(prev => ({
      ...prev,
      [name]:prev[name] - 1,
    }))
    console.log(add)
  };
  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const { adults, students, children } = add;
  return (
    <AppContainer>
       <div className={classes.root}>
         <div className={classes.Lifestyle}>
            <Typography variant='h5'>Movie</Typography>
         </div>
        <Paper className={classes.paper}>
          <Grid container spacing={2} className={classes.space}>
             <Grid item xs={12}>
                <Typography variant='h6'>Cinema: <span className={classes.text}>Viva Cineas Ikeja</span></Typography>
                <Typography variant='h6'>Movie: <span className={classes.text}>{state && state.title}</span></Typography>
             </Grid>
             <Grid item xs={12}>
               <Typography variant='h6'>Add tickets</Typography>
             </Grid>
             <Grid item  xs={4} className={classes.category}>
               <Typography variant='h6'>Adult</Typography>
                <div className={classes.flex}>
                    <Button onClick={()=> decrement('adults') }>-</Button>
                    <Typography variant='h6'>{adults}</Typography>
                    <Button onClick={()=> increment('adults') }>+</Button>
                </div>
             </Grid>
             <Grid item xs={4} className={classes.category}>
               <Typography variant='h6'>student</Typography>
                <div className={classes.flex}>
                    <Button onClick={()=> decrement('students') }>-</Button>
                    <Typography variant='h6'>{students}</Typography>
                    <Button onClick={()=> increment('students') }>+</Button>
                </div>
             </Grid>
             <Grid item xs={4} className={classes.category}>
               <Typography variant='h6'>children</Typography>
                <div className={classes.flex}> 
                    <Button onClick={()=> increment('children') }>-</Button>
                    <Typography variant='h6'>{children}</Typography>
                    <Button onClick={()=> increment('children') }>+</Button>
                </div>
             </Grid>
          </Grid>
          <form noValidate onSubmit={handleClickOpen}>
            <Grid container spacing={2} className={classes.space}>
            <Grid item xs={12} sm={4}>
             <TextField
              margin="normal"
              required
              fullWidth
              id="From Account"
              label="From Account"
              name="username"
              //value={state.username}
              //onChange={handleChange("username")}
              autoComplete="From Account"
              //error={state.err === "username"}
              //helperText={state.err === "username" && state.msg}
              autoFocus
            />
             </Grid>
             <Grid item xs={12} sm={4}>
             <TextField
              margin="normal"
              required
              fullWidth
              id="Total Amount"
              label="Total Amount"
              name="Total Amount"
              //value={state.username}
              //onChange={handleChange("username")}
              autoComplete="Total Amount"
              //error={state.err === "username"}
              //helperText={state.err === "username" && state.msg}
              autoFocus
            />
             </Grid>
             <Grid item xs={12} sm={4}>
             <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email"
              name="Email"
              //value={state.username}
              //onChange={handleChange("username")}
              autoComplete="Email"
              //error={state.err === "username"}
              //helperText={state.err === "username" && state.msg}
              autoFocus
            />
             </Grid>
             <Grid item xs={12} sm={4}>
             <TextField
              margin="normal"
              required
              fullWidth
              id="Phone Number"
              label="Phone Number"
              name="Phone Number"
              //value={state.username}
              //onChange={handleChange("username")}
              autoComplete="Phone Number"
              //error={state.err === "username"}
              //helperText={state.err === "username" && state.msg}
              autoFocus
            />
             </Grid>
             <Grid item xs={12}>
               <CustomButton 
                name='Verify'
                color="secondary"
               />
               <AlertDialogSlide
               title={state && state.title}
               open={open}
                Close={handleClose}/>
             </Grid>
            </Grid>
          </form>
        </Paper>
       </div>
    </AppContainer>
  )
}

export default MovieTicket
