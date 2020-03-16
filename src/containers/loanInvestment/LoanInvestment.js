import React from 'react';
import clsx from 'clsx';
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Naira from 'react-naira'


import AppContainer from '../../component/Dashboard';
import CustomButton from '../../component/button'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);



const useStyles = makeStyles(theme => ({
  Title:{
    width:'95%',
    margin:'2% auto',
    '& h6': {
      color: theme.palette.primary.main,
      padding:12
    },
  },
  Table:{
    width:'95%',
    margin:'2% auto',
    '& h6': {
      color: theme.palette.primary.text,
      padding:12
    },
  },
  Input:{
    paddingLeft:12
  },
  InputSubmit:{
    paddingRight:12,
    float:'right'
  },
  Circular : {
    margin: '0px 50%'
  },
  tableContainer:{
    paddingBottom:40
  },
  table: {
    minWidth: 700,
  },
  Status: {
    color: theme.palette.primary.main ,
  },
  Success:{
    color:theme.palette.success.main
  }
}))
const LoanInvestment= (props) => {
  const [state, setState] = React.useState([
    {id:'dfgggg',amount:'10000', tenor:'4 Months', account:'3063800039', date:'Fri Mar 06 2020 12:14:38', status:'Approved', approved:true},
    {id:'dfggfusgg',amount:'34000', tenor:'4 Months', account:'3063800039', date:'Fri Mar 06 2020 12:14:38', status:'Pending', approved:false},
    {id:'dfggyuugg',amount:'123000', tenor:'4 Months', account:'3063800039', date:'Fri Mar 06 2020 12:14:38', status:'Pending', approved:false},
  ]);
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      props.history.push('/calculator')
    }, 1000);
  }
  return (
    <AppContainer >
      <Paper className={classes.Title}>
        <Typography variant='h6'>LOAN REQUEST</Typography>
      </Paper>
      <Paper className={classes.Table}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} >
          <div className={classes.Input}>
          <TextField id="filled-search" label="Search Loan Request" type="search "  />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.InputSubmit}>
            <CustomButton name='APPLY FOR LOAN' Click={handleClick}/>
          </div> 
        </Grid>
        <Grid item xs={12}>
        <Typography component="h1" variant="h5" className={classes.Circular}>
            {loading && <CircularProgress disableShrink />}
        </Typography>
        </Grid>
        <Grid item xs={12} >
        <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell align="right">Tenor</StyledTableCell>
            <StyledTableCell align="right">Account</StyledTableCell>
            <StyledTableCell align="right">Date Applied</StyledTableCell>
            <StyledTableCell align="right" >Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
              <Naira>{row.amount}</Naira>
              </StyledTableCell>
              <StyledTableCell align="right">{row.tenor}</StyledTableCell>
              <StyledTableCell align="right">{row.account}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
          <StyledTableCell align="right" className={clsx(classes.Status, row.approved && classes.Success)}>{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
      </Paper>
    </AppContainer>
  )
}

export default LoanInvestment
