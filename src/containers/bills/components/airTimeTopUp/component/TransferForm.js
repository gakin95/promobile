import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Autocomplete from '@material-ui/lab/Autocomplete';



const useStyles = makeStyles(theme => ({

  formControl: {
    width:'100%',
    minWidth: 120,
  },
}));

const networkProviders = [
  { title: 'Mtn' },
  { title: '9Mobile'},
  { title: 'AirTEL'},
  { title: 'Glo' },
  { title: 'Visfone'},
  { title: 'Starcomms'},
  { title: 'Ntel Recharge'},
  
];



export default function TransferForm() {
  const classes = useStyles();
  const defaultProps = {
    options: networkProviders,
    getOptionLabel: option => option.title,
  };
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
          <Autocomplete
              {...defaultProps}
              id="debug"
              debug
              renderInput={params => <TextField {...params} label="Select biller and product" margin="normal" />}
            />
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
            id="num"
            name="num"
            label="Phone number:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="naration"
            name="naration"
            label="Narration:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Set as standing order?"
            />
          </Grid>
      </Grid>
    </React.Fragment>
  );
}
