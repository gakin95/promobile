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
import Transfer from './containers/transfer/transfer'
import Investment from './containers/investment/Investment';
import Bills from './containers/bills/bills';
import AirTime from './containers/bills/components/airTimeTopUp/AirTime';
import Utility from './containers/bills/components/utilities/utilites';
import LoanCalculator from './containers/loanInvestment/components/LoanCalculor';
import ApplyLoan from './containers/loanInvestment/components/ApplyLoan';
import InvestmentCalculator from './containers/investment/components/InvestmentCalculor';
import ApplyInvestment from './containers/investment/components/ApplyInvestment';

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
          <Route path="/transfer" component={Transfer} />
          <Route path="/ownaccount" component={OwnAccount} />
          <Route path="/internationaltf" component={InternationalTransfer} />
          <Route path="/otherbanks" component={TransferToOtherBanks} />
          <Route path="/withinbank" component={WithinTheBank} />
          <Route path="/loaninvestment" component={LoanInvestment} />
          <Route path='/calculator' component={LoanCalculator}/>
          <Route path='/applyloan' component={ApplyLoan}/>
          <Route path="/investment" component={Investment} />
          <Route path="/cardrequest" component={CardRequest} />
          <Route path='/invcalculator' component={InvestmentCalculator}/>
          <Route path='/applyinvestment' component={ApplyInvestment}/>
          <Route path='/bills' component={Bills} />
          <Route path='/airtime' component={AirTime} />
          <Route path='/utilities' component={Utility} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
