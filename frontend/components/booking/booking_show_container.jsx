// import {connect} from 'react-redux';
// import BookingShow from './booking_show';
// import {fetchUserBookings, updateBooking, deleteBooking} from '../../actions/booking_actions';



// const mSP = ({entities, session, errors}) => {
//   return {
//     user: entities.users[session.id]
//   }
// };

// const mDP = dispatch => {
//   return {
//     fetchUserBookings: () => dispatch(fetchUserBookings()),
//     updateBooking: booking => dispatch(updateBooking(booking)),
//     deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
//   }
// };

// export default connect(mSP, mDP)(BookingShow);