import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {fetchBookings, fetchBooking} from './actions/booking_actions';
import {fetchUsers} from './actions/user_actions';

document.addEventListener('DOMContentLoaded', ()=>{
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        id: window.currentUser.id
      }
    }
  }
  
  const store = configureStore(preloadedState);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchBookings = fetchBookings;
  window.fetchUsers = fetchUsers;
  window.fetchBooking = fetchBooking;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});