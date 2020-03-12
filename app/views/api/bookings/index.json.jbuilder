json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.partial! 'booking', booking: booking
    end
  end
end

json.spots do
  @bookings.map(&:spot).each do |spot|
    json.set! spot.id do
      json.extract spot, :id, :host_id, :site, :location_name, :max_guests
      json.photoUrls spot.photos.map {|file| url_for(file)}
    end
  end
end