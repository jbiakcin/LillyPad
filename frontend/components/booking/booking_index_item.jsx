import React from 'react';
import {Link} from 'react-router-dom';

const BookingIndexItem = props => {
  const {booking, spots} = props;
  const spot = spots[booking.spot_id]

  return (
    <li className="booking-req-ind" key={booking.id}>
      <Link to={`/bookings/${booking.id}`} spot={spot}>
        <div className="booking-index-item">
          <div className="booking-index-info">
            <p className="booking-site-name">Request for: {spot.location_name}</p>
            <p>{booking.arrival_date} to { booking.departure_date }</p >
          </div>
          <div className="booking-ind-app-status">
            Approval status: {booking.status}
          </div>
        </div>

      </Link>
    </li>
  );
}

export default BookingIndexItem;
