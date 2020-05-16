import {connect} from 'react-redux';
import ReviewIndex from './review_index';
import {fetchUserReviews, updateReview, deleteReview} from '../../actions/review_actions';

const mSP = state => {
  debugger;
  return {
    allReviews: Object.values(state.entities.reviews),
    allUsers: Object.values(state.entities.users),
    spot: Object.values(state.entities.spots)[0],
    currentUserId: state.session.id
  }
};

const mDP = dispatch => {
  return {
    fetchUserReviews: userId => dispatch(fetchUserReviews(userId)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
  }
};

export default connect (mSP, mDP)(ReviewIndex);