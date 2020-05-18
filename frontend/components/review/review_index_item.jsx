import React from 'react';
import {Link} from 'react-router-dom';

const ReviewIndexItem = props => {
  const {review, allUsers, currentUserId} = props;
  let reviewer = allUsers.filter(user => user.id === review.reviewer_id)[0]

  let update;
  let who;
if (currentUserId === reviewer.id) {
  update = <div className="review-index-item-update">
    <Link to={`/reviews/${review.id}/edit`}><button className="review-index-item-edit">Edit / Delete</button></Link>
  </div>;
  who = <p>me</p >
} else {
  update = null;
  who = <p >{ reviewer.first_name } { reviewer.last_name }</p >;
}
  return (
    <div className="review-index-item">

      <div className="review-index-item-main">
        <div className="review-index-item-reviewer">
          <p>Reviewed by:</p>{who}
        </div>
        <p>{review.content}</p>
      </div>

      <div className="review-index-item-update-container">
        {update}
      </div>

    </div>
  )
}

export default ReviewIndexItem;

