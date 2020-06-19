import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import InputIcon from '@material-ui/icons/Input';
import Image from '../../../src/promobile.jpg';
//import Link from "react-router-dom'";


const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  header: {
    color: "#e5e5e5"
  },
  link: { display: "flex", justifyContent: "center", alignItems: "center" },
  headName: { color: "white", fontFamily: "monospace" }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    //Router.push("/");
  }

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <div to="/" className={classes.link}>
          <img alt="Logo" src="/static/images/logo.png" />
          <Typography variant="h2" className={classes.headName}>
            Promobile
          </Typography>
        </div>
        <div className={classes.flexGrow} />
        {/* <Hidden mdDown> */}
          <IconButton className={classes.signOutButton} onClick={handleLogout} color="inherit">
            <InputIcon />
          </IconButton>
        {/* </Hidden> */}
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
