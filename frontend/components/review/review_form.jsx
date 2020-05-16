import React from 'react';
import {withRouter} from 'react-router-dom';
import { updateBooking } from '../../util/booking_api_util';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state)
    review.spot_id = this.props.spot.id;
    review.reviewer_id = this.props.currentUser.id
    this.props.processForm(review)
      .then(() => this.props.history.push(`/dashboard`));
  }

  render () {
    let spot = this.props.spot;
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
      </form>
    )
  }
}

export default withRouter(ReviewForm);


{/* <button onClick={this.props.hideModal} className="cancel-review" >CANCEL</button>
  <br /> */}
