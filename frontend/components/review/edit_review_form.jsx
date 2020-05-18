import React from 'react';
import ReviewForm from './review_form';
import {withRouter} from 'react-router-dom';

class EditReviewForm extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllReviews()
    .then(() =>this.props.fetchReview(this.props.review.id));
    debugger;
  }

  render () {
    let {review, processForm, updateReview, formType, spot, currentUser, deleteReview} = this.props;
    if (!review) return null;
    return (
      <div className="review-modal">
        <div className="edit-review-container">
          <ReviewForm
            review={review}
            updateReview={updateReview}
            formType={formType}
            processForm={processForm}
            spot={spot}
            currentUser={currentUser}
            deleteReview={deleteReview}
          />
        </div>
      </div>
    );
  }

}

export default withRouter(EditReviewForm);