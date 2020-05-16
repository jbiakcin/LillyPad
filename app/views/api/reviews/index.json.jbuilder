json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.partial! 'review', review: review
    end
  end
end

# json.spots do
#   @reviews.map(&:spot).each do |spot|
#     json.set! spot.id do
#       json.extract spot, :id, :host_id, :site, :location_name, :max_guests
#       json.photoUrls spot.photos.map {|file| url_for(file)}
#     end
#   end
# end