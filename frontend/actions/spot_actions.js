import * as SpotAPIUtil from '../util/spot_api_util';
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const REMOVE_SPOT = "REMOVE_SPOT";

const receiveSpots = payload => ({
  type: RECEIVE_SPOTS,
  spots: payload.spots,
  users: payload.users,
  bookings: payload.bookings
});

const receiveSpot = payload => ({
  type: RECEIVE_SPOT,
  spot: payload.spot,
  user: payload.user
});

const removeSpot = spotId => ({
  type: REMOVE_SPOT,
  spotId
});

export const fetchSpots = () => dispatch => (
  SpotAPIUtil.fetchSpots()
    .then(spots => dispatch(receiveSpots(spots)))
);

export const fetchSpot = spotId => dispatch => (
  SpotAPIUtil.fetchSpot(spotId)
    .then(spot => dispatch(receiveSpot(spot)))
);

export const createSpot = spot => dispatch => (
  SpotAPIUtil.createSpot(spot)
    .then(spot => dispatch(receiveSpot(spot)))
);

export const updateSpot = spot => dispatch => (
  SpotAPIUtil.updateSpot(spot)
    .then(spot => dispatch(receiveSpot(spot)))
);

export const deleteSpot = spotId => dispatch => (
  SpotAPIUtil.deleteSpot(spotId)
    .then(spot => dispatch(removeSpot(spotId)))
);