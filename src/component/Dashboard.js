import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FeedbackIcon from '@material-ui/icons/Feedback';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SubjectIcon from '@material-ui/icons/Subject';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Img from '../../src/Maleuser.png'
import image from '../../src/promobile.jpg'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import classes from './list.module.css'
import { connect } from 'react-redux'



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    background: '#fff',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarDark: {
    backgroundColor:'blue'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color:'rgba(0, 0, 0, 0.54)'
  },
  title2: {
    flexGrow: 1,
    color:'#fff'
  },
  img:{
    height:48,
    borderRadius:5
   
  },
  a :{
    textDecoration : 'none',
    color : 'blue'
},
  List:{
    ':&hover':{
      backgroundColor:theme.palette.primary.main
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor:'#F5F6F9',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  
}));

const links = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    link: "/quicklinks",
    
  },
  {
    name: "Account",
    icon: <AccountBalanceWalletIcon />,
    link: "/account"
  },
  {
    name: "Transfer",
    icon: <PeopleIcon />,
    link: "#",
    open: false,
    children: [
      {
        name: "Own Account",
        icon: <HomeIcon  />,
        link: "/ownaccount",
      },
      {
        name: "Within The Bank",
        icon: <TransferWithinAStationIcon />,
        link: "/withinbank",
      },
      {
        name: "Other Bank",
        icon: <CreditCardIcon />,
        link: "/otherbanks",
      },
      {
        name: "Internet Transfer",
        icon: <MonetizationOnIcon />,
        link: "/internationaltf",
      }

    ]
  },
  {
    name: "Utility Payment",
    icon: <PaymentIcon />,
    link: "/bills",
  },
  {
    name: "Loan",
    icon: <FeedbackIcon />,
    link: "/loaninvestment",
    open: false,
    children: [
      {
        name: "Loan Booking",
        icon: <VisibilityIcon />,
        link: "#",
      },
      {
        name: "Loan Reschedule",
        icon: <VisibilityIcon />,
        link: "#",
      },
    ]
  },
  {
    name: "Investment",
    icon: <SubjectIcon />,
    link: "/investment"
  },
];
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Dashboard = (props)  =>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = (id) => {
    links[id].open = !links[id].open;
  };
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

 const style = checked?classes.title2:classes.title;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, checked && classes.appBarDark, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={style}>
            Promobile
          </Typography>
          <img src={image} alt="Brand logo" className={classes.img}/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List >
        <div > 
          <ListSubheader inset>
          <img src={Img} />
          </ListSubheader>
          <ListSubheader inset >Welcome, {props.firstName}</ListSubheader>
          </div>
          {links.map((nav, index) => (
            <React.Fragment>
              {nav.children? 
              <div >
              <NavLink to={nav.link} key={nav.name} >
              <ListItemLink button onClick={() => handleClick(index)} >
                <ListItemIcon >
                {nav.icon}
                </ListItemIcon>
                <ListItemText primary={nav.name} />
                {nav.open ? <ExpandLess /> : <ExpandMore />}
              </ListItemLink>
              </NavLink>
              {
                nav.children.map((child, index) => (
                  <Collapse in={nav.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <NavLink to={child.link} key={child.name} >
                      <ListItemLink button  
                    className={classes.nested}
                    >
                      <ListItemIcon>
                      {child.icon}
                      </ListItemIcon>
                      <ListItemText primary={child.name} />
                    </ListItemLink>
                    </NavLink>
                  </List>
                  </Collapse>
                ))
              }
              
                </div>
                
             : ( <NavLink to={nav.link} key={nav.name}><ListItemLink href={nav.link} key={nav.name}>
             <ListItemIcon >{nav.icon}</ListItemIcon>
             <ListItemText primary={nav.name} />
             </ListItemLink></NavLink>)
              } 

            </React.Fragment>
            
          ))}
          <ListSubheader inset>
        <FormGroup>
          <FormControlLabel
          control={<Switch checked={checked} onChange={toggleChecked} />}
         />
        </FormGroup>
          </ListSubheader>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {props.children}
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    firstName : state.displayUser.user ? state.displayUser.user.firstName : null
  }
}

export default connect(mapStateToProps)(Dashboard)