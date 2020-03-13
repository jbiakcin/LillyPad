import * as SearchAPIUtil from '../util/search_api.util';
export const RECEIVE_SEARCH_SPOTS = "RECEIVE_SEARCH_SPOTS";
export const CLEAR_SEARCH_SPOTS = "CLEAR_SEARCH_SPOTS";

export const receiveSearchSpots = (spots) => {
  return {
    type: RECEIVE_SEARCH_SPOTS,
    spots
  }
}

export const clearSearchSpots = () => {
  return {
    type: CLEAR_SEARCH_SPOTS
  }
}

export const findSpots = (site) => dispatch => (
  SearchAPIUtil.findSpots(site)
    .then(spots => dispatch(receiveSearchSpots(spots)))
)