import React from 'react';
import {withRouter} from 'react-router-dom';
import DashboardHeader from '../dashboard/dashboard_header';
import 'react-dates/initialize';
import { SingleDatePicker, DatePicker, DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';


class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchUser(this.props.currentUser.id)
  // }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  updateDate(field) {
    return e => this.setState({ [field]: new Date(e.currentTarget.value) });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({}, this.state)
    booking.arrival_date = moment(booking.arrival_date).format('YYYY-MM-DD');
    booking.departure_date = moment(booking.departure_date).format('YYYY-MM-DD');
    booking.spot_id = this.props.match.params.spotId;
    this.props.processForm(booking)
      .then(() => this.props.history.push('/dashboard'));
  }

  render () {
    return (
      <main className="booking-form-main">
        <div className="booking-form-body">
          <h2>{this.props.formType} YOUR BOOKING REQUEST</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="date-join">
              <label className="date-range">Arrival and Departure Dates:
              <br/>
                <DateRangePicker
                  startDate={this.state.arrival_date}
                  startDateId="1"
                  endDate={this.state.departure_date}
                  endDateId="2"
                  onDatesChange={({ startDate, endDate }) => this.setState({ arrival_date: startDate, departure_date: endDate })}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => this.setState({ focusedInput })}
                  showClearDates={true}
                  regular={true}
                  numberOfMonths={1} 
                  startDatePlaceholderText="yyyy-mm-dd"
                  endDatePlaceholderText="yyyy-mm-dd"
                  required
                />
              </label>
            </div>
            <div className="num-travelers">
              <label className="num-label">Number of Travelers </label>
              <br/>
                <select value={this.state.num_travelers} onChange={this.update('num_travelers')} className="num-travelers-select">
                  <option value="--">--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                </select>
            </div>
            <div className="msg">
              <label>Message</label>
              <textarea onChange={this.update('message')} 
                id="msg-to-host"
                placeholder="Introduce yourself to the host with a nice note describing your trip, why you’d like to stay, and why you’d be a great guest."
                value={this.state.message}
              ></textarea>
            </div>
            <div className="booking-form-submit">
              <button onClick={this.props.hideForm} className="cancel-button" >CANCEL</button>
              <button type="submit" className="booking-form-submit-button">{this.props.formType}</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default withRouter(BookingForm);