@spots.each do |spot|
  json.set! spot.id do
    json.partial! 'spot', spot: spot
    json.photoUrl url_for(spot.photos[1])
  end
end