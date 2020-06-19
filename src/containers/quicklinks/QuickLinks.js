import React,{ useEffect }  from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import CircularProgress from '@material-ui/core/CircularProgress';
import AppContainer from '../../component/Dashboard';
import CustomizedCard from '../../component/cards';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'




const useStyles = makeStyles(theme => ({
  root :{
    width :  '70%',
    margin : 'auto'
  },
Circular : {
  margin: '0px 50%'
},
  text : {
    color: theme.palette.primary.text,
    textAlign: 'center',
    paddingBottom:'20px',
    paddingTop:'24px'
  },
  select : {
    color : theme.palette.primary.main
  },
  dashtext:{
    color: 'white',
  },
  divider : {
    backgroundColor : theme.palette.primary.text,
    marginBottom : '20px'
  },
}));



const QuickLinks= (props) => {
  const token = localStorage.getItem('token');
  useEffect(() => {
    props.displayUser(token);
  },[]);

  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const data = [
    {title: 'Dashboard', link:'/quicklinks', Avatar: <HomeIcon />},
    {title: 'Bill / Utility', link:'/bills', Avatar: <PaymentIcon />},
    {title: 'Fund Transfer', link:'/transfer', Avatar: <HomeIcon />},
    {title: 'Loan and Credit Card', link:'/loaninvestment', Avatar: <PaymentIcon />},
    {title: 'Lifestyle', link:'/lifestyles', Avatar: <PaymentIcon />},
    {title: 'Self Service', link:'#', Avatar: <PaymentIcon />},
    {title: 'Accounts', link:'/account', Avatar: <AccountBalanceIcon />},
    {title: 'Sign Out', link:'/logout', Avatar: <ExitToAppIcon />},
  ]
  const handleClick = (link) => {
    setLoading(true);
    setTimeout(() => {
      props.history.push(link)
      setLoading(false);
    }, 1000);
  };
  console.log(props)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  let getUser = <div>{props.errorMessage}</div>;
  if (props.errorMessage === null) {
    getUser = <div>
      <div className={classes.text}>
        <Typography variant='small'>Good <b>afternoon</b>, <i>{props.firstName} {props.lastName}</i></Typography>
        <Typography variant='body1'className={classes.select}>Select an icon below or a left menu item to get started</Typography>
      </div>
      <Divider className={classes.divider}/>
      <Grid container spacing={2} className={classes.dashtext}>
        <Grid item xs={12}>
        <Typography component="h1" variant="h5" className={classes.Circular}>
            {loading && <CircularProgress disableShrink />}
      </Typography>
        </Grid>
        {
          data.map(item =>(
            <Grid item xs={12} sm={6} md={3} key={item.title}>
            <CustomizedCard title={item.title} click={() => handleClick(item.link)}  > 
            {item.Avatar}
            </CustomizedCard>
        </Grid>
          ))
        }
      </Grid>
    </div>
  }
  return (
    <AppContainer >
      <div className={classes.root}>
        {getUser}
      </div>
    </AppContainer>
  )
}

const mapStateToProps = state => {
  return {
    token : state.login.token,
    errorMessage : state.displayUser.error,
    firstName : state.displayUser.user ? state.displayUser.user.firstName : null,
    lastName : state.displayUser.user ? state.displayUser.user.lastName : null
  }
};

const mapDispatchToProps = dispatch => {
  return {
    displayUser : (token) => dispatch(actions.displayUser(token)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuickLinks))
