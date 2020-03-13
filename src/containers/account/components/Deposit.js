import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Naira from 'react-naira' 
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles(theme => ({
  depositContext: {
    flex: 1,
  },
  divider : {
    backgroundColor : theme.palette.primary.border,
    marginBottom : 10,
    marginTop : 10
  },
}));

export default function Deposits(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{props.Title}</Title>
      <Divider className={classes.divider}/>
      <div>
      <Typography component="p" variant="h5">January:</Typography>
      <Typography component="p" variant="h5">
        <Naira>{props.Amount}</Naira>
      </Typography>
      </div>
    </React.Fragment>
  );
}