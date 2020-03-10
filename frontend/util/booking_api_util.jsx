export const fetchAllBookings = () => (
  $.ajax({
    url: `/api/bookings`,
    method: `GET`
  })
);

export const fetchBooking = bookingId => (
  $.ajax({
    url: `/api/users/${userId}/bookings/${bookingId}`,
    method: 'GET'
  })
);

export const fetchUserBookings = () => (
  $.ajax({
    url: `/api/users/${userId}/bookings`
  })
)

export const createBooking = booking => (
  $.ajax({
    url: `/api/spots/${booking.spot_id}/bookings`,
    method: `POST`,
    data: {booking}
  })
);

export const updateBooking = booking => (
  $.ajax({
    url: `/api/users/${booking.user_id}/bookings/${booking.id}`,
    method: `PATCH`,
    data: {booking}
  })
);

export const deleteBooking = bookingId => (
  $.ajax({
    url: `/api/users/${booking.user_id}/bookings/${bookingId}`,
    method: `DELETE`
  })
)
