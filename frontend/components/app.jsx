import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'


import SplashContainer from '../components/splash/splash_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import DashBoardContainer from '../components/dashboard/dashboard_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SpotIndexContainer from '../components/spot/spot_index_container';
import SpotShowContainer from '../components/spot/spot_show_container';
import EditSpotFormContainer from '../components/spot/edit_spot_form_container';
import CreateSpotFormContainer from '../components/spot/create_spot_form_container';

const App = () =>(
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <ProtectedRoute path="/spots/:spotId/edit" component={EditSpotFormContainer}/>
      <ProtectedRoute path="/spots/:spotId" component={SpotShowContainer}/>
      <ProtectedRoute path="/spots/new" component={CreateSpotFormContainer}/>
      <ProtectedRoute path="/dashboard" component={DashBoardContainer}/>
      <ProtectedRoute path="/spots" component={SpotIndexContainer}/>
      <ProtectedRoute path="/" component={DashBoardContainer}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;