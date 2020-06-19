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




export default function TransferForm(props) {
  const classes = useStyles();
 
  let sum = 230000;
  const extra = 50000;
  function Month(months){
    for(let i=1; i <= months; i++){
      sum += sum*0.35 
      console.log(i , sum);
    }
  }
  const handlesum = (e) => {
    console.log(e.target.innerHTML)
    navigator.vibrate(1000)
    Month(120)
  }

 const { values , handleChange } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Select source account</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              name='sourceAccount'
              value={values.sourceAccount}
              onChange={handleChange('sourceAccount')}
            >
              <MenuItem value="">
                <em>Select an account</em>
              </MenuItem>
              <MenuItem value='0734474102'>0734474102</MenuItem>
              <MenuItem value='0801490817'>0801490817</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="destinationAccount">Select destination account</InputLabel>
            <Select
              labelId="ddestinationAccount"
              id="destinationAccount"
              value={values.destinationAccount}
              onChange={handleChange('destinationAccount')}
            >
              <MenuItem value="">
                <em>Select an account</em>
              </MenuItem>
              <MenuItem value='0734474102'>0734474102</MenuItem>
              <MenuItem value='0801490817'>0801490817</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="amount"
            name="amount"
            label="Amount:"
            onChange={handleChange('amount')}
            value={values.amount}
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="Description:"
            onChange={handleChange('description')}
            value={values.description}
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
