json.booking do
  json.partial! 'booking', booking: @booking
end

json.spot do
  json.extract! @booking.spot, :id, :host_id, :site, :location_name, :max_guests
end