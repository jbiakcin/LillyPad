import {combineReducers} from 'redux';

import UsersReducer from './users_reducer';
import SpotsReducer from './spots_reducer';
import BookingsReducer from './bookings_reducer';
import SearchReducer from './search-reducer';
import ReviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers ({
  users: UsersReducer,
  spots: SpotsReducer,
  bookings: BookingsReducer,
  search: SearchReducer,
  reviews: ReviewsReducer
});

export default entitiesReducer;