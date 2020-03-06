import React from 'react';
import {Route, Switch} from 'react-router-dom'

import SplashContainer from '../components/splash/splash_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import DashBoardContainer from '../components/dashboard/dashboard_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SpotIndexContainer from '../components/spot/spot_index_container';

const App = () =>(
  <div>
    <Switch>
      <AuthRoute exact path="/signup" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <ProtectedRoute path="/dashboard" component={DashBoardContainer}/>
      <ProtectedRoute path="/" component={DashBoardContainer}/>
      <Route exact path="/spots" component={SpotIndexContainer}/>
    </Switch>
  </div>
);

export default App;