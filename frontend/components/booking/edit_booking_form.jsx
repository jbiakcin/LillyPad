import React from 'react';
import BookingForm from './booking_form';
import {withRouter} from 'react-router-dom';

class EditBookingForm extends React.Component {
  componentDidMount() {
    // debugger;
    this.props.fetchBooking(this.props.match.params.bookingId)
  }

  render () {
    const {booking, updateBooking, formType} = this.props;
    if (!booking) return null;
    // debugger;
    return (
      <BookingForm booking={booking} updateBooking={updateBooking} formType={formType} />
    );
  }
}

export default withRouter(EditBookingForm);