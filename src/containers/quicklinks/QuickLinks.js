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

import AppContainer from '../../component/Dashboard';
import Cards from '../../component/cards';



const useStyles = makeStyles(theme => ({
  root :{
    width :  '70%',
    margin : 'auto'
  },
  card: {
  height:100
},
flex:{
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between'
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
          <Card className={classes.card}>
            <CardContent>
            <Link to='/quicklinks' className={classes.flex}>
              <Avatar className={classes.Avatar}>
              <HomeIcon />
              </Avatar>
              <Typography variant='small'>Dashboard</Typography>
            </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardContent>
            <Link to='/bills' className={classes.flex}>
              <Avatar className={classes.Avatar}>
              <PaymentIcon />
              </Avatar>
              <Typography variant='small'>Bills and utility payment</Typography>
            </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
          <CardContent>
            <Link to='/transfer' className={classes.flex}>
              <Avatar className={classes.Avatar}>
              <HomeIcon />
              </Avatar>
              <Typography variant='small'>Fund transfer</Typography>
            </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardContent>
            <Link to='/loaninvestment' className={classes.flex}>
              <Avatar className={classes.Avatar}>
              <PaymentIcon />
              </Avatar>
              <Typography variant='small'>Loan and investment</Typography>
            </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardContent>
            <Link to='#' className={classes.flex}>
              <Avatar className={classes.Avatar}>
              <PaymentIcon />
              </Avatar>
              <Typography variant='small'>Lifestyle</Typography>
            </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardContent>
            <Link to='#' className={classes.flex}>
              <Avatar className={classes.Avatar}>
              <PaymentIcon />
              </Avatar>
              <Typography variant='small'>Self service</Typography>
            </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardContent>
            <Link to='/account' className={classes.flex}>
              <Avatar className={classes.Avatar}>
              <AccountBalanceIcon />
              </Avatar>
              <Typography variant='small'>Accounts</Typography>
            </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardContent>
            <Link to='/' className={classes.flex}>
              <Avatar className={classes.Avatar}>
              <ExitToAppIcon />
              </Avatar>
              <Typography variant='small'>sign out</Typography>
            </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </div>
    </AppContainer>
  )
}

export default QuickLinks
