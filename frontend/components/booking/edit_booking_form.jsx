import React from 'react';
import BookingForm from './booking_form';
import {withRouter} from 'react-router-dom';
import moment from 'moment'

class EditBookingForm extends React.Component {
  componentDidMount() {
    this.props.fetchBooking(this.props.match.params.bookingId)
  }

  render () {
    let {booking, processForm, updateBooking, formType} = this.props;
    if (!booking) return null;
    booking = Object.assign({}, booking);
    booking.arrival_date = moment(booking.arrival_date);
    booking.departure_date = moment(booking.departure_date);
    return (
      <BookingForm 
        booking={booking} 
        updateBooking={updateBooking} 
        formType={formType}
        processForm={processForm}
        />
    );
  }
}

export default withRouter(EditBookingForm);