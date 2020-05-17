import React from 'react';
import {Link} from 'react-router-dom';

const ReviewIndexItem = props => {
  const {review, allUsers, currentUserId} = props;
  let reviewer = allUsers.filter(user => user.id === review.reviewer_id)[0]


  let update;
if (currentUserId === reviewer.id) {
  update = <div className="review-index-item-update">
    <Link to={`/reviews/${review.id}/edit`}><button className="review-index-item-edit">Edit</button></Link>
    {/* <button className="review-index-item-delete" onClick={deleteReview(review.id)}>Delete</button> */}
  </div>
} else {
  update = null;
}
  return (
    <div>

      <div className="review-index-item-main">
        <p>Reviewed by: {reviewer.first_name} {reviewer.last_name}</p>
        <p>{review.content}</p>
      </div>

      <div>
        {update}
      </div>

    </div>
  )
}

export default ReviewIndexItem;

