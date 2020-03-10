

// import Dashboard from '../../../../component/Dashboard'
import img from '../../../../../src/lawma.jpg'
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

import AppContainer from '../../../../component/Dashboard';
import Utility from '../utilities/component/utility'



const useStyles = makeStyles(theme => ({
  root :{
    width :  '70%',
    margin : 'auto'
  },
  card: {
  height:100
},
  text : {
    color: 'white',
    textAlign: 'center',
    paddingBottom:'20px'
  },
}))
const Utilities= () => {
  const classes = useStyles();
  
  return (
    <AppContainer >
      <div className={classes.root}>
      <div className={classes.text}>
        <Typography variant='h5'>Select an icon below or a left menu item to get started</Typography>
      </div>
      <Divider className={classes.divider}/>
      <Grid container spacing={2} className={classes.dashtext}>
      <Grid item md={3}>
          <Utility 
          text='Lagos state waste management authority'
          image={img}
          />
        </Grid>
        <Grid item md={3}>
        <Utility 
          text='Lagos state water coporation'
          image={img}
          />
        </Grid>
        <Grid item md={3}>
        <Utility 
          text='Ikeja Electric Postpaid'
          image={img}
          />
        </Grid>
        <Grid item md={3}>
        <Utility 
          text='GOTV'
          image={img}
          />
        </Grid>
        <Grid item md={3}>
        <Utility 
          text='DSTV'
          image={img}
          />
        </Grid>
        <Grid item md={3}>
        <Utility 
          text='Bills and utility payment'
          image={img}
          />
        </Grid>
        <Grid item md={3}>
        <Utility 
          text='Bills and utility payment'
          image={img}
          />
        </Grid>
        <Grid item md={3}>
        <Utility 
          text='Bills and utility payment'
          image={img}
          />
        </Grid>
      </Grid>
      </div>
    </AppContainer>
  )
}

export default Utilities
