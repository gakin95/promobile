import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
import CircularProgress from '@material-ui/core/CircularProgress';

import AppContainer from '../../component/Dashboard';
import CustomizedCard from '../../component/cards'



const useStyles = makeStyles(theme => ({
  root :{
    width :  '90%',
    margin : 'auto'
  },
  text : {
    color: theme.palette.primary.text,
    textAlign: 'center',
    paddingBottom:'20px'
  },
  dashtext:{
    color: theme.palette.primary.text,
  },
  divider : {
    backgroundColor : 'white',
    marginBottom : '20px'
  },
  Circular : {
    margin: '0px 50%'
  },
  
}))
const Bills= (props) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const data = [
    {title: 'MOBILE TOPUP', link:'/airtime', Avatar: <PhoneAndroidIcon />},
    {title: 'CABLE TV', link:'#', Avatar: <TvIcon  />},
    {title: 'FUND TRANSFER', link:'/transfer', Avatar: <PaymentIcon />},
    {title: 'ECOMMERCE', link:'#', Avatar: <BusinessIcon  />},
    {title: 'EDUCATION', link:'#', Avatar: <SchoolIcon />},
    {title: 'FLIGHT BOOKING', link:'#', Avatar: <FlightIcon />},
    {title: 'INTERNET MEDIA', link:'#', Avatar: <ArrowRightIcon/>},
    {title: 'INTERNET SERVICE', link:'#', Avatar: <LanguageIcon/>},
  {title: 'CABLE TV', link:'#', Avatar: <TvIcon  />},
    {title: 'FUND TRANSFER', link:'#', Avatar: <PaymentIcon />},
    {title: 'ECOMMERCE', link:'#', Avatar: <BusinessIcon  />},
    {title: 'EDUCATION', link:'#', Avatar: <SchoolIcon />},
    {title: 'UTILITIES', link:'/utilities', Avatar: <BuildIcon />},
    {title: 'RELIGIOUS PAYMENT', link:'#', Avatar: <CreditCardIcon />},
    {title: 'TAXES AND LEVIES', link:'#', Avatar: <ImportantDevicesIcon />},
    {title: 'LOTTERY AND BETTING', link:'#', Avatar: <SportsEsportsIcon />},
    {title: 'FINANCIAL SERVICES', link:'#', Avatar: <MoneyIcon />},
    {title: 'INSURANCE', link:'#', Avatar: <RedeemIcon  />},
  ]
  const handleClick = (link) => {
    setLoading(true);
    setTimeout(() => {
      props.history.push(link)
      setLoading(false);
    }, 1000);
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <AppContainer >
      <div className={classes.root}>
      <div className={classes.text}>
        <Typography variant='h5'>Bills</Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" className={classes.Circular}>
              {loading && <CircularProgress disableShrink />}
          </Typography>
        </Grid>
      {
          data.map(item =>(
            <Grid item md={3} key={item.title}>
            <CustomizedCard title={item.title} click={() => handleClick(item.link)}  > 
            {item.Avatar}
            </CustomizedCard>
        </Grid>
          ))
        }
      </Grid>
      </div>
    </AppContainer>
  )
}

export default Bills
