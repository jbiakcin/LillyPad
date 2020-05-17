import React from 'react';
import ReviewForm from './review_form';
import {withRouter, useParams} from 'react-router-dom';
import { deleteReview } from '../../util/review_api_util';

class EditReviewForm extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchReview(this.props.review.id);
    this.props.fetchAllReviews();
  }

  render () {
    let {review, processForm, updateReview, formType, spot, currentUser, deleteReview} = this.props;
    if (!review) return null;
    return (
      <ReviewForm
        review={review}
        updateReview={updateReview}
        formType={formType}
        processForm={processForm}
        spot={spot}
        currentUser={currentUser}
        deleteReview={deleteReview}
      />
    );
  }

}

export default withRouter(EditReviewForm);