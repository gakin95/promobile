import React from 'react';
import clsx from 'clsx';
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
        height:120,
        border:theme.palette.primary.border,
        color:'#fff',
        "&:hover":{
          boxShadow: theme.palette.primary.shadow,
        }
      },
divider : {
    backgroundColor : '#fff',
    marginBottom : 10,
    marginTop : 10
  },
  text: {
      display:'flex',
      flexDirection:'row-reverse',
      color:'#fff'
  },
  accnum: {
    textAlign:'center',
    color:'#fff'
},
Amount : {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
  },
}))
const Account= (props) => {
  const classes = useStyles();
  return (
          <Card className={clsx(classes.card, props.class)}>
            <CardContent>
            <Link to='#'>
            <Typography variant='small' className={classes.accnum}>{props.AccountName}</Typography>
            </Link>
            <Divider className={classes.divider}/>
            <Typography variant='small' className={classes.text}>{props.AccountNum}</Typography>
            <div className={classes.Amount}>
            <Avatar className={props.Avatar}>
                <AccountBalanceWalletIcon  />
            </Avatar>
            <Typography variant='h5' >
            <Naira>{props.Balance}</Naira>
            </Typography>
            </div>
            </CardContent>
          </Card>
  )
}

export default Account

