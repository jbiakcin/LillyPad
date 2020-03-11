import React from 'react';
import {Link} from 'react-router-dom'
import DashboardHeader from '../dashboard/dashboard_header';

class BookingShow extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    e.preventDefault;
    this.props.deleteBooking(this.props.booking.id)
      .then(this.props.history.push('/dashboard'));
  }

  render () {
    const booking = this.props.booking;
    const currentUser = this.props.currentUser;
    
    if (!booking) {
      return (
        <h1>No Booking to Show!</h1>
        );
      }
    // const spot = this.props.spots[booking.spot_id]
    //   debugger;
    return (
      <main className="booking-show-main">
        <div><DashboardHeader logout={this.props.logout} /></div>
        <div className="booking-show-body">
          <div className="booking-show-detail">
            <header className="booking-detail-header">
              <h1>Booking Details for (will put spot info here once figured out):</h1>
            </header>
            <div className="booking-show-info">
              <p>Booking Request by: {currentUser.first_name} {currentUser.last_name}</p>
              <p>Arrival Date: {booking.arrival_date}</p>
              <p>Departure Date: {booking.departure_date}</p>
              <p>Number in group: {booking.num_travelers}</p>
              <p>Approval Status: {booking.status}</p>
            </div>
            <Link 
              to={`/bookings/${booking.id}/edit`} 
              className="update-booking-button">
                <p>Update Booking</p>
            </Link>
            <button 
              className="booking-cancel-button" 
              onClick={this.handleClick}>Cancel Booking
            </button>
            <br />
            <Link to="/" className="back-to-link">Back to all my bookings</Link>
          </div>
        </div>
      </main>
    );
  }
}

export default BookingShow;