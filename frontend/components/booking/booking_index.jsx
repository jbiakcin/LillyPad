import React from 'react';
import BookingIndexItem from './booking_index_item';
import {withRouter} from 'react-router-dom';

class BookingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserBookings();
  }

  render () {
    const {bookings, deleteBooking, updateBooking} = this.props
    debugger;
    return (
      <div>
        <h2>MY BOOKING REQUESTS:</h2>
        <ul>
          {bookings.map(booking=>
            <BookingIndexItem
              booking={booking}
              key={booking.id}
              deleteBooking={deleteBooking}
              updateBooking={updateBooking}
            />
          )}
        </ul>
      </div>

    );
  }
}

export default withRouter(BookingIndex)