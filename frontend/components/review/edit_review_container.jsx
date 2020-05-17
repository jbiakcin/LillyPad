import {connect} from 'react-redux';
import {fetchReview, updateReview, fetchAllReviews} from '../../actions/review_actions';
import EditReviewForm from './edit_review_form';

const mSP = (state, ownProps) => {
  return {
    reviewId: ownProps.match.params.reviewId,
    formType: 'UPDATE'
  }
};

const mDP = dispatch => ({
  processForm: review => dispatch(updateReview(review)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  updateReview: review => dispatch(updateReview(review)),
  fetchAllReviews: () => dispatch(fetchAllReviews())
});

export default connect(mSP, mDP)(EditReviewForm);