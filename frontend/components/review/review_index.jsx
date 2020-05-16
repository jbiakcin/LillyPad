import React from 'react';
import ReviewIndexItem from './review_index_item';
import {withRouter} from 'react-router-dom';

class ReviewIndex extends React.Component {

  render() {
    debugger;
    let deleteReview = this.props.deleteReview;
    let spot = this.props.spot;
    let allReviews = this.props.allReviews;
    let allUsers = this.props.allUsers;
    let spotReviews = allReviews.filter(review => review.spot_id === spot.id);
    let reviews;
    let currentUserId = this.props.currentUserId;

    if (spotReviews) {
      reviews = <ul className="reviews-ul">
        {spotReviews.map((review, i) => (
          <li key={`review-${i}`}>
            <ReviewIndexItem spot={spot} review={review} currentUserId={currentUserId} allUsers={allUsers} deleteReview={deleteReview}/>
          </li>
        ))}
      </ul>

    } else {
      reviews = <p>No reviews for this spot yet.</p>
    }

    return (
      <div className="spot-review-index">
        {reviews}
      </div>
    )
  }
}

export default ReviewIndex;