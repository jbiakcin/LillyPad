import React from 'react';
import {Link} from 'react-router-dom'
import DashboardHeader from '../dashboard/dashboard_header';
import EditBookingContainer from './edit_booking_form_container';

class BookingShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {edit: false}
    this.handleClick = this.handleClick.bind(this);
    this.editBooking = this.editBooking.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  editBooking () {
    this.setState({edit: true})
  }

  cancelEdit () {
    this.setState({edit: false})
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
    // debugger;
    // const spot = this.props.spot;
    
    if (!booking) {
      return (
        <h1>No Booking to Show!</h1>
        );
      }
  
      // debugger;
    return (
      <main className="booking-show-main">
        <div><DashboardHeader logout={this.props.logout} /></div>
        <div className="booking-show-body">
          <div className="booking-show-detail">
            <header className="booking-detail-header">
              <h1>Booking Details for {this.props.spot.location_name}</h1>
            </header>
            <div className="booking-show-info">
              <div className="section-one">
                <p className="req-by">Booking request by: {currentUser.first_name} {currentUser.last_name}</p>
                <p className="approval-status">Approval status: {booking.status}</p>
              </div>
              <div className="section-two">
                <div className="dates-div">
                  <p>Arrival date: {booking.arrival_date}</p>
                  <p>></p>
                  <p>Departure date: {booking.departure_date}</p>
                </div>
                <div className="more-info">
                  <span className="more-info-left">
                    <p>Site to explore: {this.props.spot.site}</p>
                    <br/>
                    <ul className="activities">Activities in the area:
                      <li key="thing1"><i className="fas fa-hiking"></i>&nbsp;&nbsp; Hiking</li>
                      <li key="thing2"><i className="fas fa-swimmer"></i>&nbsp;&nbsp; Swimming in the nearby lake</li>
                      <li key="thing3"><i className="fas fa-mountain"></i>&nbsp;&nbsp; Mountain Climbing</li>
                      <li key="thing4"><i className="fas fa-skiing"></i>&nbsp;&nbsp; Skiing in winter</li>
                      <li key="thing5"><i className="fas fa-running"></i>&nbsp;&nbsp; Trail running</li>
                    </ul>
                  </span>
                  <span className="more-info-right">
                    <p>Number of guests: {booking.num_travelers}</p>
                    
                  </span>
                </div>
              </div>
            </div>
            <div className="booking-show-button-div">
              <div onClick={this.editBooking}
                className="update-booking-button">
                  <p>Update Booking</p>
              </div>
              <button 
                className="booking-cancel-button" 
                onClick={this.handleClick}>Cancel Booking
              </button>
            </div>
            <div className="back-to-div">
              <Link to="/" className="back-to-link">Back to all my bookings</Link>
            </div>
          </div>
        </div>
        {this.state.edit && <EditBookingContainer booking={booking}/>}
      </main>
    );
  }
}

export default BookingShow;