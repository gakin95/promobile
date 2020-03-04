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
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles(theme => ({

  formControl: {
    width:'100%',
    minWidth: 120,
  },
  float: {
    float:'right'
  }
}));

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


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

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <FormGroup className={classes.float}> 
      <FormControlLabel
        control={
          <IOSSwitch
            checked={switche.checkedB}
            onChange={handleChangeSwitch('checkedB')}
            value="checkedB"
          />
        }
        label="Use saved beneficiary"
      />
    </FormGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Beneficiary Bank</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={state.selectA}
              onChange={handleChange('selectA')}
            >
              <MenuItem value="">
                <em>Select a field</em>
              </MenuItem>
              <MenuItem value='Fees paid by sender'>Fees paid by sender</MenuItem>
              <MenuItem value='Fees paid by sender'>Fees paid by sender</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="account"
            name="account"
            onChange ={handleChange('name')}
            label="From Account:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="beneficiary_name"
            name="beneficiary_name"
            onChange ={handleChange('name')}
            label="TO Beneficiary :"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Select source account</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper-label"
              value={state.selectB}
              onChange={handleChange('selectB')}
            >
              <MenuItem value="">
                <em>Select a bank</em>
              </MenuItem>
              <MenuItem value='Union bank'>Union bank</MenuItem>
              <MenuItem value='Access bank'>Access bank</MenuItem>
              <MenuItem value='First Bank'>First Bank</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="purpose"
            name="purpose"
            label="Purpose for Transfer:"
            fullWidth
          />
          </Grid>
          
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="intermediary_bank_name"
            name="intermediary_bank_name"
            onChange ={handleChange('name')}
            label="Intermediary bank name:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
            required
            id="intermediary_bank_swift_code"
            name="intermediary_bank_swift_code"
            onChange ={handleChange('name')}
            label="Intermediary bank Swift Code/BIC:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
            required
            id="intermediary_bank_routing"
            name="intermediary_bank_routing"
            label="Intermediary bank Routing/Account Number:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobile_num"
            name="mobile_num"
            label="Mobile number:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="additional_data"
            name="additional_data"
            label="Additional data:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pin"
            name="pin"
            label="Pin:"
            fullWidth
          />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveBeneficiary" value="yes" />}
              label="Save beneficiary"
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
