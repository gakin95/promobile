import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import img from '../../../src/promobile.jpg';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

import AppContainer from '../../component/Dashboard';



const useStyles = makeStyles(theme => ({
  root :{
    width :  '70%',
    margin : 'auto'
  },
  text : {
    color: 'white',
    textAlign: 'center',
    paddingBottom:'20px'
  },
  dashtext:{
    color: 'white',
  },
  divider : {
    backgroundColor : 'white',
    marginBottom : '20px'
  },
  Avatar : {
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
  border:'1px solid white'
  }
}))
const QuickLinks= () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <AppContainer >
      <div className={classes.root}>
      <div className={classes.text}>
        <Typography variant='h5'>Good afternoon Gbenga Akingbulere</Typography>
        <Typography variant='h5'>Welcome</Typography>
        <Typography variant='h5'>Select an icon below or a left menu item to get started</Typography>
      </div>
      <Divider className={classes.divider}/>
      <Grid container spacing={2} className={classes.dashtext}>
      <Grid item md={3}>
          <div>
            <Link to='/'>
              <Avatar className={classes.Avatar}>
              <HomeIcon />
              </Avatar>
              <Typography variant='h6'>Dashboard</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='/'>
              <Avatar className={classes.Avatar}>
              <PaymentIcon />
              </Avatar>
              <Typography variant='h6'>Bills and utility payment</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='/'>
              <Avatar className={classes.Avatar}>
              <HomeIcon />
              </Avatar>
              <Typography variant='h6'>Fund transfer</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='/'>
              <Avatar className={classes.Avatar}>
              <HomeIcon />
              </Avatar>
              <Typography variant='h6'>Loan and investment</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='/'>
              <Avatar className={classes.Avatar}>
              <HomeIcon />
              </Avatar>
              <Typography variant='h6'>Lifestyle</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='/'>
              <Avatar className={classes.Avatar}>
              <HomeIcon />
              </Avatar>
              <Typography variant='h6'>Self service</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='/'>
              <Avatar className={classes.Avatar}>
              <AccountBalanceIcon/>
              </Avatar>
              <Typography variant='h6'>Account</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='/'>
              <Avatar className={classes.Avatar}>
              <ExitToAppIcon />
              </Avatar>
              <Typography variant='h6'>sign out</Typography>
            </Link>
          </div>
        </Grid>
      </Grid>
      </div>
    </AppContainer>
  )
}

export default QuickLinks
