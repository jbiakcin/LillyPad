json.spots do
  @spots.each do |spot|
    json.set! spot.id do
      json.partial! 'spot', spot: spot
      json.photoUrls spot.photos.map {|file| url_for(file)}
    end
  end
end

json.users do
  @spots.map(&:host).each do |host|
    json.set! host.id do
      json.extract! host, :id, :first_name, :last_name, :email
    end
  end
end

json.bookings do
  @spots.each do |spot|
    spot.bookings.each do |booking|
      json.set! booking.id do
        json.partial! 'api/bookings/booking', booking: booking
      end
    end
  end
end