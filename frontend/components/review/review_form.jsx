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
    review.reviewer_id = this.props.currentUser.id;
    if (this.props.formType === "Submit") {
      this.props.processForm(review)
        .then(() => this.props.hideModal());
    } else {
      this.props.processForm(review)
        .then(() => this.props.history.push(`/spots/${spotId}`));
    }
  }

  render () {
    let spot = this.props.spot;
    let buttons;
    if(this.props.formType === "Update") {
      buttons = <div className="review-update-button-container">
        <button type="submit" className="review-form-update-button">{this.props.formType}</button>
        <button onClick={this.handleDelete} className="review-form-update-button">Delete</button>
      </div>
    } else {
      buttons = <div className="review-submit-button-container">
        <button type="submit" className="review-form-submit-button">{this.props.formType}</button>
      </div>
    }

    let xMark;
    if (this.props.formType === "Submit") {
      xMark = <span className="x" onClick={this.props.hideModal}>&times;</span>;
    } else {
      xMark = <span className="x" onClick={() => this.props.history.push(`/spots/${spot.id}`)}>&times;</span>;
    }


    return (
      <form onSubmit={this.handleSubmit} className="review-form">
        {xMark}
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

        {buttons}
      </form>
    )
  }
}

export default withRouter(ReviewForm);
