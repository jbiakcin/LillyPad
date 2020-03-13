import * as BookingAPIUtil from '../util/booking_api_util';
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

const receiveBookings = payload =>{
  return {
  type: RECEIVE_BOOKINGS,
  bookings: payload.bookings,
  spots: payload.spots
}};

const receiveBooking = payload =>({
  type: RECEIVE_BOOKING,
  booking: payload.booking,
  spot: payload.spot
});

const removeBooking = bookingId =>({
  type: REMOVE_BOOKING,
  bookingId
});

export const fetchAllBookings = () => dispatch => (
  BookingAPIUtil.fetchAllBookings()
    .then(bookings => dispatch(receiveBookings(bookings)))
);

export const fetchUserBookings = (userId) => dispatch => (
  BookingAPIUtil.fetchUserBookings(userId)
    .then(bookings => dispatch(receiveBookings(bookings)))
);

export const fetchBooking = bookingId => dispatch => (
  BookingAPIUtil.fetchBooking(bookingId)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const createBooking = booking => dispatch => (
  BookingAPIUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const updateBooking = booking => dispatch => (
  BookingAPIUtil.updateBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const deleteBooking = bookingId => dispatch => (
  BookingAPIUtil.deleteBooking(bookingId)
    .then(booking => dispatch(removeBooking(bookingId)))
)