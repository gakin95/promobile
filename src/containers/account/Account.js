import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import AppContainer from '../../component/Dashboard';
import Chart from '../account/components/Charts';
import Deposits from './components/Deposit';
import Orders from './components/Orders';
import Accounts from './components/accounts'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
container: {
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
},
paper: {
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
},
fixedHeight: {
  height: 240,
},
}))
const Account = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <AppContainer >
      <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Accounts 
              AccountName='CURRENT ACCOUNT'
              AccountNum='0734474102'
              Balance='250000'
              />
            </Grid>
            <Grid item xs={12} md={3}>
            <Accounts 
              AccountName='SAVINGS ACCOUNT'
              AccountNum='0734474102'
              Balance='20000'
              />
            </Grid>
            <Grid item xs={12} md={3}>
            <Accounts 
              AccountName='LOAN'
              AccountNum='0734474102'
              Balance='250000'
              />
            </Grid>
            <Grid item xs={12} md={3}>
            <Accounts 
              AccountName='INVESTMENT'
              AccountNum='0734474102'
              Balance='250000'
              />
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits 
                Title='Total Deposits MTD'
                Amount='45000'
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits 
                Title='Total Withdrawal MTD'
                Amount='45000'
                />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
    </AppContainer>
  )
}

export default Account
