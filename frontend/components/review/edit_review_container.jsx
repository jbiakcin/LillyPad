import {connect} from 'react-redux';
import {fetchReview, updateReview} from '../../actions/review_actions';
import EditReviewForm from './edit_review_form';

const mSP = (state, ownProps) => {
  return {
    review: ownProps.review,
    formType: 'UPDATE'
  }
};

const mDP = dispatch => ({
  processForm: review => dispatch(updateReview(review)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  updateReview: review => dispatch(updateReview(review))
});

export default connect(mSP, mDP)(EditReviewForm);