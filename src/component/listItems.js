import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';
import Img from '../../src/Maleuser.png';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import classes from './list.module.css'


export const mainListItems = (
  <div>
    <div > 
    <ListSubheader inset>
    <img src={Img} />
    </ListSubheader>
      <ListSubheader inset>Welcome, Daniel</ListSubheader>
    </div>
    <NavLink to="/quicklinks">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </NavLink>
    <NavLink to="/account">
    <ListItem button>
    <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItem> 
    </NavLink>
    <NavLink to="/transfer">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Transfer" />
    </ListItem>
    </NavLink>
    <NavLink to="loaninvestment">
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Loan Investment" />
    </ListItem>
    </NavLink>
    <NavLink to="/investment">
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Investment" />
    </ListItem>
    </NavLink>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Request</ListSubheader>
    <NavLink to="/cardrequest">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Card Request" />
    </ListItem>
    </NavLink>
  </div>
);