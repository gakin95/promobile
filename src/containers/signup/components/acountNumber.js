import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter your account number
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
          <TextField
            required
            id="account_number"
            name="account_number"
            label="account number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="click to verify your account number"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
