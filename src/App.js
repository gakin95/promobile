import React from 'react';
import Navbar from './containers/navbar/Navbar';
import Signin from './containers/signin/Signin';
import Signup from './containers/signup/signup';
import Home from './containers/home/home';
import Account from './containers/account/Account'
import CardRequest from './containers/cardRequest/CardRequest';
import  QuickLinks from "./containers/quicklinks/QuickLinks";
import OwnAccount from "./containers/transfer/OwnAccount";
import InternationalTransfer from './containers/transfer/InternationalTransfer';
import TransferToOtherBanks from './containers/transfer/TransferToOtherBanks';
import WithinTheBank from './containers/transfer/WithinTheBank'; 
import LoanInvestment from "./containers/loanInvestment/LoanInvestment";
import Investment from './containers/investment/Investment'

import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Signin}/>
          <Route path="/signup" component={Signup} />
          <Route path="/quicklinks" component={QuickLinks} />
          <Route path="/account" component={Account} />
          <Route path="/ownaccount" component={OwnAccount} />
          <Route path="/internationaltf" component={InternationalTransfer} />
          <Route path="/otherbanks" component={TransferToOtherBanks} />
          <Route path="/withinbank" component={WithinTheBank} />
          <Route path="/loaninvestment" component={LoanInvestment} />
          <Route path="/investment" component={Investment} />
          <Route path="/cardrequest" component={CardRequest} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
