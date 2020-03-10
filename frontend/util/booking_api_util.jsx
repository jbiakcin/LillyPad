export const fetchAllBookings = () => (
  $.ajax({
    url: `/api/bookings`,
    method: `GET`
  })
);

export const fetchBooking = bookingId => (
  $.ajax({
    url: `/api/bookings/${bookingId}`,
    method: 'GET'
  })
);

export const fetchUserBookings = (userId) => (
  $.ajax({
    url: `/api/users/${userId}/bookings`,
    method: 'GET'
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
    url: `/api/bookings/${booking.id}`,
    method: `PATCH`,
    data: {booking}
  })
);

export const deleteBooking = bookingId => (
  $.ajax({
    url: `/api/bookings/${bookingId}`,
    method: `DELETE`
  })
)
