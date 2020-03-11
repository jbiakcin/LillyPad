import React from 'react';
import BookingIndexItem from './booking_index_item';
import {withRouter} from 'react-router-dom';

class BookingIndex extends React.Component {
  // componentDidMount() {
  //   this.props.fetchUserBookings(this.props.currentUserId);
  // }

  render () {
    let {bookings} = this.props
    const {spots, deleteBooking, updateBooking} = this.props

    bookings = bookings.filter(booking => {
      return booking.hopper_id === this.props.currentUserId
    });
    // debugger;
    // if (spots.length === 0) {
    //   return null;
    // }
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