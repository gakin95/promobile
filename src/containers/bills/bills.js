import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TvIcon from '@material-ui/icons/Tv';
import PaymentIcon from '@material-ui/icons/Payment';
import SchoolIcon from '@material-ui/icons/School';
import FlightIcon from '@material-ui/icons/Flight';
import LanguageIcon from '@material-ui/icons/Language';
import BusinessIcon from '@material-ui/icons/Business';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import BuildIcon from '@material-ui/icons/Build';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MoneyIcon from '@material-ui/icons/Money';
import RedeemIcon from '@material-ui/icons/Redeem';

import AppContainer from '../../component/Dashboard';



const useStyles = makeStyles(theme => ({
  root :{
    width :  '90%',
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
const Bills= () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <AppContainer >
      <div className={classes.root}>
      <div className={classes.text}>
        <Typography variant='h5'>Bills</Typography>
      </div>
      <Grid container spacing={2} className={classes.dashtext}>
      <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <PhoneAndroidIcon />
              </Avatar>
              <Typography variant='h6'>MOBILE TOPUP</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <TvIcon  />
              </Avatar>
              <Typography variant='h6'>CABLE TV</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <PaymentIcon />
              </Avatar>
              <Typography variant='h6'>Fund transfer</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <BusinessIcon  />
              </Avatar>
              <Typography variant='h6'>ECOMMERCE</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <SchoolIcon />
              </Avatar>
              <Typography variant='h6'>EDUCATION</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <FlightIcon />
              </Avatar>
              <Typography variant='h6'>FLIGHT BOOKING</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <ArrowRightIcon/>
              </Avatar>
              <Typography variant='h6'>INTERNET MEDIA</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <LanguageIcon/>
              </Avatar>
              <Typography variant='h6'>INTERNET SERVICE</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <CreditCardIcon />
              </Avatar>
              <Typography variant='h6'>RELIGIOUS PAYMENT</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <ImportantDevicesIcon />
              </Avatar>
              <Typography variant='h6'>TAXES AND LEVIES</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='/utilities'>
              <Avatar className={classes.Avatar}>
                  <BuildIcon />
              </Avatar>
              <Typography variant='h6'>UTILITIES</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='/'>
              <Avatar className={classes.Avatar}>
              <SportsEsportsIcon />
              </Avatar>
              <Typography variant='h6'>LOTTERY AND BETTING</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <MoneyIcon />
              </Avatar>
              <Typography variant='h6'>FINANCIAL SERVICES</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Link to='#'>
              <Avatar className={classes.Avatar}>
              <RedeemIcon  />
              </Avatar>
              <Typography variant='h6'>INSURANCE</Typography>
            </Link>
          </div>
        </Grid>
      </Grid>
      </div>
    </AppContainer>
  )
}

export default Bills
