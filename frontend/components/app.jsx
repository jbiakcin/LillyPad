import React from 'react';
import {Route} from 'react-router-dom'

import SplashContainer from '../components/splash/splash_container';
import SignupFormContainer from './session_form/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () =>(
  <div>
    <h1>LillyPad</h1>
    <SplashContainer />

    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;