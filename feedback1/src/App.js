import React from 'react';
import './App.css'
import '../src/assets/css/material-dashboard-rtl.css';
import '../src/assets/css/material-dashboard.css';
import * as FirestoreService from './firebase';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import dashboard from './components/dashboard.js';
import profile from './components/profile.js';
import login from './components/login.js';
import ContactUs from './components/ContactUs'; 
//<Route exact path="/" component={dashboard} />
    
function App() {
    FirestoreService.getProfessorFeedback("Jorjeta Jetcheva");
    FirestoreService.getResponses('additionalInfoForFinal');
    if(JSON.parse(localStorage.getItem("data")) == null)
    {
      App();
    }
    else
    {
  return (
      <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
          <Route exact path="/dashboard" component={dashboard} />
          <Route exact path="/profile" component={profile} />
          <Route exact path="/ContactUs" component={ContactUs} />
        </Switch>
      </Router>
      </div>
   
  );
}
}

export default App;