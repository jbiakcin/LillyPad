import {connect} from 'react-redux';
import ReviewForm from './review_form';
import {createReview} from '../../actions/review_actions';
import {fetchUser} from '../../actions/user_actions';

const mSP = ({entities, session, errors}, ownProps) => {
  return {
    currentUser: entities.users[session.id],
    spot: Object.values(entities.spots)[0],
    review: {
      content: ''
    },
    errors: errors.session,
    formType: 'SUBMIT'
  }
};

const mDP = dispatch => ({
  processForm: review => dispatch(createReview(review)),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSP, mDP)(ReviewForm);