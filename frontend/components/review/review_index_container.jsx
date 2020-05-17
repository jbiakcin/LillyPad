import {connect} from 'react-redux';
import ReviewIndex from './review_index';
import {fetchUserReviews, updateReview, deleteReview, fetchAllReviews} from '../../actions/review_actions';

const mSP = (state, props) => {
  return {
    allReviews: Object.values(state.entities.reviews),
    allUsers: Object.values(state.entities.users),
    spot: props.spot,
    currentUserId: props.currentUserId
  }
};

const mDP = dispatch => {
  return {
    fetchUserReviews: userId => dispatch(fetchUserReviews(userId)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    fetchAllReviews: () => dispatch(fetchAllReviews())
  }
};

export default connect (mSP, mDP)(ReviewIndex);