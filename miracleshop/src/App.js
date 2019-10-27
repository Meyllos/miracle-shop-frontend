import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css';
import Homepage from './components/landingPage/homepage';
import Login from './components/authPage/login';
import Signup from './components/authPage/signup';
import ForgetPassword from './components/authPage/forget-password';
import ResetPassword from './components/authPage/reset-password';
import SingleItem from './view/singleItem';

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot-password" component={ForgetPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/item/:humberger" component={SingleItem} />
      </Switch>
    </Router>
    
    </>
  );
};
export default App;
