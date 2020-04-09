import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { config } from '../../../../src/axios';
import axios from 'axios'
import money from '../../../../src/money.jpeg';
import moneyHeist from '../../../../src/moneyheist.jpeg';
import AppContainer from '../../../component/Dashboard';
import MovieCard from '../components/card'


const useStyles = makeStyles(theme => ({
  root : {
    //backgroundColor : '#F92A42',
    width:'90%',
    magin:'auto'
  },
  Lifestyle : {
    padding : 20,
    textAlign: 'center',
    color:'#F92A42'
  },
  center:{
    textAlign:'center'
  }
  
}))
const Movies = (props) => {
 const [state, setstate] = useState()
  useEffect(() => {
    try {
      axios.get(config.movies)
     .then(res => {
       const data = res.data.data.movies;
       //data.splice(3)
       setstate(data);
     });
    }
    catch (ex){
      console.log(ex)
    }
  },[]);
  if (state){
    console.log('from state¯..........',state);
  }
    const add = (id) => {
        props.history.push(`/moviesId/${id}`)
    }
  const classes = useStyles();
  return (
    <AppContainer>
       <div className={classes.root}>
         <div className={classes.Lifestyle}>
            <Typography variant='h5'>Movies Ticket</Typography>
         </div>
          <Grid container spacing={2}>
            {state? state.map(item => <Grid item xs={12} sm={4} key={item.id} onClick={()=>add(item.id)}>
              <MovieCard 
               image={item.large_cover_image}
               title={item.title}
               time={item.runtime}
              />
            </Grid>) : <div className={classes.Lifestyle}>loading...</div>}
          </Grid>
       </div>
    </AppContainer>
  )
}


export default Movies
