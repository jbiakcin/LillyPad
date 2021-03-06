export const fetchAllReviews = () => (
  $.ajax({
    url: `/api/reviews`,
    method: `GET`
  })
);

export const fetchReview = (reviewId) => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: `GET`
  })
);

export const fetchUserReviews = () => (
  $.ajax({
    url: `/api/users/${userId}/reviews`,
    method: 'GET'
  })
);

export const createReview = review => (
  $.ajax({
    url: `/api/spots/${review.spot_id}/reviews`,
    method: `POST`,
    data: {review}
  })
);

export const updateReview = review => (
  $.ajax({
    url: `/api/reviews/${review.id}`,
    method: `PATCH`,
    data: {review}
  })
);

export const deleteReview = reviewId => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: `DELETE`
  })
);