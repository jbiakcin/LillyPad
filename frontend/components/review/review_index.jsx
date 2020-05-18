import React from 'react';
import ReviewIndexItem from './review_index_item';
import {withRouter} from 'react-router-dom';

class ReviewIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllReviews();
  }

  render() {
    let spot = this.props.spot;
    let allReviews = this.props.allReviews;
    let allUsers = this.props.allUsers;
    let updateReview = this.props.updateReview;
    let currentUserId = this.props.currentUserId;
    let spotReviews = allReviews.filter(review => review.spot_id === spot.id);
    
    let reviews;
    if (spotReviews.length > 0) {
      reviews = <ul className="reviews-ul">
        {spotReviews.map((review, i) => (
          <li key={`review-${i}`}>
            <ReviewIndexItem spot={spot} review={review} allUsers={allUsers} updateReview={updateReview} currentUserId={currentUserId}/>
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

export default withRouter(ReviewIndex);