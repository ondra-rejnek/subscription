import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import SubscriptionForm from './components/SubscriptionForm';
import ThankYou from './components/ThankYou';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/form" component={SubscriptionForm} />
        <Route path="/thanks" component={ThankYou} />
      </Switch>
    </Router>
  );
}

export default App;
