import React from 'react';
import ReviewForm from './review_form';
import {withRouter} from 'react-router-dom';

class EditReviewForm extends React.Component{

  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId)
  }

  render () {
    return (
      <ReviewForm/>
    )
  }

}

export default withRouter(EditReviewForm);