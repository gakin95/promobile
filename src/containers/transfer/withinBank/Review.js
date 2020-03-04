import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const transfer = [
  { name: 'Gbenga Akingbulere',bank:'Access Bank', price: 'N23,0000' , desc: 'school fees'},
 
];


const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        verify the account
      </Typography>
      <Grid container>
      {
        transfer.map(item => (
          <div>
          <Grid item xs={12}>
          <Typography variant="small">
            Name : {item.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="small">
            Bank : {item.bank}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="small">
            Price : {item.price}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="small">
            Description : {item.desc}
          </Typography>
        </Grid>
        </div>
        ))
      }
      </Grid>
    </React.Fragment>
  );
}