import React from 'react';
import ReviewForm from './review_form';
import {withRouter} from 'react-router-dom';

class EditReviewForm extends React.Component{

  componentWillMount() {
    this.props.fetchReview(this.props.reviewId);
    this.props.fetchAllReviews();
  }
  // componentDidMount() {
  //   this.props.fetchReview(this.props.reviewId);
  //   this.props.fetchAllReviews();
  // }

  render () {
    
    let {reviewId, processForm, updateReview, formType} = this.props;
    if (!reviewId) return null;

    debugger;
    return (
      null
      // <ReviewForm
      //   review={review}
      //   updateReview={updateReview}
      //   formType={formType}
      //   processForm={processForm}
      // />
    );
  }

}

export default withRouter(EditReviewForm);