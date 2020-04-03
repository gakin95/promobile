import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';
import * as actionCreators from '../../../store/actions/index'


 function AddressForm(props) {
  const [value, setValue] = React.useState('')
  const [state, setState] = React.useState(null)
  const accounts = [
    {id:'hhhshh', name: 'Akingbulere Gbenga Samuel' , num: '123'},
    {id:'hhhshh', name: 'Haruna ogweda' , num: '456'},
    {id:'hhhszzzhh', name: 'Ayo Daniel' , num: '678'}
  ];
  

  const handleChange = (e) => {
    const val = e.target.value;

    const selectedAccount = accounts.filter((acct) => { return acct.num === val });
    console.log('selectedAccount', selectedAccount)
    if (typeof selectedAccount[0] !== "undefined") {
      setState(selectedAccount[0])
    } else {
      setState(null)
    }
    setValue(val);
  }


  //console.log(props)
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
            id="account_number"
            name="account_number"
            label="account number"
            value={value}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="click to verify your account number"
          />
          {state && <div>Hello {state.name}, thanks for registering with us , an email  has been forwarded to you</div>}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  return {
    auth : state.signup.authenticated,
    acc : state.signup.account,
    val : state.signup.currAcc
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onInputAccountNumber: (accProp,aut) => dispatch(actionCreators.findUser(accProp,aut))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddressForm))