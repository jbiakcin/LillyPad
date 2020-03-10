import React from 'react';
import {Link} from 'react-router-dom';

const BookingIndexItem = props => {
  return (
    <li>
      <Link to={`/bookings/${props.booking.id}`}>
        <div>
          {props.booking.id}
        </div>
      </Link>
    </li>
  );
}

export default BookingIndexItem;