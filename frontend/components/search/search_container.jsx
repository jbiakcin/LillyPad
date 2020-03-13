import {connect} from 'react-redux';
import SearchResults from './search_results';
import {findSpots, clearSearchSpots} from '../../actions/search_actions';
import {logout} from '../../actions/session_actions';

const mSP = (state, ownProps) => {
  // debugger;
  let spots;
  if (state.entities.search.spots) {
    spots = Object.values(state.entities.search.spots);
  } else {
    spots =[];
  }
  
  return {
    spots
  }
};

const mDP = dispatch => {
  return {
    findSpots: site => dispatch(findSpots(site)),
    logout: () => dispatch(logout()),
    clearSearchSpots: () => dispatch(clearSearchSpots())
  }
};

export default connect(mSP, mDP)(SearchResults);