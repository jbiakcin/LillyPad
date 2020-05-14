json.spot do
    json.partial! "api/spots/spot", spot: @spot
    # json.reviews do |review|
    #     json.content review.content
    #     json.user review.user
    # end
    json.photoUrls @spot.photos.map {|file| url_for(file)}
end

json.user do
    json.extract! @spot.host, :id, :first_name, :last_name, :email
end