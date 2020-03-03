import React from 'react';
import {Route, Switch} from 'react-router-dom'

import SplashContainer from '../components/splash/splash_container';
import SignupFormContainer from './session_form/signup_form_container';
import DashBoardContainer from '../components/dashboard/dashboard_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Home from '../components/home/home';

const App = () =>(
  <div>
    <h1>LillyPad</h1>
    <Switch>
      <AuthRoute path="/signup" component={SplashContainer} />
      <ProtectedRoute path="/dashboard" component={DashBoardContainer}/>
      <ProtectedRoute path="/" component={DashBoardContainer} />
    </Switch>
  </div>
);

export default App;