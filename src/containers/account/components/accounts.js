import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ForwardIcon from '@material-ui/icons/Forward';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root : {
        backgroundColor : theme.palette.primary.main
    },
    spacing:{
        marginBottom:20
    },
    Paper : {
       height:'40px',
       color:'inherit',
       paddingTop:10
    },
    current :{
        color:'#fff',
        margin:'10px'
    },
    Flex : {
        display: 'flex',
        alignItems: 'center',
    }
}))

const Accounts = () => {
    const classes = useStyles();
  return (
   <div > 
    <div className={classes.spacing}> 
    <Typography variant='p' className={classes.current}>Current</Typography>
      <Paper className={classes.Paper}>
          <Grid container spacing={0}>
              <Grid item md={4} >
                  <div className={classes.Flex}>  
                  <ForwardIcon />
                  <Link to='#'>
                      <Typography variant='small'>CUREENT ACC,-INDIVIDUAL</Typography>
                  </Link>
                  </div>
              </Grid>
              <Grid item md={4}>
                  <Typography variant='small'>08168187018</Typography>
              </Grid>
              <Grid item md={4}>
              <Typography variant='small'>NGN 10,0000</Typography>
              </Grid>
          </Grid>
      </Paper>
    </div>
      <Typography variant='p' className={classes.current}>Saving</Typography>
      <Paper className={classes.Paper}>
          <Grid container spacing={0}>
              <Grid item md={4} >
                  <div className={classes.Flex}>  
                  <ForwardIcon />
                  <Link to='#'>
                      <Typography variant='small'>PREMIER SAVINGS</Typography>
                  </Link>
                  </div>
              </Grid>
              <Grid item md={4}>
                  <Typography variant='small'>0058852963</Typography>
              </Grid>
              <Grid item md={4}>
              <Typography variant='small'>NGN 5,500</Typography>
              </Grid>
          </Grid>
      </Paper>
   </div>
  )
}

export default Accounts
