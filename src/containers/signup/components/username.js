import React, {useState} from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import * as actionCreators from '../../../store/actions/index';
import { withRouter } from 'react-router-dom';


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const checkValidity =((value, rules,msg) =>{
  let isValid = true;
  
  if (rules.required) {
      isValid = value.trim() !== '' && isValid;
  }

  if (value.length) {
      isValid = msg && isValid
  }


  return isValid;
})


const SignUpForm = (props) =>{
  const [state, setState] = useState({
    firstName : '',
    lastName : 'Adebayo',
    middleName : 'Olamide',
    phone : '09087654321',
    email : 'emm@gmail.com',
    address: '9 toluwani street, ikotun,lagos',
    username : 'emmade01',
    password : '1234567',
    err:'',
    msg:'',
    validation: {
      required: true
  },
  //valid:false,
  });
  const handleChange =  (e) => { 
    e.preventDefault();
    const { name, value } = e.target;
    let { err, msg }= {...state};
    switch(name){
      case "firstName":
         err = "firstName";
         msg = value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
           err = "lastName";
           msg =  value.length < 3 ? "minimum 3 characaters required" : "";
         break;
      case "middleName":
           err = "middleName";
           msg = value.length < 3 ? "minimum 3 characaters required" : "";
         break;
      case "phone":
           err = "phone";
           msg =  value.length < 8 ? "minimum 8 characaters required" : "";
         break;
      case "email":
           err = "email";
           msg =  emailRegex.test(value)? "" : "invalid email address";
         break;
      case "address":
          err = "address";
          msg =  value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      case "username":
           err = "username";
           msg =  value.length < 3 ? "minimum 3 characaters required" : "";
           break;
      case "password":
           err = "password";
           msg = value.length < 6 ? "minimum 6 characaters required" : "";
           break;
        default:
           break;
    }
    setState({
      ...state,
      err : err,
      msg: msg,
      [name]: value,
      //valid: checkValidity(state[name],state.validation,state.msg)
    });
    console.log(state)
    props.gatherPersonalDetails(state);
 };
 const add = () => {
  //const {firstName , lastName,middleName ,phone , email ,address, username, password} = {state};
  props.gatherPersonalDetails(state);
 }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter your personal details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required = {state.validation}
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            value={state.firstName}
            onChange={handleChange}
            autoComplete="firstName"
            error={state.msg ? state.err === "firstName":""}
            helperText={state.err === "firstName" && state.msg}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required = {state.validation}
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            value={state.lastName}
            onChange={handleChange}
            autoComplete="lastName"
            error={state.msg ? state.err === "lastName":""}
            helperText={state.err === "lastName" && state.msg}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required = {state.validation}
            id="middleName"
            name="middleName"
            label="Middle Name"
            fullWidth
            value={state.middleName}
            onChange={handleChange}
            autoComplete="middleName"
            error={state.msg ? state.err === "middleName":""}
            helperText={state.err === "middleName" && state.msg}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required = {state.validation}
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            value={state.phone}
            onChange={handleChange}
            autoComplete="phone"
            error={state.msg ? state.err === "phone":""}
            helperText={state.err === "phone" && state.msg}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required = {state.validation}
            id="email"
            name="email"
            label="Email"
            fullWidth
            value={state.email}
            onChange={handleChange}
            autoComplete="email"
            error={state.msg ? state.err === "email":""}
            helperText={state.err === "email" && state.msg}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required = {state.validation}
            id="address"
            name="address"
            label="Adress"
            fullWidth
            value={state.address}
            onChange={handleChange}
            autoComplete="password"
            error={state.msg ? state.err === "address":""}
            helperText={state.err === "address" && state.msg}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required = {state.validation}
            id="username"
            name="username"
            label="User name"
            fullWidth
            value={state.username}
            onChange={handleChange}
            autoComplete="username"
            error={state.msg ? state.err === "username":""}
            helperText={state.err === "username" && state.msg}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required = {state.validation}
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            value={state.password}
            onChange={handleChange}
            autoComplete="password"
            error={state.msg ? state.err === "password":""}
            helperText={state.err === "password" && state.msg}
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveDetails" value="yes" onClick={add}/>}
            label="Save your details to continue"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    gatherPersonalDetails: (userInput) => dispatch(actionCreators.gatherPersonalDetails(userInput))
  }
}
export default connect(null,mapDispatchToProps)(withRouter(SignUpForm))