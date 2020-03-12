import {connect} from 'react-redux';
import SearchResults from './search_results';
import {findSpots} from '../../actions/search_actions';

const mSP = (state, ownProps) => {
  return {
    site: ownProps.match.params.site
  }
};

const mDP = dispatch => {
  return {
    findSpots: site => dispatch(findSpots(site))
  }
};

export default(mSP, mDP)(Search);