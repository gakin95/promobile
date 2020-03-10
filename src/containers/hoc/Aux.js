import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from '../../../src/signup.jpg'

const useStyles = makeStyles(theme => ({
    background : {
         backgroundImage: `url(${img})`,
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'100vh'
    }
  }));

export default function App(props) {
    const classes = useStyles();
  return (
  <div className={classes.background}>{props.children}</div>
  );
}
