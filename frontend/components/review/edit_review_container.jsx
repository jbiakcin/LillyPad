import {connect} from 'react-redux';
import {fetchReview, updateReview, fetchAllReviews, deleteReview} from '../../actions/review_actions';
import EditReviewForm from './edit_review_form';

const mSP = (state, ownProps) => {
  const reviewId = ownProps.match.params.reviewId;
  const review = state.entities.reviews[reviewId];
  debugger;
  let spot;
  let currentUser;
  if (review) {
    spot = state.entities.spots[review.spot_id];
    currentUser = state.entities.users[review.reviewer_id];
  } else {
    spot = null;
    currentUser = null;
  }
  return {
    spot,
    review,
    currentUser,
    formType: 'Update'
  }
};

const mDP = dispatch => ({
  processForm: review => dispatch(updateReview(review)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  fetchAllReviews: () => dispatch(fetchAllReviews()),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mSP, mDP)(EditReviewForm);