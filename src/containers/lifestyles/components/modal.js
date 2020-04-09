import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import CustomButton from '../../../component/button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.Close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Successful"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You have sucessfully paid NGN5000.00 AS Ticket movie to watch {props.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButton name='Ok' Click={props.Close} color="primary" />
          <CustomButton name='Share' Click={props.Close} color="primary" />
        </DialogActions>
      </Dialog>
    </div>
  );
}