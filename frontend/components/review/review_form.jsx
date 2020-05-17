import React from 'react';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }


  handleDelete(e) {
    e.preventDefault;
    const reviewId = this.props.review.id;
    const spotId = this.props.spot.id;
    this.props.deleteReview(reviewId)
      .then(() => this.props.history.push(`/spots/${spotId}`))
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state)
    const spotId = this.props.spot.id;
    review.spot_id = spotId;
    review.reviewer_id = this.props.currentUser.id
    this.props.processForm(review)
      .then(() => this.props.history.push(`/spots/${spotId}`))
  }

  render () {
    let spot = this.props.spot;
    let cancel;
    if(this.props.formType === "Update") {
      cancel = <button onClick={this.handleDelete}>Delete</button>
    } else {
      cancel = null;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Review for {spot.location_name}</h4>
        <textarea
          id="spot-review"
          value={this.state.content}
          rows="15"
          cols="75"
          onChange={this.update(`content`)}
          placeholder="Give us your review on this spot."
          required
        />
        <div className="review-form-submit">
          <button type="submit" className="review-form-submit-button">{this.props.formType}</button>
        </div>

        <div>
          {cancel}
        </div>
      </form>
    )
  }
}

export default withRouter(ReviewForm);
