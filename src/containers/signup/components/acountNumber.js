import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';
import * as actionCreators from '../../../store/actions/index'


 function AccountForm(props) {
const [state, setState] = useState({
  accountNum : '',
  err:'',
  msg:'',
  valid:false,
  saved: true
});

const handleChange = e => {
  e.preventDefault();
  const { name, value } = e.target;
  let { err, msg }= {...state};
  //value.trim() !== '' && isValid;
  switch(name){
    case "accountNum":
       err = "accountNum";
       msg = value.length < 10 ? "minimum 10 characaters required" : "";
      break;
      default:
         break;
  }
  setState(prevState => ({
    ...prevState,
    err,
    msg,
    [name]: value,
    valid:value.length === 9
  }));
  console.log('now',state.valid)
  props.onInputAccountNumber(state);

};
const checked = () => {
  setState(prev =>({
    ...prev,
    saved : !prev.saved
  }))
  console.log('saved:',state.saved)
  props.onInputAccountNumber(state)
};
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter your account number
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
          <TextField
            required
            onChange={handleChange}
            id="accountNum"
            name="accountNum"
            label="Account Number"
            value={state.accountNum}
            fullWidth
            error={state.msg ? state.err === "accountNum":""}
              helperText={state.err === "accountNum" && state.msg}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary"  name="saveAccount" value="yes" onClick={checked}/>}
            label="Save your account to continue"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onInputAccountNumber: (acc) => dispatch(actionCreators.accountDetails(acc))
  }
}

export default connect(null,mapDispatchToProps)(withRouter(AccountForm))