import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const transfer = [
  { name: 'From Account', accountNum:'0801490817', price: 'N19,000' },
  { name: 'To Biller', accountNum:'MTN', price: 'MTN VTU' },
  { name: 'Mobile Number',  accountNum:'', price: '08168187018' },
  { name: 'Amount',  accountNum:'', price: '200.00' },
  { name: 'Narration', accountNum:'', price: 'For subscription' },
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
        verify your details
      </Typography>
      <List disablePadding>
        {transfer.map(money => (
          <ListItem className={classes.listItem} key={money.name}>
            <ListItemText primary={money.name} secondary={money.accountNum} />
            <Typography variant="body2">{money.price}</Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}