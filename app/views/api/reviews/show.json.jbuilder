json.review do
  json.partial! 'review', review: @review
end

json.spot do
  json.extract! @review.spot, :id, :host_id, :site, :location_name, :max_guests
  json.photoUrls @review.spot.photos.map {|file| url_for(file)}
end