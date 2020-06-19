import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';




const useStyles = makeStyles(theme => ({
    card: {
        height:240,
        border:theme.palette.primary.border,
        color:'black',
        "&:hover":{
          boxShadow: theme.palette.primary.shadow,
          backgroundColor: 'black',
          color:'#fff'
        }
      },
      text:{
        textAlign:'center'
      },
      img:{
          borderRadius:10,
          height:120,
          width:'100%',
          textAlign:'center'
      }
}))
const MovieCard= (props) => {
  const classes = useStyles();
  return (
          <Card className={clsx(classes.card, classes.text)}>
            <CardContent>
                <img src={props.image} className={classes.img} alt="money"/>
                <Typography variant='h5' >{props.title}</Typography>
                <Typography variant='small' >{props.time}mins</Typography>
            </CardContent>
          </Card>
  )
}

export default MovieCard

