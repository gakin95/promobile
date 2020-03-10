import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';
import * as actionType from '../../../../src/store/actions'


 function AddressForm(props) {
  const [value, setValue] = React.useState('')
  const [state, setState] = React.useState({id:'', name: '' , num: ''},)
  const accounts = [
    {id:'hhhshh', name: 'Akingbulere Gbenga Samuel' , num: '0734474102'},
    {id:'hhhshh', name: 'Haruna ogweda' , num: '0734474103'},
    {id:'hhhszzzhh', name: 'Ayo Daniel' , num: '3063800039'}
  ];
  const accountNumbers = accounts.map(account => account.num);
  const arr = [value];
  const found = arr.some(r=>accountNumbers.indexOf(r)>=0);
  const userInput = +value;
  const index = accounts.findIndex(el => el.num == userInput);
  console.log('found: ', found)
  console.log('index: ', index)
  const handleChange = (e) => {
    setValue(e.target.value)
    if (found){
      setState({
        id : accounts[index].id,
        name :accounts[index].name,
        num : accounts[index].num 
      })
    
    }
    console.log("state",  state)
    props.onInputAccountNumber(state,found)
   
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
          {(found) && <div>Hello {props.acc.name}, thanks for registering with us , an email  has been forwarded to you</div>}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  return {
    auth : state.authenticated,
    acc : state.account,
    val : state.currAcc
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onInputAccountNumber: (accProp,aut) => dispatch({type : actionType.Find_User, accountProperty:accProp, auth:aut})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddressForm))