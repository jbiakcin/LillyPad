json.spot do
    json.partial! "api/spots/spot", spot: @spot
    json.photoUrls @spot.photos.map {|file| url_for(file)}
end

json.user do
    json.extract! @spot.host, :id, :first_name, :last_name, :email
end

json.reviews do
    @spot.reviews.each do |review|
        json.set! review.id do
        json.partial! 'api/reviews/review', review: review
        end
   end
end