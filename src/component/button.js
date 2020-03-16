import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}))


const CustomButton = (props) => {
 const classes = useStyles();
  return (
    <div>
      <Button
              type="submit"
              //fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={props.Click}
            >
              {props.name}
        </Button> 
    </div>
  )
}

export default CustomButton
