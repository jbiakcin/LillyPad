import React from 'react';
import BookingIndexItem from './booking_index_item';
import {withRouter} from 'react-router-dom';

class BookingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserBookings();
  }

  render () {
    const {spots, bookings, deleteBooking, updateBooking} = this.props
    // debugger;
    return (
      <div className="dashboard-booking-index">
        <h2><i className="far fa-list-alt"></i>&nbsp;&nbsp;MY BOOKING REQUESTS:</h2>
        <ul className="dashboard-booking-list">
          {bookings.map(booking=>
            <BookingIndexItem
              booking={booking}
              key={booking.id}
              deleteBooking={deleteBooking}
              updateBooking={updateBooking}
              spots={spots}
            />
          )}
        </ul>
      </div>

    );
  }
}

export default withRouter(BookingIndex)