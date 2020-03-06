export const fetchSpots = () => (
  $.ajax({
    url: '/api/spots',
    method: 'GET'
  })
);

export const fetchSpot = spotId => (
  $.ajax({
    url: `/api/spots/${spotId}`,
    method: 'GET'
  })
);

export const createSpot = spot => (
  $.ajax({
    url: `/api/spots`,
    method: 'POST',
    data: {spot}
  })
);

export const updateSpot = spot => (
  $.ajax({
    url: `/api/spots/${spot.id}`,
    method: `PATCH`,
    data: {spot}
  })
)

export const deleteSpot = spotId => (
  $.ajax({
    url: `/api/spots/${spotId}`,
    method: 'DELETE'
  })
)