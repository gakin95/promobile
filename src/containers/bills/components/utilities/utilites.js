

// import Dashboard from '../../../../component/Dashboard'
import img from '../../../../../src/lawma.jpg';
import gotv from '../../../../../src/gotv.jpg';
import ikejaimg from '../../../../../src/ikejaimg.jpg';
import dstv from '../../../../../src/dstv.jpeg';
import Lagoswater from '../../../../../src/Lagoswater.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
        <Typography variant='h5'>Select an  item to get started</Typography>
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
          image={Lagoswater}
          />
        </Grid>
        <Grid item md={3}>
        <Utility 
          text='Ikeja Electric Postpaid'
          image={ikejaimg}
          />
        </Grid>
        <Grid item md={3}>
        <Utility 
          text='GOTV'
          image={dstv}
          />
        </Grid>
        <Grid item md={3}>
        <Utility 
          text='GOTV'
          image={gotv}
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
