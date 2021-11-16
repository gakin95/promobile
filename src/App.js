import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch ,withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './component/asyncComponent';

import Navbar from './containers/navbar/Navbar';
import Signin from './containers/signin/Signin';
import Logout from './containers/signin/logout';
import Signup from './containers/signup/signup';
import Sign from './containers/signup/components/acc';
import mailVerifcationSent from './containers/mailVerification/mailVerificationSent';
import EmailVerification  from './containers/mailVerification/mailVerifaction';
import Home from './containers/home/home';
import Account from './containers/account/Account'
import CardRequest from './containers/cardRequest/CardRequest';
import  QuickLinks from "./containers/quicklinks/QuickLinks";
import OwnAccount from "./containers/transfer/OwnAccount";
import InternationalTransfer from './containers/transfer/InternationalTransfer';
import TransferToOtherBanks from './containers/transfer/TransferToOtherBanks';
import WithinTheBank from './containers/transfer/WithinTheBank'; 
import LoanInvestment from "./containers/loanInvestment/LoanInvestment";
import Transfer from './containers/transfer/transfer'
import Investment from './containers/investment/Investment';
import Bills from './containers/bills/bills';
import AirTime from './containers/bills/components/airTimeTopUp/AirTime';
import Utility from './containers/bills/components/utilities/utilites';
import LoanCalculator from './containers/loanInvestment/components/LoanCalculor';
import ApplyLoan from './containers/loanInvestment/components/ApplyLoan';
import InvestmentCalculator from './containers/investment/components/InvestmentCalculor';
import ApplyInvestment from './containers/investment/components/ApplyInvestment';
import LifeStyles from './containers/lifestyles/lifestyle';
import Movies from './containers/lifestyles/components/movies'
import MoviesId from './containers/lifestyles/components/moviesId'
import MovieTicket from './containers/lifestyles/components/order';
import AgGrid from './agGrid';
import Payment from './payment'

import * as actions from './store/actions/index';

const asyncMovies = asyncComponent(() => {
  return import('./containers/lifestyles/components/movies');
})

const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignIn();
  });
  const token = localStorage.getItem('token');
  let routes = (
    <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/ag' component={AgGrid} />
          <Route path='/payment' component={Payment} />
          <Route path="/login" component={Signin}/>
          <Route path="/signup" component={Signup} />
          <Route path="/sign" component={Sign} />
          <Route path='/verifymail' component={mailVerifcationSent} />
          <Route path='/success' component={EmailVerification } />
          <Redirect to='/'/>
    </Switch>
  );
  if (token) {
    routes = (
      <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/quicklinks" component={QuickLinks} />        
          <Route path="/account" component={Account} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/ownaccount" component={OwnAccount} />
          <Route path="/internationaltf" component={InternationalTransfer} />
          <Route path="/otherbanks" component={TransferToOtherBanks} />
          <Route path="/withinbank" component={WithinTheBank} />
          <Route exact path="/loaninvestment" component={LoanInvestment} />
          <Route path='/calculator' component={LoanCalculator}/>
          <Route path='/applyloan' component={ApplyLoan}/>
          <Route path="/investment" component={Investment} />
          <Route path="/cardrequest" component={CardRequest} />
          <Route path='/invcalculator' component={InvestmentCalculator}/>
          <Route path='/applyinvestment' component={ApplyInvestment}/>
          <Route path='/bills' component={Bills} />
          <Route path='/airtime' component={AirTime} />
          <Route path='/utilities' component={Utility} />
          <Route path='/lifestyles' component={LifeStyles} />
          <Route path='/movies' component={asyncMovies } />
          <Route exact path="/moviesId/:id" component={MoviesId} />
          <Route exact path="/order/:id" component={MovieTicket} />
          <Redirect to='/quicklinks'/>
      </Switch>
    );
  }
  console.log(props.isAuthenticated);
  return (
    <div>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated : state.login.token !== null
  }
};

const mapDispatchToProps = dispatch  => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState())
  }
}


export default (connect(mapStateToProps, mapDispatchToProps)(App));
