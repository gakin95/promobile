import React from 'react';
import classes from './home.module.css';
import Img from '../../../src/promobile.jpg'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import {NavLink }from 'react-router-dom'

const Home = () => {
  return (
    <div className={classes.root}> 
      <div className={classes.halfCircle} >
        <div className={classes.center}>
          <div className={classes.dFlex}>
          <img src={Img} alt=""/>
           <Typography variant='h5'>Mobile</Typography>
          </div>
       <Typography variant='h4' className={classes.margin}>The world at your finger tip</Typography>
       <Typography variant='small' className={classes.margin}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quidem? Alias est unde, 
       ab natus ullam sed rerum possimus blanditiis, cupiditate et ratione aliquam ex minus. Eius ea corrupti tempora?
       </Typography>
       <NavLink to='/login'>
       <Button >Get Started</Button>
       </NavLink>
      </div>
    </div>
    </div>
  )
}

export default Home
