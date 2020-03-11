import React from 'react';
import {Link} from 'react-router-dom';

const BookingIndexItem = props => {
  const {booking, spots} = props;
  const spot = spots[booking.spot_id]
  // debugger;
  return (
    <li className="booking-req-ind" key={booking.id}>
      <Link to={`/bookings/${booking.id}`}>
        <div className="booking-index-item">
          <p className="booking-site-name">Request for: {spot.location_name}</p>
          <p>{booking.arrival_date} to { booking.departure_date }</p >
        </div>
      </Link>
    </li>
  );
}

export default BookingIndexItem;
