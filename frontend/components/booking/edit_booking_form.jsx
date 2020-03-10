import React from 'react';
import BookingForm from './booking_form';
import {withRouter} from 'react-router-dom';

class EditBookingForm extends React.Component {
  componentDidMount() {
    this.props.fetchBooking(this.props.params.bookingId)
  }

  render () {
    const {booking, updateBooking} = this.props;
    if (!booking) return null;

    return (
      <BookingForm booking={booking} updateBooking={updateBooking} />
    );
  }
}

export default withRouter(EditBookingForm);