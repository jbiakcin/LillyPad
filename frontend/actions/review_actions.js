import * as ReviewAPIUtil from '../util/review_api_util';
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReviews = payload => {
  return {
    type: RECEIVE_REVIEWS,
    reviews: payload.reviews,
    spots: payload.spots
  }
};

const receiveReview = payload => ({
  type: RECEIVE_REVIEW,
  review: payload.review,
  spot: payload.spot
});

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const fetchAllReviews = () => dispatch => (
  ReviewAPIUtil.fetchAllReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchUserReviews = (userId) => dispatch => (
  ReviewAPIUtil.fetchUserReviews(userId)
    .then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = reviewId => dispatch => (
  ReviewAPIUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => (
  ReviewAPIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const updateReview = review => dispatch => (
  ReviewAPIUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = reviewId => dispatch => (
  ReviewAPIUtil.deleteReview(reviewId)
    .then(review => dispatch(removeReview(reviewId)))
)