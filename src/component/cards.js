import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Naira from 'react-naira' 




const useStyles = makeStyles(theme => ({
card: {
    height:100,
    border:theme.palette.primary.border,
    "&:hover":{
        backgroundColor: "#eee",
        boxShadow: theme.palette.primary.shadow,
        
    }
    },
flex:{
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-start',
    color:theme.palette.primary.text,
    "&:hover":{
        color:theme.palette.primary.main,
    }
    },
    Avatar : {
        color: '#fff',
        backgroundColor: theme.palette.primary.main,
        border:'1px solid white'
        }

}))
const Cards= (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} onClick={props.click} >
    <CardContent>
    <div className={classes.flex} >
      <Avatar className={classes.Avatar}>
      {props.children}
      </Avatar>
      <Typography variant='small'>{props.title}</Typography>
    </div>
    </CardContent>
  </Card>
  )
}

export default Cards
