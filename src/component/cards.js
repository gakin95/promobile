import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';




const useStyles = makeStyles(theme => ({
  card: {
  height:100
},
flex:{
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between'
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
          <Card className={classes.card}>
            <CardContent>
            <Link to='/quicklinks' className={classes.flex}>
              <Avatar className={classes.Avatar}>
              <props />
              </Avatar>
              <Typography variant='small'>{props.text}</Typography>
            </Link>
            </CardContent>
          </Card>
  )
}

export default Cards
