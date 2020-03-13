import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'


import SplashContainer from '../components/splash/splash_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import DashBoardContainer from '../components/dashboard/dashboard_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SpotIndexContainer from '../components/spot/spot_index_container';
import SpotShowContainer from '../components/spot/spot_show_container';
import EditBookingFormContainer from '../components/booking/edit_booking_form_container';
import CreateBookingFormContainer from '../components/booking/create_booking_form_container';
import BookingShowContainer from '../components/booking/booking_show_container';

const App = () =>(
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <ProtectedRoute path="/spots/:spotId/bookings/new" component={CreateBookingFormContainer}/>
      <ProtectedRoute path="/bookings/:bookingId/edit" component={EditBookingFormContainer}/>
      <ProtectedRoute path="/bookings/:bookingId" component={BookingShowContainer}/>
      <ProtectedRoute path="/spots/:spotId" component={SpotShowContainer}/>
      <ProtectedRoute path="/dashboard" component={DashBoardContainer}/>
      <ProtectedRoute path="/spots" component={SpotIndexContainer}/>
      <ProtectedRoute path="/" component={DashBoardContainer}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;