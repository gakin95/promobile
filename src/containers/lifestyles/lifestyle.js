import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import image from '../../../src/promobile.jpg'

import AppContainer from '../../component/Dashboard';

const useStyles = makeStyles(theme => ({
  root : {
    width :  '60%',
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
    height:'100vh',
    backgroundImage:`url(${image})`,
    backgroundRepeat: 'no-repeat',
    //backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  ticket:{
    padding:10,
    textAlign:'center',
    width :  '90%',
    margin : '20px auto',
    "&:hover":{
      backgroundColor: "#F92A42",
      color:'#fff'
    }
  }
}))
const Lifestyle = (props) => {
  const movie = () => {
    props.history.push(`/movies`)
}
  const classes = useStyles();
  return (
    <AppContainer>
       <div className={classes.root}>
         <div className={classes.Lifestyle}>
            <Typography variant='h5'>Lifestyle</Typography>
         </div>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className={classes.ticket} onClick={movie}>Movie Ticket</Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper className={classes.ticket}>Flight Ticket</Paper>
            </Grid>
          </Grid>
        </Paper>
       </div>
    </AppContainer>
  )
}

export default Lifestyle
