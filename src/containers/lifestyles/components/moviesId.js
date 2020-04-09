import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'

import MovieImg from '../../../../src/movieid.webp'

import { config } from '../../../../src/axios';
import axios from 'axios'

import AppContainer from '../../../component/Dashboard';
import CustomButton from '../../../component/button';

const useStyles = makeStyles(theme => ({
  root : {
    backgroundColor : '#F92A42'
  },
  Lifestyle : {
    padding : 20,
    color:'#fff'
  },
  paper:{
    borderRadius:10,
    height:'auto',
    color:'black'
  },
  text:{
    paddingLeft:20,
    paddingRight:20
  },
  divider : {
    backgroundColor : '#F92A42',
    marginBottom : 10,
    marginTop : 10
  },
}))
const MoviesId = (props) => {
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
  const Navigate = (id) => {
    props.history.push(`/order/${id}`)
  }
  
  const classes = useStyles();
  let Details = <div>Loading...</div>
  if (state){
    console.log('...............',state)
    Details = <div className={classes.root}>
         <div className={classes.Lifestyle}>
            <Typography variant='h5'>{state.title}</Typography>
         </div>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}
             style={{backgroundImage:`url(${state.large_cover_image})`,
             backgroundRepeat: 'no-repeat',
             height:'60vh',
             weight:'100%',
            backgroundSize: 'cover',
            overflow:'hidden',
            backgroundPosition: 'center',  
             }}></Grid>
            <Grid item xs={12}><Typography variant='h6' className={classes.text}>Year:{state.year}</Typography></Grid>
            <Grid item xs={12}><Typography variant='h6' className={classes.text}>Duration:{state.runtime}min</Typography></Grid>
            <Grid item xs={12}><Typography variant='h6' className={classes.text}>Genre:{state.genres[0]}</Typography></Grid>
            <Grid item xs={12}><Typography variant='h6' className={classes.text}>Rating:{state.rating}</Typography></Grid>
            <Grid item xs={12}><Typography variant='h6' className={classes.text}>Description:</Typography></Grid>
            <Grid item xs={12}>
            <Typography variant='h6' className={classes.text}>{state.description_full}</Typography>
            </Grid>
            <Grid xs={12}>
            <Divider className={classes.divider}/>
            </Grid>
            <Grid item xs={12}><Typography variant='h6' className={classes.text}>Silver bird cinemas</Typography></Grid>
            <Grid item xs={12}>
            <CustomButton 
              name='Next'
              color='primary'
              Click={() => Navigate(state.id)}
            />
          </Grid>
          </Grid>
        </Paper>
       </div>
  }
  return (
    <AppContainer>
       {Details}
    </AppContainer>
  )
}

export default MoviesId
