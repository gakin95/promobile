import React from 'react';
// import classes from './home.module.css';
import Img from '../../../src/promobile.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import {NavLink }from 'react-router-dom'

const useStyles = makeStyles(theme => ({
 root: {
  backgroundImage: 'url(https://source.unsplash.com/random)',
  backgroundRepeat: 'no-repeat',
  backgroundColor:
  theme.palette.type === 'dark' ? theme.palette.blue[900] : theme.palette.grey[50],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
},
halfCircle : {
  width : '50%',
  height:'100vh',
  backgroundColor:'#fff',
  borderBottomRightRadius:'50%',
  borderTopRightRadius:'50%',
  borderLeft:0,
  overflow:'hidden',
  WebkitBoxSizing:'border-box',
  MozBoxSizing:'border-box',
  [theme.breakpoints.down('sm')]: {
    backgroundColor: theme.palette.secondary.main,
    width:'90%'
  },
},
img:{
  height:60
},
center:{
  textAlign:'center',
  padding:"20%"
  
},
dFlex:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  margin:'auto'
},
margin:{
  marginBottom:20
}
}))

const Home = () => {
  const classes= useStyles();
  return (
    <div className={classes.root}> 
      <div className={classes.halfCircle} >
        <div className={classes.center}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
             <div className={classes.dFlex}>
               <img src={Img} alt="" className={classes.img}/>
               <Typography variant='h5'>Mobile</Typography>
             </div>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h4' className={classes.margin}>The world at your finger tip</Typography>
              <Typography variant='small' className={classes.margin}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quidem? Alias est unde, 
                ab natus ullam sed rerum possimus blanditiis, cupiditate et ratione aliquam ex minus. Eius ea corrupti tempora?
              </Typography>
            </Grid>
            <Grid item xs={12}>
             <NavLink to='/login'>
               <Button 
                 color="primary" 
                 className={classes.button}
                 variant="contained">
                 Get started
               </Button>
             </NavLink>
            </Grid>
          </Grid>
      </div>
    </div>
    </div>
  )
}

export default Home
