import React from 'react';
import {Link} from 'react-router-dom'
import DashboardHeader from '../dashboard/dashboard_header';

class BookingShow extends React.Component {

  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchBooking(this.props.match.params.bookingId)
  }

  componentDidUpdate(prevProps) {
    const currentId = this.props.match.params.bookingId;
    const prevId = prevProps.match.params.bookingId;

    if (currentId !== prevId) {
      this.props.fetchSpot(currentId);
    }
  }

  // handleClick(e) {
  //   e.preventDefault;
  // }

  render () {
    const booking = this.props.booking;

    if (!booking) {
      return (
        <h1>No Booking to Show!</h1>
      );
    }

    return (
      <main>
        <div><DashboardHeader logout={this.props.logout} /></div>
        <div>
          <header>
            <h1>Booking Details:</h1>
          </header>
          <div>
            <p>Arrival Date: {booking.arrival_date}</p>
            <p>Departure Date: {booking.departure_date}</p>
            <p>Number in group: {booking.num_travelers}</p>
          </div>
          <Link 
            to={`/bookings/${booking.id}/edit`} 
            className="update-booking-button">
              <p>Update Booking</p>
          </Link>
          <button 
            className="booking-cancel" 
            onClick={() => this.props.deleteBooking(this.props.booking.id)}>Cancel Booking
          </button>
          <br />
          <Link to="/" className="back-to-link">Back to all my bookings</Link>

        </div>
      </main>
    );
  }
}

export default BookingShow;