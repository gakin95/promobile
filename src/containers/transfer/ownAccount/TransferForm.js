import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({

  formControl: {
    width:'100%',
    minWidth: 120,
  },
}));




export default function TransferForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name : '',
    selectA : '',
    selectB : ''
  });
  const [switche, setSwitche] = React.useState({
    checkedB: true,
  });

  const handleChangeSwitch = name => event => {
    setSwitche({ ...switche, [name]: event.target.checked });
  };
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value});
    console.log(state)
  };
  let sum = 120000;
  const extra = 50000;
  function Month(months){
    for(let i=1; i <= months; i++){
      sum += sum*0.35 + extra 
      console.log(i , sum);
    }
  }
  const handlesum = () => {
    Month(12)
  }

 
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Select source account</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={state.selectA}
              onChange={handleChange('selectA')}
            >
              <MenuItem value="">
                <em>Select an account</em>
              </MenuItem>
              <MenuItem value={10}>0734474102</MenuItem>
              <MenuItem value={20}>0801490817</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Select destination account</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={state.selectB}
              onChange={handleChange('selectB')}
            >
              <MenuItem value="">
                <em>Select an account</em>
              </MenuItem>
              <MenuItem value={10}>0734474102</MenuItem>
              <MenuItem value={20}>0801490817</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="amount"
            name="amount"
            label="Amount:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="Description:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Set as standing order?"
            />
          </Grid>
          <Button onClick={handlesum}>sum</Button>
      </Grid>
    </React.Fragment>
  );
}
