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
        height:120,
        border:theme.palette.primary.border,
        color:theme.palette.primary.text,
        "&:hover":{
          backgroundColor: "#eee",
          boxShadow: theme.palette.primary.shadow,
          color:theme.palette.primary.main
        }
      },
divider : {
    backgroundColor : theme.palette.primary.border,
    marginBottom : 10,
    marginTop : 10
  },
Avatar:{
    border : '1px solid #fff',
    backgroundColor: theme.palette.primary.main
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
          <Card className={classes.card}>
            <CardContent>
            <Link to='#'>
            <Typography variant='small' className={classes.text}>{props.AccountName}</Typography>
            </Link>
            <Divider className={classes.divider}/>
            <Typography variant='small'>{props.AccountNum}</Typography>
            <div className={classes.Amount}>
            <Avatar className={classes.Avatar}>
                <AccountBalanceWalletIcon  />
            </Avatar>
            <Typography component='p' >
            <Naira>{props.Balance}</Naira>
            </Typography>
            </div>
            </CardContent>
          </Card>
  )
}

export default Account

