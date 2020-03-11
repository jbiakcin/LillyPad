import React from 'react';
import BookingForm from './booking_form';
import {withRouter} from 'react-router-dom';
import moment from 'moment'

class EditBookingForm extends React.Component {
  componentDidMount() {
    // debugger;
    this.props.fetchBooking(this.props.match.params.bookingId)
  }

  render () {
    let {booking, updateBooking, formType} = this.props;
    if (!booking) return null;
    booking = Object.assign({}, booking);
    booking.arrival_date = moment(booking.arrival_date);
    booking.departure_date = moment(booking.departure_date);
    // debugger;
    return (
      <BookingForm booking={booking} updateBooking={updateBooking} formType={formType} />
    );
  }
}

export default withRouter(EditBookingForm);